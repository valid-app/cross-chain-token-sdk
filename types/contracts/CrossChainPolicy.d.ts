import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IOnTransferParams {
    param1: string;
    param2: string;
    amount: number | BigNumber;
    param4: string;
}
export declare class CrossChainPolicy extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(maximumPerDay: number | BigNumber): Promise<string>;
    parseAddExtraAllowanceEvent(receipt: TransactionReceipt): CrossChainPolicy.AddExtraAllowanceEvent[];
    decodeAddExtraAllowanceEvent(event: Event): CrossChainPolicy.AddExtraAllowanceEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): CrossChainPolicy.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): CrossChainPolicy.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): CrossChainPolicy.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): CrossChainPolicy.DeauthorizeEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): CrossChainPolicy.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): CrossChainPolicy.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): CrossChainPolicy.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): CrossChainPolicy.TransferOwnershipEvent;
    addExtraAllowance: {
        (amount: number | BigNumber): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber) => Promise<void>;
    };
    deny: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    extraAllowance: {
        (): Promise<BigNumber>;
    };
    isPermitted: {
        (param1: string): Promise<BigNumber>;
    };
    maximumPerDay: {
        (): Promise<BigNumber>;
    };
    newOwner: {
        (): Promise<string>;
    };
    onTransfer: {
        (params: IOnTransferParams): Promise<TransactionReceipt>;
        call: (params: IOnTransferParams) => Promise<void>;
    };
    owner: {
        (): Promise<string>;
    };
    permit: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    remainingAllowance: {
        (): Promise<BigNumber>;
    };
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    transferredToday: {
        (): Promise<BigNumber>;
    };
    private assign;
}
export declare module CrossChainPolicy {
    interface AddExtraAllowanceEvent {
        who: string;
        amount: BigNumber;
        newAmount: BigNumber;
        _event: Event;
    }
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
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
}
