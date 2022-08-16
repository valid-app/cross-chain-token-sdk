import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
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
    addExtraAllowance_send(amount: number | BigNumber): Promise<TransactionReceipt>;
    addExtraAllowance_call(amount: number | BigNumber): Promise<void>;
    addExtraAllowance: {
        (amount: number | BigNumber): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber) => Promise<void>;
    };
    deny_send(user: string): Promise<TransactionReceipt>;
    deny_call(user: string): Promise<void>;
    deny: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    extraAllowance(): Promise<BigNumber>;
    isPermitted(param1: string): Promise<BigNumber>;
    maximumPerDay(): Promise<BigNumber>;
    newOwner(): Promise<string>;
    onTransfer_send(params: {
        param1: string;
        param2: string;
        amount: number | BigNumber;
        param4: string;
    }): Promise<TransactionReceipt>;
    onTransfer_call(params: {
        param1: string;
        param2: string;
        amount: number | BigNumber;
        param4: string;
    }): Promise<void>;
    onTransfer: {
        (params: {
            param1: string;
            param2: string;
            amount: number | BigNumber;
            param4: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            param1: string;
            param2: string;
            amount: number | BigNumber;
            param4: string;
        }) => Promise<void>;
    };
    owner(): Promise<string>;
    permit_send(user: string): Promise<TransactionReceipt>;
    permit_call(user: string): Promise<void>;
    permit: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    remainingAllowance(): Promise<BigNumber>;
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
    transferredToday(): Promise<BigNumber>;
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
