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

interface AcceleratedExitQueueInterface extends ethers.utils.Interface {
  functions: {
    "accelerationStartAtEpoch()": FunctionFragment;
    "currentEpoch()": FunctionFragment;
    "disableAcceleratedExitQueue()": FunctionFragment;
    "epochAccelerationFactorDenominator()": FunctionFragment;
    "epochAccelerationFactorNumerator()": FunctionFragment;
    "exitQueue()": FunctionFragment;
    "join(address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "restake(uint256[],uint256)": FunctionFragment;
    "setAccelerationPolicy(uint256,uint256,uint256)": FunctionFragment;
    "setEpochSize(uint256)": FunctionFragment;
    "setMaxPerAddress(uint256)": FunctionFragment;
    "setMaxPerEpoch(uint256)": FunctionFragment;
    "setOwedTemple(address[],uint256[])": FunctionFragment;
    "staking()": FunctionFragment;
    "templeToken()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawEpochs(uint256[],uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accelerationStartAtEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "disableAcceleratedExitQueue",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "epochAccelerationFactorDenominator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "epochAccelerationFactorNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "exitQueue", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "join",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "restake",
    values: [BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAccelerationPolicy",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setEpochSize",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxPerAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxPerEpoch",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwedTemple",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "staking", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "templeToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawEpochs",
    values: [BigNumberish[], BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "accelerationStartAtEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableAcceleratedExitQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "epochAccelerationFactorDenominator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "epochAccelerationFactorNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exitQueue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "join", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "restake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAccelerationPolicy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEpochSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxPerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxPerEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOwedTemple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "staking", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "templeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawEpochs",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class AcceleratedExitQueue extends BaseContract {
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

  interface: AcceleratedExitQueueInterface;

  functions: {
    accelerationStartAtEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    currentEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    disableAcceleratedExitQueue(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    epochAccelerationFactorDenominator(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    epochAccelerationFactorNumerator(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    exitQueue(overrides?: CallOverrides): Promise<[string]>;

    join(
      _exiter: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    restake(
      epochs: BigNumberish[],
      length: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAccelerationPolicy(
      numerator: BigNumberish,
      denominator: BigNumberish,
      startAtEpoch: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setEpochSize(
      _epochSize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxPerAddress(
      _maxPerAddress: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxPerEpoch(
      _maxPerEpoch: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwedTemple(
      _users: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    staking(overrides?: CallOverrides): Promise<[string]>;

    templeToken(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawEpochs(
      epochs: BigNumberish[],
      length: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  accelerationStartAtEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  currentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  disableAcceleratedExitQueue(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  epochAccelerationFactorDenominator(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  epochAccelerationFactorNumerator(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  exitQueue(overrides?: CallOverrides): Promise<string>;

  join(
    _exiter: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  restake(
    epochs: BigNumberish[],
    length: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAccelerationPolicy(
    numerator: BigNumberish,
    denominator: BigNumberish,
    startAtEpoch: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setEpochSize(
    _epochSize: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxPerAddress(
    _maxPerAddress: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxPerEpoch(
    _maxPerEpoch: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwedTemple(
    _users: string[],
    _amounts: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  staking(overrides?: CallOverrides): Promise<string>;

  templeToken(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawEpochs(
    epochs: BigNumberish[],
    length: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    accelerationStartAtEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    currentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    disableAcceleratedExitQueue(overrides?: CallOverrides): Promise<void>;

    epochAccelerationFactorDenominator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    epochAccelerationFactorNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exitQueue(overrides?: CallOverrides): Promise<string>;

    join(
      _exiter: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    restake(
      epochs: BigNumberish[],
      length: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setAccelerationPolicy(
      numerator: BigNumberish,
      denominator: BigNumberish,
      startAtEpoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setEpochSize(
      _epochSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxPerAddress(
      _maxPerAddress: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxPerEpoch(
      _maxPerEpoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwedTemple(
      _users: string[],
      _amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    staking(overrides?: CallOverrides): Promise<string>;

    templeToken(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawEpochs(
      epochs: BigNumberish[],
      length: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    accelerationStartAtEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    currentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    disableAcceleratedExitQueue(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    epochAccelerationFactorDenominator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    epochAccelerationFactorNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exitQueue(overrides?: CallOverrides): Promise<BigNumber>;

    join(
      _exiter: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    restake(
      epochs: BigNumberish[],
      length: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAccelerationPolicy(
      numerator: BigNumberish,
      denominator: BigNumberish,
      startAtEpoch: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setEpochSize(
      _epochSize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxPerAddress(
      _maxPerAddress: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxPerEpoch(
      _maxPerEpoch: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwedTemple(
      _users: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    staking(overrides?: CallOverrides): Promise<BigNumber>;

    templeToken(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawEpochs(
      epochs: BigNumberish[],
      length: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accelerationStartAtEpoch(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    disableAcceleratedExitQueue(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    epochAccelerationFactorDenominator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    epochAccelerationFactorNumerator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exitQueue(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    join(
      _exiter: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    restake(
      epochs: BigNumberish[],
      length: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAccelerationPolicy(
      numerator: BigNumberish,
      denominator: BigNumberish,
      startAtEpoch: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setEpochSize(
      _epochSize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxPerAddress(
      _maxPerAddress: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxPerEpoch(
      _maxPerEpoch: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwedTemple(
      _users: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    staking(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    templeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawEpochs(
      epochs: BigNumberish[],
      length: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}