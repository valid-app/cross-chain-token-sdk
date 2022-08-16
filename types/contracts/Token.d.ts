import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class Token extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        name: string;
        symbol: string;
    }): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): Token.ApprovalEvent[];
    decodeApprovalEvent(event: Event): Token.ApprovalEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): Token.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): Token.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): Token.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): Token.DeauthorizeEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Token.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): Token.StartOwnershipTransferEvent;
    parseTransferEvent(receipt: TransactionReceipt): Token.TransferEvent[];
    decodeTransferEvent(event: Event): Token.TransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): Token.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): Token.TransferOwnershipEvent;
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
    burn_send(amount: number | BigNumber): Promise<TransactionReceipt>;
    burn_call(amount: number | BigNumber): Promise<void>;
    burn: {
        (amount: number | BigNumber): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber) => Promise<void>;
    };
    burnFrom_send(params: {
        account: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    burnFrom_call(params: {
        account: string;
        amount: number | BigNumber;
    }): Promise<void>;
    burnFrom: {
        (params: {
            account: string;
            amount: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            account: string;
            amount: number | BigNumber;
        }) => Promise<void>;
    };
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
    deny_send(user: string): Promise<TransactionReceipt>;
    deny_call(user: string): Promise<void>;
    deny: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
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
    isPermitted(param1: string): Promise<BigNumber>;
    mint_send(params: {
        account: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    mint_call(params: {
        account: string;
        amount: number | BigNumber;
    }): Promise<boolean>;
    mint: {
        (params: {
            account: string;
            amount: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            account: string;
            amount: number | BigNumber;
        }) => Promise<boolean>;
    };
    name(): Promise<string>;
    newOwner(): Promise<string>;
    owner(): Promise<string>;
    permit_send(user: string): Promise<TransactionReceipt>;
    permit_call(user: string): Promise<void>;
    permit: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    symbol(): Promise<string>;
    takeOwnership_send(): Promise<TransactionReceipt>;
    takeOwnership_call(): Promise<void>;
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
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
    transferOwnership_send(newOwner: string): Promise<TransactionReceipt>;
    transferOwnership_call(newOwner: string): Promise<void>;
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    private assign;
}
export declare module Token {
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
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
    interface TransferEvent {
        from: string;
        to: string;
        value: BigNumber;
        _event: Event;
    }
    interface TransferOwnershipEvent {
        user: string;
        _event: Event;
    }
}
