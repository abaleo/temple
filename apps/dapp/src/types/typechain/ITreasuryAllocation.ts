/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface ITreasuryAllocationInterface extends utils.Interface {
  contractName: "ITreasuryAllocation";
  functions: {
    "reval()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "reval", values?: undefined): string;

  decodeFunctionResult(functionFragment: "reval", data: BytesLike): Result;

  events: {};
}

export interface ITreasuryAllocation extends BaseContract {
  contractName: "ITreasuryAllocation";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITreasuryAllocationInterface;

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
    reval(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  reval(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    reval(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    reval(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    reval(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}