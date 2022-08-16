import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./CrossChainPolicy.json";

export interface IOnTransferParams {param1:string;param2:string;amount:number|BigNumber;param4:string}
export class CrossChainPolicy extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(maximumPerDay:number|BigNumber): Promise<string>{
        return this.__deploy([Utils.toString(maximumPerDay)]);
    }
    parseAddExtraAllowanceEvent(receipt: TransactionReceipt): CrossChainPolicy.AddExtraAllowanceEvent[]{
        return this.parseEvents(receipt, "AddExtraAllowance").map(e=>this.decodeAddExtraAllowanceEvent(e));
    }
    decodeAddExtraAllowanceEvent(event: Event): CrossChainPolicy.AddExtraAllowanceEvent{
        let result = event.data;
        return {
            who: result.who,
            amount: new BigNumber(result.amount),
            newAmount: new BigNumber(result.newAmount),
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): CrossChainPolicy.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): CrossChainPolicy.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): CrossChainPolicy.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): CrossChainPolicy.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): CrossChainPolicy.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): CrossChainPolicy.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): CrossChainPolicy.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): CrossChainPolicy.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    addExtraAllowance: {
        (amount:number|BigNumber): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber) => Promise<void>;
    }
    deny: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    extraAllowance: {
        (): Promise<BigNumber>;
    }
    isPermitted: {
        (param1:string): Promise<BigNumber>;
    }
    maximumPerDay: {
        (): Promise<BigNumber>;
    }
    newOwner: {
        (): Promise<string>;
    }
    onTransfer: {
        (params: IOnTransferParams): Promise<TransactionReceipt>;
        call: (params: IOnTransferParams) => Promise<void>;
    }
    owner: {
        (): Promise<string>;
    }
    permit: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    remainingAllowance: {
        (): Promise<BigNumber>;
    }
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    transferredToday: {
        (): Promise<BigNumber>;
    }
    private assign(){
        let extraAllowance_call = async (): Promise<BigNumber> => {
            let result = await this.call('extraAllowance');
            return new BigNumber(result);
        }
        this.extraAllowance = extraAllowance_call
        let isPermitted_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('isPermitted',[param1]);
            return new BigNumber(result);
        }
        this.isPermitted = isPermitted_call
        let maximumPerDay_call = async (): Promise<BigNumber> => {
            let result = await this.call('maximumPerDay');
            return new BigNumber(result);
        }
        this.maximumPerDay = maximumPerDay_call
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
        let remainingAllowance_call = async (): Promise<BigNumber> => {
            let result = await this.call('remainingAllowance');
            return new BigNumber(result);
        }
        this.remainingAllowance = remainingAllowance_call
        let transferredToday_call = async (): Promise<BigNumber> => {
            let result = await this.call('transferredToday');
            return new BigNumber(result);
        }
        this.transferredToday = transferredToday_call
        let addExtraAllowance_send = async (amount:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('addExtraAllowance',[Utils.toString(amount)]);
            return result;
        }
        let addExtraAllowance_call = async (amount:number|BigNumber): Promise<void> => {
            let result = await this.call('addExtraAllowance',[Utils.toString(amount)]);
            return;
        }
        this.addExtraAllowance = Object.assign(addExtraAllowance_send, {
            call:addExtraAllowance_call
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
        let onTransferParams = (params: IOnTransferParams) => [params.param1,params.param2,Utils.toString(params.amount),Utils.stringToBytes(params.param4)];
        let onTransfer_send = async (params: IOnTransferParams): Promise<TransactionReceipt> => {
            let result = await this.send('onTransfer',onTransferParams(params));
            return result;
        }
        let onTransfer_call = async (params: IOnTransferParams): Promise<void> => {
            let result = await this.call('onTransfer',onTransferParams(params));
            return;
        }
        this.onTransfer = Object.assign(onTransfer_send, {
            call:onTransfer_call
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
    }
}
export module CrossChainPolicy{
    export interface AddExtraAllowanceEvent {who:string,amount:BigNumber,newAmount:BigNumber,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
}