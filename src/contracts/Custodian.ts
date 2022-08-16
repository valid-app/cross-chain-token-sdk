import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./Custodian.json";

export interface IAllowTokenParams {token:string;allow:boolean}
export interface ILockParams {token:string;amount:number|BigNumber}
export interface ILockedParams {param1:number|BigNumber;param2:string;param3:string}
export interface IRefundParams {txHash:string;transferIndex:number|BigNumber;token:string;destination:string;amount:number|BigNumber;extraData:string}
export interface IRefundedParams {param1:string;param2:number|BigNumber}
export interface ITransferETHParams {destination:string;amount:number|BigNumber}
export interface ITransferTokenParams {token:string;destination:string;amount:number|BigNumber}
export class Custodian extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    parseAllowTokenEvent(receipt: TransactionReceipt): Custodian.AllowTokenEvent[]{
        return this.parseEvents(receipt, "AllowToken").map(e=>this.decodeAllowTokenEvent(e));
    }
    decodeAllowTokenEvent(event: Event): Custodian.AllowTokenEvent{
        let result = event.data;
        return {
            token: result.token,
            isAllow: result.isAllow,
            msgSender: result.msgSender,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): Custodian.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): Custodian.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseCrossChainPolicyChangedEvent(receipt: TransactionReceipt): Custodian.CrossChainPolicyChangedEvent[]{
        return this.parseEvents(receipt, "CrossChainPolicyChanged").map(e=>this.decodeCrossChainPolicyChangedEvent(e));
    }
    decodeCrossChainPolicyChangedEvent(event: Event): Custodian.CrossChainPolicyChangedEvent{
        let result = event.data;
        return {
            newPolicy: result.newPolicy,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): Custodian.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): Custodian.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseLockEvent(receipt: TransactionReceipt): Custodian.LockEvent[]{
        return this.parseEvents(receipt, "Lock").map(e=>this.decodeLockEvent(e));
    }
    decodeLockEvent(event: Event): Custodian.LockEvent{
        let result = event.data;
        return {
            from: result.from,
            round: new BigNumber(result.round),
            token: result.token,
            amount: new BigNumber(result.amount),
            newBalance: new BigNumber(result.newBalance),
            _event: event
        };
    }
    parseNewRoundEvent(receipt: TransactionReceipt): Custodian.NewRoundEvent[]{
        return this.parseEvents(receipt, "NewRound").map(e=>this.decodeNewRoundEvent(e));
    }
    decodeNewRoundEvent(event: Event): Custodian.NewRoundEvent{
        let result = event.data;
        return {
            round: new BigNumber(result.round),
            _event: event
        };
    }
    parsePausedEvent(receipt: TransactionReceipt): Custodian.PausedEvent[]{
        return this.parseEvents(receipt, "Paused").map(e=>this.decodePausedEvent(e));
    }
    decodePausedEvent(event: Event): Custodian.PausedEvent{
        let result = event.data;
        return {
            account: result.account,
            _event: event
        };
    }
    parseRefundEvent(receipt: TransactionReceipt): Custodian.RefundEvent[]{
        return this.parseEvents(receipt, "Refund").map(e=>this.decodeRefundEvent(e));
    }
    decodeRefundEvent(event: Event): Custodian.RefundEvent{
        let result = event.data;
        return {
            token: result.token,
            destination: result.destination,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Custodian.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): Custodian.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): Custodian.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): Custodian.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUnpausedEvent(receipt: TransactionReceipt): Custodian.UnpausedEvent[]{
        return this.parseEvents(receipt, "Unpaused").map(e=>this.decodeUnpausedEvent(e));
    }
    decodeUnpausedEvent(event: Event): Custodian.UnpausedEvent{
        let result = event.data;
        return {
            account: result.account,
            _event: event
        };
    }
    allowToken: {
        (params: IAllowTokenParams): Promise<TransactionReceipt>;
        call: (params: IAllowTokenParams) => Promise<void>;
    }
    allowedTokens: {
        (param1:string): Promise<boolean>;
    }
    crossChainPolicy: {
        (): Promise<string>;
    }
    deny: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    isPermitted: {
        (param1:string): Promise<BigNumber>;
    }
    lock: {
        (params: ILockParams): Promise<TransactionReceipt>;
        call: (params: ILockParams) => Promise<void>;
    }
    locked: {
        (params: ILockedParams): Promise<BigNumber>;
    }
    newOwner: {
        (): Promise<string>;
    }
    newRound: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    owner: {
        (): Promise<string>;
    }
    pause: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    paused: {
        (): Promise<boolean>;
    }
    permit: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    refund: {
        (params: IRefundParams): Promise<TransactionReceipt>;
        call: (params: IRefundParams) => Promise<void>;
    }
    refunded: {
        (params: IRefundedParams): Promise<boolean>;
    }
    resume: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    round: {
        (): Promise<BigNumber>;
    }
    setCrossChainPolicy: {
        (crossChainPolicy:string): Promise<TransactionReceipt>;
        call: (crossChainPolicy:string) => Promise<void>;
    }
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    transferETH: {
        (params: ITransferETHParams): Promise<TransactionReceipt>;
        call: (params: ITransferETHParams) => Promise<void>;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    transferToken: {
        (params: ITransferTokenParams): Promise<TransactionReceipt>;
        call: (params: ITransferTokenParams) => Promise<void>;
    }
    private assign(){
        let allowedTokens_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('allowedTokens',[param1]);
            return result;
        }
        this.allowedTokens = allowedTokens_call
        let crossChainPolicy_call = async (): Promise<string> => {
            let result = await this.call('crossChainPolicy');
            return result;
        }
        this.crossChainPolicy = crossChainPolicy_call
        let isPermitted_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('isPermitted',[param1]);
            return new BigNumber(result);
        }
        this.isPermitted = isPermitted_call
        let lockedParams = (params: ILockedParams) => [Utils.toString(params.param1),params.param2,params.param3];
        let locked_call = async (params: ILockedParams): Promise<BigNumber> => {
            let result = await this.call('locked',lockedParams(params));
            return new BigNumber(result);
        }
        this.locked = locked_call
        let newOwner_call = async (): Promise<string> => {
            let result = await this.call('newOwner');
            return result;
        }
        this.newOwner = newOwner_call
        let owner_call = async (): Promise<string> => {
            let result = await this.call('owner');
            return result;
        }
        this.owner = owner_call
        let paused_call = async (): Promise<boolean> => {
            let result = await this.call('paused');
            return result;
        }
        this.paused = paused_call
        let refundedParams = (params: IRefundedParams) => [Utils.stringToBytes32(params.param1),Utils.toString(params.param2)];
        let refunded_call = async (params: IRefundedParams): Promise<boolean> => {
            let result = await this.call('refunded',refundedParams(params));
            return result;
        }
        this.refunded = refunded_call
        let round_call = async (): Promise<BigNumber> => {
            let result = await this.call('round');
            return new BigNumber(result);
        }
        this.round = round_call
        let allowTokenParams = (params: IAllowTokenParams) => [params.token,params.allow];
        let allowToken_send = async (params: IAllowTokenParams): Promise<TransactionReceipt> => {
            let result = await this.send('allowToken',allowTokenParams(params));
            return result;
        }
        let allowToken_call = async (params: IAllowTokenParams): Promise<void> => {
            let result = await this.call('allowToken',allowTokenParams(params));
            return;
        }
        this.allowToken = Object.assign(allowToken_send, {
            call:allowToken_call
        });
        let deny_send = async (user:string): Promise<TransactionReceipt> => {
            let result = await this.send('deny',[user]);
            return result;
        }
        let deny_call = async (user:string): Promise<void> => {
            let result = await this.call('deny',[user]);
            return;
        }
        this.deny = Object.assign(deny_send, {
            call:deny_call
        });
        let lockParams = (params: ILockParams) => [params.token,Utils.toString(params.amount)];
        let lock_send = async (params: ILockParams): Promise<TransactionReceipt> => {
            let result = await this.send('lock',lockParams(params));
            return result;
        }
        let lock_call = async (params: ILockParams): Promise<void> => {
            let result = await this.call('lock',lockParams(params));
            return;
        }
        this.lock = Object.assign(lock_send, {
            call:lock_call
        });
        let newRound_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('newRound');
            return result;
        }
        let newRound_call = async (): Promise<void> => {
            let result = await this.call('newRound');
            return;
        }
        this.newRound = Object.assign(newRound_send, {
            call:newRound_call
        });
        let pause_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('pause');
            return result;
        }
        let pause_call = async (): Promise<void> => {
            let result = await this.call('pause');
            return;
        }
        this.pause = Object.assign(pause_send, {
            call:pause_call
        });
        let permit_send = async (user:string): Promise<TransactionReceipt> => {
            let result = await this.send('permit',[user]);
            return result;
        }
        let permit_call = async (user:string): Promise<void> => {
            let result = await this.call('permit',[user]);
            return;
        }
        this.permit = Object.assign(permit_send, {
            call:permit_call
        });
        let refundParams = (params: IRefundParams) => [Utils.stringToBytes32(params.txHash),Utils.toString(params.transferIndex),params.token,params.destination,Utils.toString(params.amount),Utils.stringToBytes(params.extraData)];
        let refund_send = async (params: IRefundParams): Promise<TransactionReceipt> => {
            let result = await this.send('refund',refundParams(params));
            return result;
        }
        let refund_call = async (params: IRefundParams): Promise<void> => {
            let result = await this.call('refund',refundParams(params));
            return;
        }
        this.refund = Object.assign(refund_send, {
            call:refund_call
        });
        let resume_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('resume');
            return result;
        }
        let resume_call = async (): Promise<void> => {
            let result = await this.call('resume');
            return;
        }
        this.resume = Object.assign(resume_send, {
            call:resume_call
        });
        let setCrossChainPolicy_send = async (crossChainPolicy:string): Promise<TransactionReceipt> => {
            let result = await this.send('setCrossChainPolicy',[crossChainPolicy]);
            return result;
        }
        let setCrossChainPolicy_call = async (crossChainPolicy:string): Promise<void> => {
            let result = await this.call('setCrossChainPolicy',[crossChainPolicy]);
            return;
        }
        this.setCrossChainPolicy = Object.assign(setCrossChainPolicy_send, {
            call:setCrossChainPolicy_call
        });
        let takeOwnership_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('takeOwnership');
            return result;
        }
        let takeOwnership_call = async (): Promise<void> => {
            let result = await this.call('takeOwnership');
            return;
        }
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call:takeOwnership_call
        });
        let transferETHParams = (params: ITransferETHParams) => [params.destination,Utils.toString(params.amount)];
        let transferETH_send = async (params: ITransferETHParams): Promise<TransactionReceipt> => {
            let result = await this.send('transferETH',transferETHParams(params));
            return result;
        }
        let transferETH_call = async (params: ITransferETHParams): Promise<void> => {
            let result = await this.call('transferETH',transferETHParams(params));
            return;
        }
        this.transferETH = Object.assign(transferETH_send, {
            call:transferETH_call
        });
        let transferOwnership_send = async (newOwner:string): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[newOwner]);
            return result;
        }
        let transferOwnership_call = async (newOwner:string): Promise<void> => {
            let result = await this.call('transferOwnership',[newOwner]);
            return;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
        });
        let transferTokenParams = (params: ITransferTokenParams) => [params.token,params.destination,Utils.toString(params.amount)];
        let transferToken_send = async (params: ITransferTokenParams): Promise<TransactionReceipt> => {
            let result = await this.send('transferToken',transferTokenParams(params));
            return result;
        }
        let transferToken_call = async (params: ITransferTokenParams): Promise<void> => {
            let result = await this.call('transferToken',transferTokenParams(params));
            return;
        }
        this.transferToken = Object.assign(transferToken_send, {
            call:transferToken_call
        });
    }
}
export module Custodian{
    export interface AllowTokenEvent {token:string,isAllow:boolean,msgSender:string,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface CrossChainPolicyChangedEvent {newPolicy:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface LockEvent {from:string,round:BigNumber,token:string,amount:BigNumber,newBalance:BigNumber,_event:Event}
    export interface NewRoundEvent {round:BigNumber,_event:Event}
    export interface PausedEvent {account:string,_event:Event}
    export interface RefundEvent {token:string,destination:string,amount:BigNumber,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface UnpausedEvent {account:string,_event:Event}
}