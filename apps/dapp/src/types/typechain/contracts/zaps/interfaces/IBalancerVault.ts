/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export declare namespace IBalancerVault {
  export type JoinPoolRequestStruct = {
    assets: PromiseOrValue<string>[];
    maxAmountsIn: PromiseOrValue<BigNumberish>[];
    userData: PromiseOrValue<BytesLike>;
    fromInternalBalance: PromiseOrValue<boolean>;
  };

  export type JoinPoolRequestStructOutput = [
    string[],
    BigNumber[],
    string,
    boolean
  ] & {
    assets: string[];
    maxAmountsIn: BigNumber[];
    userData: string;
    fromInternalBalance: boolean;
  };

  export type BatchSwapStepStruct = {
    poolId: PromiseOrValue<BytesLike>;
    assetInIndex: PromiseOrValue<BigNumberish>;
    assetOutIndex: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
    userData: PromiseOrValue<BytesLike>;
  };

  export type BatchSwapStepStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ] & {
    poolId: string;
    assetInIndex: BigNumber;
    assetOutIndex: BigNumber;
    amount: BigNumber;
    userData: string;
  };

  export type FundManagementStruct = {
    sender: PromiseOrValue<string>;
    fromInternalBalance: PromiseOrValue<boolean>;
    recipient: PromiseOrValue<string>;
    toInternalBalance: PromiseOrValue<boolean>;
  };

  export type FundManagementStructOutput = [
    string,
    boolean,
    string,
    boolean
  ] & {
    sender: string;
    fromInternalBalance: boolean;
    recipient: string;
    toInternalBalance: boolean;
  };

  export type SingleSwapStruct = {
    poolId: PromiseOrValue<BytesLike>;
    kind: PromiseOrValue<BigNumberish>;
    assetIn: PromiseOrValue<string>;
    assetOut: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
    userData: PromiseOrValue<BytesLike>;
  };

  export type SingleSwapStructOutput = [
    string,
    number,
    string,
    string,
    BigNumber,
    string
  ] & {
    poolId: string;
    kind: number;
    assetIn: string;
    assetOut: string;
    amount: BigNumber;
    userData: string;
  };
}

export interface IBalancerVaultInterface extends utils.Interface {
  functions: {
    "getPoolTokens(bytes32)": FunctionFragment;
    "joinPool(bytes32,address,address,(address[],uint256[],bytes,bool))": FunctionFragment;
    "queryBatchSwap(uint8,(bytes32,uint256,uint256,uint256,bytes)[],address[],(address,bool,address,bool))": FunctionFragment;
    "swap((bytes32,uint8,address,address,uint256,bytes),(address,bool,address,bool),uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getPoolTokens"
      | "joinPool"
      | "queryBatchSwap"
      | "swap"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getPoolTokens",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "joinPool",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      IBalancerVault.JoinPoolRequestStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "queryBatchSwap",
    values: [
      PromiseOrValue<BigNumberish>,
      IBalancerVault.BatchSwapStepStruct[],
      PromiseOrValue<string>[],
      IBalancerVault.FundManagementStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      IBalancerVault.SingleSwapStruct,
      IBalancerVault.FundManagementStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getPoolTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "joinPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queryBatchSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;

  events: {};
}

export interface IBalancerVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBalancerVaultInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getPoolTokens(
      poolId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[], BigNumber] & {
        tokens: string[];
        balances: BigNumber[];
        lastChangeBlock: BigNumber;
      }
    >;

    joinPool(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    queryBatchSwap(
      kind: PromiseOrValue<BigNumberish>,
      swaps: IBalancerVault.BatchSwapStepStruct[],
      assets: PromiseOrValue<string>[],
      funds: IBalancerVault.FundManagementStruct,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    swap(
      singleSwap: IBalancerVault.SingleSwapStruct,
      funds: IBalancerVault.FundManagementStruct,
      limit: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getPoolTokens(
    poolId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [string[], BigNumber[], BigNumber] & {
      tokens: string[];
      balances: BigNumber[];
      lastChangeBlock: BigNumber;
    }
  >;

  joinPool(
    poolId: PromiseOrValue<BytesLike>,
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    request: IBalancerVault.JoinPoolRequestStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  queryBatchSwap(
    kind: PromiseOrValue<BigNumberish>,
    swaps: IBalancerVault.BatchSwapStepStruct[],
    assets: PromiseOrValue<string>[],
    funds: IBalancerVault.FundManagementStruct,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  swap(
    singleSwap: IBalancerVault.SingleSwapStruct,
    funds: IBalancerVault.FundManagementStruct,
    limit: PromiseOrValue<BigNumberish>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getPoolTokens(
      poolId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[], BigNumber] & {
        tokens: string[];
        balances: BigNumber[];
        lastChangeBlock: BigNumber;
      }
    >;

    joinPool(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    queryBatchSwap(
      kind: PromiseOrValue<BigNumberish>,
      swaps: IBalancerVault.BatchSwapStepStruct[],
      assets: PromiseOrValue<string>[],
      funds: IBalancerVault.FundManagementStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    swap(
      singleSwap: IBalancerVault.SingleSwapStruct,
      funds: IBalancerVault.FundManagementStruct,
      limit: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getPoolTokens(
      poolId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    joinPool(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    queryBatchSwap(
      kind: PromiseOrValue<BigNumberish>,
      swaps: IBalancerVault.BatchSwapStepStruct[],
      assets: PromiseOrValue<string>[],
      funds: IBalancerVault.FundManagementStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      singleSwap: IBalancerVault.SingleSwapStruct,
      funds: IBalancerVault.FundManagementStruct,
      limit: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPoolTokens(
      poolId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    joinPool(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      request: IBalancerVault.JoinPoolRequestStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    queryBatchSwap(
      kind: PromiseOrValue<BigNumberish>,
      swaps: IBalancerVault.BatchSwapStepStruct[],
      assets: PromiseOrValue<string>[],
      funds: IBalancerVault.FundManagementStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swap(
      singleSwap: IBalancerVault.SingleSwapStruct,
      funds: IBalancerVault.FundManagementStruct,
      limit: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}