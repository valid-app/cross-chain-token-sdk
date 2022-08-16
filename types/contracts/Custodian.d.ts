import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IAllowTokenParams {
    token: string;
    allow: boolean;
}
export interface ILockParams {
    token: string;
    amount: number | BigNumber;
}
export interface ILockedParams {
    param1: number | BigNumber;
    param2: string;
    param3: string;
}
export interface IRefundParams {
    txHash: string;
    transferIndex: number | BigNumber;
    token: string;
    destination: string;
    amount: number | BigNumber;
    extraData: string;
}
export interface IRefundedParams {
    param1: string;
    param2: number | BigNumber;
}
export interface ITransferETHParams {
    destination: string;
    amount: number | BigNumber;
}
export interface ITransferTokenParams {
    token: string;
    destination: string;
    amount: number | BigNumber;
}
export declare class Custodian extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    parseAllowTokenEvent(receipt: TransactionReceipt): Custodian.AllowTokenEvent[];
    decodeAllowTokenEvent(event: Event): Custodian.AllowTokenEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): Custodian.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): Custodian.AuthorizeEvent;
    parseCrossChainPolicyChangedEvent(receipt: TransactionReceipt): Custodian.CrossChainPolicyChangedEvent[];
    decodeCrossChainPolicyChangedEvent(event: Event): Custodian.CrossChainPolicyChangedEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): Custodian.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): Custodian.DeauthorizeEvent;
    parseLockEvent(receipt: TransactionReceipt): Custodian.LockEvent[];
    decodeLockEvent(event: Event): Custodian.LockEvent;
    parseNewRoundEvent(receipt: TransactionReceipt): Custodian.NewRoundEvent[];
    decodeNewRoundEvent(event: Event): Custodian.NewRoundEvent;
    parsePausedEvent(receipt: TransactionReceipt): Custodian.PausedEvent[];
    decodePausedEvent(event: Event): Custodian.PausedEvent;
    parseRefundEvent(receipt: TransactionReceipt): Custodian.RefundEvent[];
    decodeRefundEvent(event: Event): Custodian.RefundEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Custodian.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): Custodian.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): Custodian.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): Custodian.TransferOwnershipEvent;
    parseUnpausedEvent(receipt: TransactionReceipt): Custodian.UnpausedEvent[];
    decodeUnpausedEvent(event: Event): Custodian.UnpausedEvent;
    allowToken: {
        (params: IAllowTokenParams): Promise<TransactionReceipt>;
        call: (params: IAllowTokenParams) => Promise<void>;
    };
    allowedTokens: {
        (param1: string): Promise<boolean>;
    };
    crossChainPolicy: {
        (): Promise<string>;
    };
    deny: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    isPermitted: {
        (param1: string): Promise<BigNumber>;
    };
    lock: {
        (params: ILockParams): Promise<TransactionReceipt>;
        call: (params: ILockParams) => Promise<void>;
    };
    locked: {
        (params: ILockedParams): Promise<BigNumber>;
    };
    newOwner: {
        (): Promise<string>;
    };
    newRound: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    owner: {
        (): Promise<string>;
    };
    pause: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    paused: {
        (): Promise<boolean>;
    };
    permit: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    refund: {
        (params: IRefundParams): Promise<TransactionReceipt>;
        call: (params: IRefundParams) => Promise<void>;
    };
    refunded: {
        (params: IRefundedParams): Promise<boolean>;
    };
    resume: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    round: {
        (): Promise<BigNumber>;
    };
    setCrossChainPolicy: {
        (crossChainPolicy: string): Promise<TransactionReceipt>;
        call: (crossChainPolicy: string) => Promise<void>;
    };
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    transferETH: {
        (params: ITransferETHParams): Promise<TransactionReceipt>;
        call: (params: ITransferETHParams) => Promise<void>;
    };
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    transferToken: {
        (params: ITransferTokenParams): Promise<TransactionReceipt>;
        call: (params: ITransferTokenParams) => Promise<void>;
    };
    private assign;
}
export declare module Custodian {
    interface AllowTokenEvent {
        token: string;
        isAllow: boolean;
        msgSender: string;
        _event: Event;
    }
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface CrossChainPolicyChangedEvent {
        newPolicy: string;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
        _event: Event;
    }
    interface LockEvent {
        from: string;
        round: BigNumber;
        token: string;
        amount: BigNumber;
        newBalance: BigNumber;
        _event: Event;
    }
    interface NewRoundEvent {
        round: BigNumber;
        _event: Event;
    }
    interface PausedEvent {
        account: string;
        _event: Event;
    }
    interface RefundEvent {
        token: string;
        destination: string;
        amount: BigNumber;
        _event: Event;
    }
    interface StartOwnershipTransferEvent {
        user: string;
        _event: Event;
    }
    interface TransferOwnershipEvent {
        user: string;
        _event: Event;
    }
    interface UnpausedEvent {
        account: string;
        _event: Event;
    }
}
