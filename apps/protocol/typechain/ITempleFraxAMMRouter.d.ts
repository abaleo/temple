/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ITempleFraxAMMRouterInterface extends ethers.utils.Interface {
  functions: {
    "addLiquidity(uint256,uint256,uint256,uint256,address,uint256)": FunctionFragment;
    "dynamicThresholdDecayPerBlock()": FunctionFragment;
    "dynamicThresholdPriceWithDecay()": FunctionFragment;
    "mintRatioAt(uint256,uint256)": FunctionFragment;
    "pair()": FunctionFragment;
    "priceCrossedBelowDynamicThresholdBlock()": FunctionFragment;
    "quote(uint256,uint256,uint256)": FunctionFragment;
    "swapExactFraxForTemple(uint256,uint256,address,uint256)": FunctionFragment;
    "swapExactTempleForFrax(uint256,uint256,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "dynamicThresholdDecayPerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dynamicThresholdPriceWithDecay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintRatioAt",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pair", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceCrossedBelowDynamicThresholdBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "quote",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactFraxForTemple",
    values: [BigNumberish, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTempleForFrax",
    values: [BigNumberish, BigNumberish, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dynamicThresholdDecayPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dynamicThresholdPriceWithDecay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintRatioAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pair", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceCrossedBelowDynamicThresholdBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "quote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapExactFraxForTemple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTempleForFrax",
    data: BytesLike
  ): Result;

  events: {};
}

export class ITempleFraxAMMRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ITempleFraxAMMRouterInterface;

  functions: {
    addLiquidity(
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    dynamicThresholdDecayPerBlock(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    dynamicThresholdPriceWithDecay(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { frax: BigNumber; temple: BigNumber }>;

    mintRatioAt(
      temple: BigNumberish,
      frax: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { numerator: BigNumber; denominator: BigNumber }
    >;

    pair(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    priceCrossedBelowDynamicThresholdBlock(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { blockNumber: BigNumber }>;

    quote(
      amountA: BigNumberish,
      reserveA: BigNumberish,
      reserveB: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountB: BigNumber }>;

    swapExactFraxForTemple(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactTempleForFrax(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addLiquidity(
    amountADesired: BigNumberish,
    amountBDesired: BigNumberish,
    amountAMin: BigNumberish,
    amountBMin: BigNumberish,
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  dynamicThresholdDecayPerBlock(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  dynamicThresholdPriceWithDecay(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { frax: BigNumber; temple: BigNumber }>;

  mintRatioAt(
    temple: BigNumberish,
    frax: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { numerator: BigNumber; denominator: BigNumber }
  >;

  pair(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  priceCrossedBelowDynamicThresholdBlock(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  quote(
    amountA: BigNumberish,
    reserveA: BigNumberish,
    reserveB: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  swapExactFraxForTemple(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactTempleForFrax(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addLiquidity(
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amountA: BigNumber;
        amountB: BigNumber;
        liquidity: BigNumber;
      }
    >;

    dynamicThresholdDecayPerBlock(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dynamicThresholdPriceWithDecay(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { frax: BigNumber; temple: BigNumber }>;

    mintRatioAt(
      temple: BigNumberish,
      frax: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { numerator: BigNumber; denominator: BigNumber }
    >;

    pair(overrides?: CallOverrides): Promise<string>;

    priceCrossedBelowDynamicThresholdBlock(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quote(
      amountA: BigNumberish,
      reserveA: BigNumberish,
      reserveB: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapExactFraxForTemple(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapExactTempleForFrax(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    addLiquidity(
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    dynamicThresholdDecayPerBlock(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    dynamicThresholdPriceWithDecay(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintRatioAt(
      temple: BigNumberish,
      frax: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pair(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    priceCrossedBelowDynamicThresholdBlock(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quote(
      amountA: BigNumberish,
      reserveA: BigNumberish,
      reserveB: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapExactFraxForTemple(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactTempleForFrax(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    dynamicThresholdDecayPerBlock(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    dynamicThresholdPriceWithDecay(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintRatioAt(
      temple: BigNumberish,
      frax: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pair(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    priceCrossedBelowDynamicThresholdBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quote(
      amountA: BigNumberish,
      reserveA: BigNumberish,
      reserveB: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swapExactFraxForTemple(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactTempleForFrax(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}