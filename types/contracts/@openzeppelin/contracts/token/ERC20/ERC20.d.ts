import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class ERC20 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        name: string;
        symbol: string;
    }): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): ERC20.ApprovalEvent[];
    decodeApprovalEvent(event: Event): ERC20.ApprovalEvent;
    parseTransferEvent(receipt: TransactionReceipt): ERC20.TransferEvent[];
    decodeTransferEvent(event: Event): ERC20.TransferEvent;
    allowance(params: {
        owner: string;
        spender: string;
    }): Promise<BigNumber>;
    approve_send(params: {
        spender: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    approve_call(params: {
        spender: string;
        amount: number | BigNumber;
    }): Promise<boolean>;
    approve: {
        (params: {
            spender: string;
            amount: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            spender: string;
            amount: number | BigNumber;
        }) => Promise<boolean>;
    };
    balanceOf(account: string): Promise<BigNumber>;
    decimals(): Promise<BigNumber>;
    decreaseAllowance_send(params: {
        spender: string;
        subtractedValue: number | BigNumber;
    }): Promise<TransactionReceipt>;
    decreaseAllowance_call(params: {
        spender: string;
        subtractedValue: number | BigNumber;
    }): Promise<boolean>;
    decreaseAllowance: {
        (params: {
            spender: string;
            subtractedValue: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            spender: string;
            subtractedValue: number | BigNumber;
        }) => Promise<boolean>;
    };
    increaseAllowance_send(params: {
        spender: string;
        addedValue: number | BigNumber;
    }): Promise<TransactionReceipt>;
    increaseAllowance_call(params: {
        spender: string;
        addedValue: number | BigNumber;
    }): Promise<boolean>;
    increaseAllowance: {
        (params: {
            spender: string;
            addedValue: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            spender: string;
            addedValue: number | BigNumber;
        }) => Promise<boolean>;
    };
    name(): Promise<string>;
    symbol(): Promise<string>;
    totalSupply(): Promise<BigNumber>;
    transfer_send(params: {
        recipient: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    transfer_call(params: {
        recipient: string;
        amount: number | BigNumber;
    }): Promise<boolean>;
    transfer: {
        (params: {
            recipient: string;
            amount: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            recipient: string;
            amount: number | BigNumber;
        }) => Promise<boolean>;
    };
    transferFrom_send(params: {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    transferFrom_call(params: {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }): Promise<boolean>;
    transferFrom: {
        (params: {
            sender: string;
            recipient: string;
            amount: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            sender: string;
            recipient: string;
            amount: number | BigNumber;
        }) => Promise<boolean>;
    };
    private assign;
}
export declare module ERC20 {
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        value: BigNumber;
        _event: Event;
    }
}
