/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TreasuryIV,
  TreasuryIVInterface,
} from "../../../contracts/amm/TreasuryIV";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "frax",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "temple",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "intrinsicValueRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "frax",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "temple",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "frax",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "temple",
        type: "uint256",
      },
    ],
    name: "setIV",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161041f38038061041f83398101604081905261002f91610096565b61003833610046565b6001919091556002556100b9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156100a8578182fd5b505080516020909101519092909150565b610357806100c86000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80638da5cb5b116100505780638da5cb5b14610089578063a340bae2146100b6578063f2fde38b146100d957600080fd5b8063187c7ca21461006c578063715018a614610081575b600080fd5b61007f61007a366004610300565b6100ec565b005b61007f6100ff565b60005460405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6001546002546100c4919082565b604080519283526020830191909152016100ad565b61007f6100e73660046102c5565b610113565b6100f46101cf565b600191909155600255565b6101076101cf565b6101116000610250565b565b61011b6101cf565b73ffffffffffffffffffffffffffffffffffffffff81166101c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6101cc81610250565b50565b60005473ffffffffffffffffffffffffffffffffffffffff163314610111576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101ba565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156102d6578081fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146102f9578182fd5b9392505050565b60008060408385031215610312578081fd5b5050803592602090910135915056fea264697066735822122090e21ac363d0802cd43a75a93e0decce77807163061a19b07a60994a6b6937dc64736f6c63430008040033";

type TreasuryIVConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TreasuryIVConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TreasuryIV__factory extends ContractFactory {
  constructor(...args: TreasuryIVConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    frax: PromiseOrValue<BigNumberish>,
    temple: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TreasuryIV> {
    return super.deploy(frax, temple, overrides || {}) as Promise<TreasuryIV>;
  }
  override getDeployTransaction(
    frax: PromiseOrValue<BigNumberish>,
    temple: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(frax, temple, overrides || {});
  }
  override attach(address: string): TreasuryIV {
    return super.attach(address) as TreasuryIV;
  }
  override connect(signer: Signer): TreasuryIV__factory {
    return super.connect(signer) as TreasuryIV__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasuryIVInterface {
    return new utils.Interface(_abi) as TreasuryIVInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TreasuryIV {
    return new Contract(address, _abi, signerOrProvider) as TreasuryIV;
  }
}