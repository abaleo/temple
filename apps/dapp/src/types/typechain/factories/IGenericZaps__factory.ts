/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IGenericZaps, IGenericZapsInterface } from "../IGenericZaps";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reserveIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "userIn",
        type: "uint256",
      },
    ],
    name: "getSwapInAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fromToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fromAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "toToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "swapTarget",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "swapData",
        type: "bytes",
      },
    ],
    name: "zapIn",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

export class IGenericZaps__factory {
  static readonly abi = _abi;
  static createInterface(): IGenericZapsInterface {
    return new utils.Interface(_abi) as IGenericZapsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGenericZaps {
    return new Contract(address, _abi, signerOrProvider) as IGenericZaps;
  }
}