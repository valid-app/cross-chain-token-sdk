import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IBurnParams {
    txHash: string;
    token: string;
    amount: number | BigNumber;
}
export interface IMintParams {
    txHash: string;
    transferIndex: number | BigNumber;
    token: string;
    destination: string;
    amount: number | BigNumber;
    extraData: string;
}
export interface IMintedParams {
    param1: string;
    param2: number | BigNumber;
}
export declare class Minter extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    parseAuthorizeEvent(receipt: TransactionReceipt): Minter.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): Minter.AuthorizeEvent;
    parseBurnEvent(receipt: TransactionReceipt): Minter.BurnEvent[];
    decodeBurnEvent(event: Event): Minter.BurnEvent;
    parseCrossChainPolicyChangedEvent(receipt: TransactionReceipt): Minter.CrossChainPolicyChangedEvent[];
    decodeCrossChainPolicyChangedEvent(event: Event): Minter.CrossChainPolicyChangedEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): Minter.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): Minter.DeauthorizeEvent;
    parseMintEvent(receipt: TransactionReceipt): Minter.MintEvent[];
    decodeMintEvent(event: Event): Minter.MintEvent;
    parsePausedEvent(receipt: TransactionReceipt): Minter.PausedEvent[];
    decodePausedEvent(event: Event): Minter.PausedEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Minter.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): Minter.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): Minter.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): Minter.TransferOwnershipEvent;
    parseUnpausedEvent(receipt: TransactionReceipt): Minter.UnpausedEvent[];
    decodeUnpausedEvent(event: Event): Minter.UnpausedEvent;
    burn: {
        (params: IBurnParams): Promise<TransactionReceipt>;
        call: (params: IBurnParams) => Promise<void>;
    };
    burned: {
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
    mint: {
        (params: IMintParams): Promise<TransactionReceipt>;
        call: (params: IMintParams) => Promise<void>;
    };
    minted: {
        (params: IMintedParams): Promise<boolean>;
    };
    newOwner: {
        (): Promise<string>;
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
    resume: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    setCrossChainPolicy: {
        (crossChainPolicy: string): Promise<TransactionReceipt>;
        call: (crossChainPolicy: string) => Promise<void>;
    };
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    private assign;
}
export declare module Minter {
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface BurnEvent {
        token: string;
        amount: BigNumber;
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
    interface MintEvent {
        token: string;
        destination: string;
        amount: BigNumber;
        _event: Event;
    }
    interface PausedEvent {
        account: string;
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
