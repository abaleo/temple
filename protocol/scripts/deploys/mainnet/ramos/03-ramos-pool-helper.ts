import "@nomiclabs/hardhat-ethers";
import { ethers, network } from "hardhat";
import { BigNumber } from "ethers";
import {
  PoolHelper__factory
} from "../../../../typechain";
import amoAddresses from "../../../../test/amo/amo-constants";
import {
  deployAndMine,
  DEPLOYED_CONTRACTS, 
  DeployedContracts,
  ensureExpectedEnvvars,
} from "../../helpers";


const { TEMPLE_BB_A_USD_BALANCER_POOL_ID, TEMPLE_INDEX_IN_POOL } = amoAddresses.mainnet.others;
const { BALANCER_VAULT } = amoAddresses.mainnet.contracts;
const { BBA_USD_TOKEN, TEMPLE_BBAUSD_LP_TOKEN } = amoAddresses.mainnet.tokens;

async function main() {
  ensureExpectedEnvvars();
  const [owner] = await ethers.getSigners();

  let DEPLOYED: DeployedContracts;

  if (DEPLOYED_CONTRACTS[network.name] === undefined) {
      console.log(`No contracts configured for ${network.name}`);
      return;
  } else {
      DEPLOYED = DEPLOYED_CONTRACTS[network.name];
  }

  const poolHelperFactory = new PoolHelper__factory(owner);
  await deployAndMine(
    "RAMOS Pool Helper", poolHelperFactory, poolHelperFactory.deploy,
    BALANCER_VAULT,
    DEPLOYED.TEMPLE,
    BBA_USD_TOKEN,
    TEMPLE_BBAUSD_LP_TOKEN,
    DEPLOYED.RAMOS,
    BigNumber.from(TEMPLE_INDEX_IN_POOL),
    TEMPLE_BB_A_USD_BALANCER_POOL_ID
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });