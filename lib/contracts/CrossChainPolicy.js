"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossChainPolicy = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const CrossChainPolicy_json_1 = __importDefault(require("./CrossChainPolicy.json"));
class CrossChainPolicy extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, CrossChainPolicy_json_1.default.abi, CrossChainPolicy_json_1.default.bytecode);
        this.assign();
    }
    deploy(maximumPerDay) {
        return this.__deploy([eth_wallet_1.Utils.toString(maximumPerDay)]);
    }
    parseAddExtraAllowanceEvent(receipt) {
        return this.parseEvents(receipt, "AddExtraAllowance").map(e => this.decodeAddExtraAllowanceEvent(e));
    }
    decodeAddExtraAllowanceEvent(event) {
        let result = event.data;
        return {
            who: result.who,
            amount: new eth_wallet_1.BigNumber(result.amount),
            newAmount: new eth_wallet_1.BigNumber(result.newAmount),
            _event: event
        };
    }
    parseAuthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt) {
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt) {
        return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    assign() {
        let extraAllowance_call = async () => {
            let result = await this.call('extraAllowance');
            return new eth_wallet_1.BigNumber(result);
        };
        this.extraAllowance = extraAllowance_call;
        let isPermitted_call = async (param1) => {
            let result = await this.call('isPermitted', [param1]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.isPermitted = isPermitted_call;
        let maximumPerDay_call = async () => {
            let result = await this.call('maximumPerDay');
            return new eth_wallet_1.BigNumber(result);
        };
        this.maximumPerDay = maximumPerDay_call;
        let newOwner_call = async () => {
            let result = await this.call('newOwner');
            return result;
        };
        this.newOwner = newOwner_call;
        let owner_call = async () => {
            let result = await this.call('owner');
            return result;
        };
        this.owner = owner_call;
        let remainingAllowance_call = async () => {
            let result = await this.call('remainingAllowance');
            return new eth_wallet_1.BigNumber(result);
        };
        this.remainingAllowance = remainingAllowance_call;
        let transferredToday_call = async () => {
            let result = await this.call('transferredToday');
            return new eth_wallet_1.BigNumber(result);
        };
        this.transferredToday = transferredToday_call;
        let addExtraAllowance_send = async (amount) => {
            let result = await this.send('addExtraAllowance', [eth_wallet_1.Utils.toString(amount)]);
            return result;
        };
        let addExtraAllowance_call = async (amount) => {
            let result = await this.call('addExtraAllowance', [eth_wallet_1.Utils.toString(amount)]);
            return;
        };
        this.addExtraAllowance = Object.assign(addExtraAllowance_send, {
            call: addExtraAllowance_call
        });
        let deny_send = async (user) => {
            let result = await this.send('deny', [user]);
            return result;
        };
        let deny_call = async (user) => {
            let result = await this.call('deny', [user]);
            return;
        };
        this.deny = Object.assign(deny_send, {
            call: deny_call
        });
        let onTransferParams = (params) => [params.param1, params.param2, eth_wallet_1.Utils.toString(params.amount), eth_wallet_1.Utils.stringToBytes(params.param4)];
        let onTransfer_send = async (params) => {
            let result = await this.send('onTransfer', onTransferParams(params));
            return result;
        };
        let onTransfer_call = async (params) => {
            let result = await this.call('onTransfer', onTransferParams(params));
            return;
        };
        this.onTransfer = Object.assign(onTransfer_send, {
            call: onTransfer_call
        });
        let permit_send = async (user) => {
            let result = await this.send('permit', [user]);
            return result;
        };
        let permit_call = async (user) => {
            let result = await this.call('permit', [user]);
            return;
        };
        this.permit = Object.assign(permit_send, {
            call: permit_call
        });
        let takeOwnership_send = async () => {
            let result = await this.send('takeOwnership');
            return result;
        };
        let takeOwnership_call = async () => {
            let result = await this.call('takeOwnership');
            return;
        };
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call: takeOwnership_call
        });
        let transferOwnership_send = async (newOwner) => {
            let result = await this.send('transferOwnership', [newOwner]);
            return result;
        };
        let transferOwnership_call = async (newOwner) => {
            let result = await this.call('transferOwnership', [newOwner]);
            return;
        };
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call: transferOwnership_call
        });
    }
}
exports.CrossChainPolicy = CrossChainPolicy;
