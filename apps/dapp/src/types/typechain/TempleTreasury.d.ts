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

interface TempleTreasuryInterface extends ethers.utils.Interface {
  functions: {
    "MINT_ALLOWANCE()": FunctionFragment;
    "allocateTreasuryStablec(address,uint256)": FunctionFragment;
    "distributeHarvest()": FunctionFragment;
    "ejectTreasuryAllocation(address)": FunctionFragment;
    "harvest(uint256)": FunctionFragment;
    "harvestedRewardsTemple()": FunctionFragment;
    "intrinsicValueRatio()": FunctionFragment;
    "mintAndAllocateTemple(address,uint256)": FunctionFragment;
    "numPools()": FunctionFragment;
    "owner()": FunctionFragment;
    "poolHarvestShare(address)": FunctionFragment;
    "pools(uint256)": FunctionFragment;
    "removePool(uint256,address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "resetIV()": FunctionFragment;
    "seedMint(uint256,uint256)": FunctionFragment;
    "seeded()": FunctionFragment;
    "totalAllocationStablec()": FunctionFragment;
    "totalHarvestShares()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "treasuryAllocationsStablec(address)": FunctionFragment;
    "unallocateAndBurnUnusedMintedTemple(address)": FunctionFragment;
    "updateMarkToMarket(address)": FunctionFragment;
    "upsertPool(address,uint96)": FunctionFragment;
    "withdraw(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MINT_ALLOWANCE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allocateTreasuryStablec",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeHarvest",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ejectTreasuryAllocation",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "harvest",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "harvestedRewardsTemple",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "intrinsicValueRatio",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintAndAllocateTemple",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "numPools", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolHarvestShare",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "pools", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "removePool",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "resetIV", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "seedMint",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "seeded", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalAllocationStablec",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalHarvestShares",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "treasuryAllocationsStablec",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unallocateAndBurnUnusedMintedTemple",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMarkToMarket",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "upsertPool",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "MINT_ALLOWANCE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allocateTreasuryStablec",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeHarvest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ejectTreasuryAllocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "harvestedRewardsTemple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "intrinsicValueRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintAndAllocateTemple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "numPools", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolHarvestShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removePool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "resetIV", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "seedMint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "seeded", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAllocationStablec",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalHarvestShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "treasuryAllocationsStablec",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unallocateAndBurnUnusedMintedTemple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMarkToMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upsertPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "HarvestDistributed(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RewardsHarvested(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "HarvestDistributed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsHarvested"): EventFragment;
}

export type HarvestDistributedEvent = TypedEvent<
  [string, BigNumber] & { _contract: string; _amount: BigNumber }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type RewardsHarvestedEvent = TypedEvent<
  [BigNumber] & { _amount: BigNumber }
>;

export class TempleTreasury extends BaseContract {
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

  interface: TempleTreasuryInterface;

