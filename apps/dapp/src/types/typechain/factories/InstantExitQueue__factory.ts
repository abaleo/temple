/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  InstantExitQueue,
  InstantExitQueueInterface,
} from "../InstantExitQueue";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract TempleStaking",
        name: "_templeStaking",
        type: "address",
      },
      {
        internalType: "contract TempleERC20Token",
        name: "_templeToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_exiter",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "join",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161067e38038061067e83398101604081905261002f91610060565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100b1565b60008060408385031215610072578182fd5b825161007d81610099565b602084015190925061008e81610099565b809150509250929050565b6001600160a01b03811681146100ae57600080fd5b50565b6105be806100c06000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80633b4da69f14610030575b600080fd5b61004361003e36600461048c565b610045565b005b60005473ffffffffffffffffffffffffffffffffffffffff1633146100cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6f6e6c79207374616b696e6720636f6e7472616374000000000000000000000060448201526064015b60405180910390fd5b6001546100f09073ffffffffffffffffffffffffffffffffffffffff163384846100f4565b5050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017905261018990859061018f565b50505050565b60006101f1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166102a09092919063ffffffff16565b80519091501561029b578080602001905181019061020f91906104cf565b61029b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016100c2565b505050565b60606102af84846000856102b9565b90505b9392505050565b60608247101561034b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016100c2565b843b6103b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016100c2565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516103dc91906104ef565b60006040518083038185875af1925050503d8060008114610419576040519150601f19603f3d011682016040523d82523d6000602084013e61041e565b606091505b509150915061042e828286610439565b979650505050505050565b606083156104485750816102b2565b8251156104585782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100c2919061050b565b6000806040838503121561049e578182fd5b823573ffffffffffffffffffffffffffffffffffffffff811681146104c1578283fd5b946020939093013593505050565b6000602082840312156104e0578081fd5b815180151581146102b2578182fd5b6000825161050181846020870161055c565b9190910192915050565b602081526000825180602084015261052a81604085016020870161055c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60005b8381101561057757818101518382015260200161055f565b83811115610189575050600091015256fea26469706673582212207b183ef64e1482617f0dbbdad4c67a418be7ce506110bca89abc07d1d749abe364736f6c63430008040033";

type InstantExitQueueConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InstantExitQueueConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InstantExitQueue__factory extends ContractFactory {
  constructor(...args: InstantExitQueueConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "InstantExitQueue";
  }

  deploy(
    _templeStaking: string,
    _templeToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InstantExitQueue> {
    return super.deploy(
      _templeStaking,
      _templeToken,
      overrides || {}
    ) as Promise<InstantExitQueue>;
  }
  getDeployTransaction(
    _templeStaking: string,
    _templeToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _templeStaking,
      _templeToken,
      overrides || {}
    );
  }
  attach(address: string): InstantExitQueue {
    return super.attach(address) as InstantExitQueue;
  }
  connect(signer: Signer): InstantExitQueue__factory {
    return super.connect(signer) as InstantExitQueue__factory;
  }
  static readonly contractName: "InstantExitQueue";
  public readonly contractName: "InstantExitQueue";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InstantExitQueueInterface {
    return new utils.Interface(_abi) as InstantExitQueueInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InstantExitQueue {
    return new Contract(address, _abi, signerOrProvider) as InstantExitQueue;
  }
}