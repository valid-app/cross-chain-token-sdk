import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
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
    allowToken_send(params: {
        token: string;
        allow: boolean;
    }): Promise<TransactionReceipt>;
    allowToken_call(params: {
        token: string;
        allow: boolean;
    }): Promise<void>;
    allowToken: {
        (params: {
            token: string;
            allow: boolean;
        }): Promise<TransactionReceipt>;
        call: (params: {
            token: string;
            allow: boolean;
        }) => Promise<void>;
    };
    allowedTokens(param1: string): Promise<boolean>;
    crossChainPolicy(): Promise<string>;
    deny_send(user: string): Promise<TransactionReceipt>;
    deny_call(user: string): Promise<void>;
    deny: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    isPermitted(param1: string): Promise<BigNumber>;
    lock_send(params: {
        token: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    lock_call(params: {
        token: string;
        amount: number | BigNumber;
    }): Promise<void>;
    lock: {
        (params: {
            token: string;
            amount: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            token: string;
            amount: number | BigNumber;
        }) => Promise<void>;
    };
    locked(params: {
        param1: number | BigNumber;
        param2: string;
        param3: string;
    }): Promise<BigNumber>;
    newOwner(): Promise<string>;
    newRound_send(): Promise<TransactionReceipt>;
    newRound_call(): Promise<void>;
    newRound: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
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
    refund_send(params: {
        txHash: string;
        transferIndex: number | BigNumber;
        token: string;
        destination: string;
        amount: number | BigNumber;
        extraData: string;
    }): Promise<TransactionReceipt>;
    refund_call(params: {
        txHash: string;
        transferIndex: number | BigNumber;
        token: string;
        destination: string;
        amount: number | BigNumber;
        extraData: string;
    }): Promise<void>;
    refund: {
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
    refunded(params: {
        param1: string;
        param2: number | BigNumber;
    }): Promise<boolean>;
    resume_send(): Promise<TransactionReceipt>;
    resume_call(): Promise<void>;
    resume: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    round(): Promise<BigNumber>;
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
    transferETH_send(params: {
        destination: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    transferETH_call(params: {
        destination: string;
        amount: number | BigNumber;
    }): Promise<void>;
    transferETH: {
        (params: {
            destination: string;
            amount: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            destination: string;
            amount: number | BigNumber;
        }) => Promise<void>;
    };
    transferOwnership_send(newOwner: string): Promise<TransactionReceipt>;
    transferOwnership_call(newOwner: string): Promise<void>;
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    transferToken_send(params: {
        token: string;
        destination: string;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    transferToken_call(params: {
        token: string;
        destination: string;
        amount: number | BigNumber;
    }): Promise<void>;
    transferToken: {
        (params: {
            token: string;
            destination: string;
            amount: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            token: string;
            destination: string;
            amount: number | BigNumber;
        }) => Promise<void>;
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