  functions: {
    MINT_ALLOWANCE(overrides?: CallOverrides): Promise<[string]>;

    allocateTreasuryStablec(
      _contract: string,
      amountStablec: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distributeHarvest(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ejectTreasuryAllocation(
      _contract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    harvest(
      distributionPercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    harvestedRewardsTemple(overrides?: CallOverrides): Promise<[BigNumber]>;

    intrinsicValueRatio(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { stablec: BigNumber; temple: BigNumber }
    >;

    mintAndAllocateTemple(
      _contract: string,
      amountTemple: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    numPools(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    poolHarvestShare(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    removePool(
      idx: BigNumberish,
      _contract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    resetIV(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    seedMint(
      amountStablec: BigNumberish,
      amountTemple: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    seeded(overrides?: CallOverrides): Promise<[boolean]>;

    totalAllocationStablec(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalHarvestShares(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    treasuryAllocationsStablec(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    unallocateAndBurnUnusedMintedTemple(
      _contract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateMarkToMarket(
      _contract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upsertPool(
      _contract: string,
      _poolHarvestShare: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _contract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  MINT_ALLOWANCE(overrides?: CallOverrides): Promise<string>;

  allocateTreasuryStablec(
    _contract: string,
    amountStablec: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distributeHarvest(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ejectTreasuryAllocation(
    _contract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  harvest(
    distributionPercent: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  harvestedRewardsTemple(overrides?: CallOverrides): Promise<BigNumber>;

  intrinsicValueRatio(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { stablec: BigNumber; temple: BigNumber }
  >;

  mintAndAllocateTemple(
    _contract: string,
    amountTemple: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  numPools(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  poolHarvestShare(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  removePool(
    idx: BigNumberish,
    _contract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  resetIV(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  seedMint(
    amountStablec: BigNumberish,
    amountTemple: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  seeded(overrides?: CallOverrides): Promise<boolean>;

  totalAllocationStablec(overrides?: CallOverrides): Promise<BigNumber>;

  totalHarvestShares(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  treasuryAllocationsStablec(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  unallocateAndBurnUnusedMintedTemple(
    _contract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateMarkToMarket(
    _contract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upsertPool(
    _contract: string,
    _poolHarvestShare: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _contract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    MINT_ALLOWANCE(overrides?: CallOverrides): Promise<string>;

    allocateTreasuryStablec(
      _contract: string,
      amountStablec: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    distributeHarvest(overrides?: CallOverrides): Promise<void>;

    ejectTreasuryAllocation(
      _contract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    harvest(
      distributionPercent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    harvestedRewardsTemple(overrides?: CallOverrides): Promise<BigNumber>;

    intrinsicValueRatio(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { stablec: BigNumber; temple: BigNumber }
    >;

    mintAndAllocateTemple(
      _contract: string,
      amountTemple: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    numPools(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    poolHarvestShare(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    removePool(
      idx: BigNumberish,
      _contract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    resetIV(overrides?: CallOverrides): Promise<void>;

    seedMint(
      amountStablec: BigNumberish,
      amountTemple: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    seeded(overrides?: CallOverrides): Promise<boolean>;

    totalAllocationStablec(overrides?: CallOverrides): Promise<BigNumber>;

    totalHarvestShares(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    treasuryAllocationsStablec(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unallocateAndBurnUnusedMintedTemple(
      _contract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateMarkToMarket(
      _contract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upsertPool(
      _contract: string,
      _poolHarvestShare: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(_contract: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "HarvestDistributed(address,uint256)"(
      _contract?: null,
      _amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _contract: string; _amount: BigNumber }
    >;

    HarvestDistributed(
      _contract?: null,
      _amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _contract: string; _amount: BigNumber }
    >;

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

    "RewardsHarvested(uint256)"(
      _amount?: null
    ): TypedEventFilter<[BigNumber], { _amount: BigNumber }>;

    RewardsHarvested(
      _amount?: null
    ): TypedEventFilter<[BigNumber], { _amount: BigNumber }>;
  };

  estimateGas: {
    MINT_ALLOWANCE(overrides?: CallOverrides): Promise<BigNumber>;

    allocateTreasuryStablec(
      _contract: string,
      amountStablec: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distributeHarvest(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ejectTreasuryAllocation(
      _contract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    harvest(
      distributionPercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    harvestedRewardsTemple(overrides?: CallOverrides): Promise<BigNumber>;

    intrinsicValueRatio(overrides?: CallOverrides): Promise<BigNumber>;

    mintAndAllocateTemple(
      _contract: string,
      amountTemple: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    numPools(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    poolHarvestShare(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    removePool(
      idx: BigNumberish,
      _contract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    resetIV(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    seedMint(
      amountStablec: BigNumberish,
      amountTemple: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    seeded(overrides?: CallOverrides): Promise<BigNumber>;

    totalAllocationStablec(overrides?: CallOverrides): Promise<BigNumber>;

    totalHarvestShares(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    treasuryAllocationsStablec(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unallocateAndBurnUnusedMintedTemple(
      _contract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateMarkToMarket(
      _contract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upsertPool(
      _contract: string,
      _poolHarvestShare: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      _contract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MINT_ALLOWANCE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allocateTreasuryStablec(
      _contract: string,
      amountStablec: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distributeHarvest(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ejectTreasuryAllocation(
      _contract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    harvest(
      distributionPercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    harvestedRewardsTemple(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    intrinsicValueRatio(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintAndAllocateTemple(
      _contract: string,
      amountTemple: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    numPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolHarvestShare(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removePool(
      idx: BigNumberish,
      _contract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    resetIV(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    seedMint(
      amountStablec: BigNumberish,
      amountTemple: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    seeded(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalAllocationStablec(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalHarvestShares(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    treasuryAllocationsStablec(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unallocateAndBurnUnusedMintedTemple(
      _contract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateMarkToMarket(
      _contract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upsertPool(
      _contract: string,
      _poolHarvestShare: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _contract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}