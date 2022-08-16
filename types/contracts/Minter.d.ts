import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
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
    burn_send(params: {
        txHash: string;
        token: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    burn_call(params: {
        txHash: string;
        token: string;
        amount: number | BigNumber;
    }): Promise<void>;
    burn: {
        (params: {
            txHash: string;
            token: string;
            amount: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            txHash: string;
            token: string;
            amount: number | BigNumber;
        }) => Promise<void>;
    };
    burned(param1: string): Promise<boolean>;
    crossChainPolicy(): Promise<string>;
    deny_send(user: string): Promise<TransactionReceipt>;
    deny_call(user: string): Promise<void>;
    deny: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    isPermitted(param1: string): Promise<BigNumber>;
    mint_send(params: {
        txHash: string;
        transferIndex: number | BigNumber;
        token: string;
        destination: string;
        amount: number | BigNumber;
        extraData: string;
    }): Promise<TransactionReceipt>;
    mint_call(params: {
        txHash: string;
        transferIndex: number | BigNumber;
        token: string;
        destination: string;
        amount: number | BigNumber;
        extraData: string;
    }): Promise<void>;
    mint: {
        (params: {
            txHash: string;
            transferIndex: number | BigNumber;
            token: string;
            destination: string;
            amount: number | BigNumber;
            extraData: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            txHash: string;
            transferIndex: number | BigNumber;
            token: string;
            destination: string;
            amount: number | BigNumber;
            extraData: string;
        }) => Promise<void>;
    };
    minted(params: {
        param1: string;
        param2: number | BigNumber;
    }): Promise<boolean>;
    newOwner(): Promise<string>;
    owner(): Promise<string>;
    pause_send(): Promise<TransactionReceipt>;
    pause_call(): Promise<void>;
    pause: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    paused(): Promise<boolean>;
    permit_send(user: string): Promise<TransactionReceipt>;
    permit_call(user: string): Promise<void>;
    permit: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    resume_send(): Promise<TransactionReceipt>;
    resume_call(): Promise<void>;
    resume: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    setCrossChainPolicy_send(crossChainPolicy: string): Promise<TransactionReceipt>;
    setCrossChainPolicy_call(crossChainPolicy: string): Promise<void>;
    setCrossChainPolicy: {
        (crossChainPolicy: string): Promise<TransactionReceipt>;
        call: (crossChainPolicy: string) => Promise<void>;
    };
    takeOwnership_send(): Promise<TransactionReceipt>;
    takeOwnership_call(): Promise<void>;
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    transferOwnership_send(newOwner: string): Promise<TransactionReceipt>;
    transferOwnership_call(newOwner: string): Promise<void>;
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
