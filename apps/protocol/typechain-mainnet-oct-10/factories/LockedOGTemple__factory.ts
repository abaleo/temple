/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LockedOGTemple,
  LockedOGTempleInterface,
} from "../LockedOGTemple";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract OGTemple",
        name: "_OG_TEMPLE",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_lockedUntil",
        type: "uint256",
      },
    ],
    name: "OGTempleLocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "OGTempleWithdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "OG_TEMPLE",
    outputs: [
      {
        internalType: "contract OGTemple",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountOGTemple",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lockedUntilTimestamp",
        type: "uint256",
      },
    ],
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_staker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountOGTemple",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lockedUntilTimestamp",
        type: "uint256",
      },
    ],
    name: "lockFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "locked",
    outputs: [
      {
        internalType: "uint256",
        name: "BalanceOGTemple",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "LockedUntilTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_staker",
        type: "address",
      },
    ],
    name: "numLocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_idx",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_staker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_idx",
        type: "uint256",
      },
    ],
    name: "withdrawFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200129138038062001291833981810160405281019062000037919062000096565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000124565b60008151905062000090816200010a565b92915050565b600060208284031215620000a957600080fd5b6000620000b9848285016200007f565b91505092915050565b6000620000cf82620000ea565b9050919050565b6000620000e382620000c2565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200011581620000d6565b81146200012157600080fd5b50565b61115d80620001346000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638f1284aa1161005b5780638f1284aa146100d6578063b9ef0830146100f4578063bf7bab7314610124578063db518db2146101555761007d565b80631338736f146100825780632e1a7d4d1461009e57806383e25f8a146100ba575b600080fd5b61009c60048036038101906100979190610b0d565b610171565b005b6100b860048036038101906100b39190610ae4565b610180565b005b6100d460048036038101906100cf9190610a6c565b61018d565b005b6100de610293565b6040516100eb9190610d3d565b60405180910390f35b61010e60048036038101906101099190610a07565b6102b9565b60405161011b9190610e1a565b60405180910390f35b61013e60048036038101906101399190610a30565b610304565b60405161014c929190610e35565b60405180910390f35b61016f600480360381019061016a9190610a30565b610345565b005b61017c33838361018d565b5050565b61018a3382610345565b50565b600060405180604001604052808481526020018381525090506000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050610252600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1633308661064c565b7faeba50e43ba4efe965d916ca4acb966022f5da3097e03c782578df36df61c59d84848460405161028593929190610d06565b60405180910390a150505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050919050565b6000602052816000526040600020818154811061032057600080fd5b9060005260206000209060020201600091509150508060000154908060010154905082565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050808054905082106103cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c490610dba565b60405180910390fd5b42818381548110610407577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600202016001015410610459576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045090610d9a565b60405180910390fd5b6000818381548110610494577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906002020160405180604001604052908160008201548152602001600182015481525050905081600183805490506104d59190610e90565b8154811061050c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060020201828481548110610553577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600202016000820154816000015560018201548160010155905050818054806105af577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000209060020201600080820160009055600182016000905550509055610609600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168583600001516106d5565b7f0c2301a118e6f0843fbd110920bbe9b409fc9330867e8b9c4f4637a7633ada8384826000015160405161063e929190610cdd565b60405180910390a150505050565b6106cf846323b872dd60e01b85858560405160240161066d93929190610ca6565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061075b565b50505050565b6107568363a9059cbb60e01b84846040516024016106f4929190610cdd565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061075b565b505050565b60006107bd826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166108229092919063ffffffff16565b905060008151111561081d57808060200190518101906107dd9190610abb565b61081c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081390610dfa565b60405180910390fd5b5b505050565b6060610831848460008561083a565b90509392505050565b60608247101561087f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087690610d7a565b60405180910390fd5b6108888561094e565b6108c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108be90610dda565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516108f09190610c8f565b60006040518083038185875af1925050503d806000811461092d576040519150601f19603f3d011682016040523d82523d6000602084013e610932565b606091505b5091509150610942828286610961565b92505050949350505050565b600080823b905060008111915050919050565b60608315610971578290506109c1565b6000835111156109845782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b89190610d58565b60405180910390fd5b9392505050565b6000813590506109d7816110e2565b92915050565b6000815190506109ec816110f9565b92915050565b600081359050610a0181611110565b92915050565b600060208284031215610a1957600080fd5b6000610a27848285016109c8565b91505092915050565b60008060408385031215610a4357600080fd5b6000610a51858286016109c8565b9250506020610a62858286016109f2565b9150509250929050565b600080600060608486031215610a8157600080fd5b6000610a8f868287016109c8565b9350506020610aa0868287016109f2565b9250506040610ab1868287016109f2565b9150509250925092565b600060208284031215610acd57600080fd5b6000610adb848285016109dd565b91505092915050565b600060208284031215610af657600080fd5b6000610b04848285016109f2565b91505092915050565b60008060408385031215610b2057600080fd5b6000610b2e858286016109f2565b9250506020610b3f858286016109f2565b9150509250929050565b610b5281610ec4565b82525050565b6000610b6382610e5e565b610b6d8185610e74565b9350610b7d818560208601610f30565b80840191505092915050565b610b9281610f0c565b82525050565b6000610ba382610e69565b610bad8185610e7f565b9350610bbd818560208601610f30565b610bc681610f92565b840191505092915050565b6000610bde602683610e7f565b9150610be982610fa3565b604082019050919050565b6000610c01601f83610e7f565b9150610c0c82610ff2565b602082019050919050565b6000610c24602483610e7f565b9150610c2f8261101b565b604082019050919050565b6000610c47601d83610e7f565b9150610c528261106a565b602082019050919050565b6000610c6a602a83610e7f565b9150610c7582611093565b604082019050919050565b610c8981610f02565b82525050565b6000610c9b8284610b58565b915081905092915050565b6000606082019050610cbb6000830186610b49565b610cc86020830185610b49565b610cd56040830184610c80565b949350505050565b6000604082019050610cf26000830185610b49565b610cff6020830184610c80565b9392505050565b6000606082019050610d1b6000830186610b49565b610d286020830185610c80565b610d356040830184610c80565b949350505050565b6000602082019050610d526000830184610b89565b92915050565b60006020820190508181036000830152610d728184610b98565b905092915050565b60006020820190508181036000830152610d9381610bd1565b9050919050565b60006020820190508181036000830152610db381610bf4565b9050919050565b60006020820190508181036000830152610dd381610c17565b9050919050565b60006020820190508181036000830152610df381610c3a565b9050919050565b60006020820190508181036000830152610e1381610c5d565b9050919050565b6000602082019050610e2f6000830184610c80565b92915050565b6000604082019050610e4a6000830185610c80565b610e576020830184610c80565b9392505050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000610e9b82610f02565b9150610ea683610f02565b925082821015610eb957610eb8610f63565b5b828203905092915050565b6000610ecf82610ee2565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610f1782610f1e565b9050919050565b6000610f2982610ee2565b9050919050565b60005b83811015610f4e578082015181840152602081019050610f33565b83811115610f5d576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f53706563696669656420656e747279206973207374696c6c206c6f636b656400600082015250565b7f4e6f206c6f636b20656e7472792061742074686520737065636966696564206960008201527f6e64657800000000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6110eb81610ec4565b81146110f657600080fd5b50565b61110281610ed6565b811461110d57600080fd5b50565b61111981610f02565b811461112457600080fd5b5056fea26469706673582212201beb41c9f254ba83b58b9b618aa675ef3af134b9ba4a14c1142614f0a0b4559f64736f6c63430008040033";

export class LockedOGTemple__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _OG_TEMPLE: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LockedOGTemple> {
    return super.deploy(_OG_TEMPLE, overrides || {}) as Promise<LockedOGTemple>;
  }
  getDeployTransaction(
    _OG_TEMPLE: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_OG_TEMPLE, overrides || {});
  }
  attach(address: string): LockedOGTemple {
    return super.attach(address) as LockedOGTemple;
  }
  connect(signer: Signer): LockedOGTemple__factory {
    return super.connect(signer) as LockedOGTemple__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LockedOGTempleInterface {
    return new utils.Interface(_abi) as LockedOGTempleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LockedOGTemple {
    return new Contract(address, _abi, signerOrProvider) as LockedOGTemple;
  }
}