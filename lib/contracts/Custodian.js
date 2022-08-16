"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Custodian = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Custodian_json_1 = __importDefault(require("./Custodian.json"));
class Custodian extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Custodian_json_1.default.abi, Custodian_json_1.default.bytecode);
        this.assign();
    }
    deploy() {
        return this.__deploy();
    }
    parseAllowTokenEvent(receipt) {
        return this.parseEvents(receipt, "AllowToken").map(e => this.decodeAllowTokenEvent(e));
    }
    decodeAllowTokenEvent(event) {
        let result = event.data;
        return {
            token: result.token,
            isAllow: result.isAllow,
            msgSender: result.msgSender,
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
    parseCrossChainPolicyChangedEvent(receipt) {
        return this.parseEvents(receipt, "CrossChainPolicyChanged").map(e => this.decodeCrossChainPolicyChangedEvent(e));
    }
    decodeCrossChainPolicyChangedEvent(event) {
        let result = event.data;
        return {
            newPolicy: result.newPolicy,
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
    parseLockEvent(receipt) {
        return this.parseEvents(receipt, "Lock").map(e => this.decodeLockEvent(e));
    }
    decodeLockEvent(event) {
        let result = event.data;
        return {
            from: result.from,
            round: new eth_wallet_1.BigNumber(result.round),
            token: result.token,
            amount: new eth_wallet_1.BigNumber(result.amount),
            newBalance: new eth_wallet_1.BigNumber(result.newBalance),
            _event: event
        };
    }
    parseNewRoundEvent(receipt) {
        return this.parseEvents(receipt, "NewRound").map(e => this.decodeNewRoundEvent(e));
    }
    decodeNewRoundEvent(event) {
        let result = event.data;
        return {
            round: new eth_wallet_1.BigNumber(result.round),
            _event: event
        };
    }
    parsePausedEvent(receipt) {
        return this.parseEvents(receipt, "Paused").map(e => this.decodePausedEvent(e));
    }
    decodePausedEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            _event: event
        };
    }
    parseRefundEvent(receipt) {
        return this.parseEvents(receipt, "Refund").map(e => this.decodeRefundEvent(e));
    }
    decodeRefundEvent(event) {
        let result = event.data;
        return {
            token: result.token,
            destination: result.destination,
            amount: new eth_wallet_1.BigNumber(result.amount),
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
    parseUnpausedEvent(receipt) {
        return this.parseEvents(receipt, "Unpaused").map(e => this.decodeUnpausedEvent(e));
    }
    decodeUnpausedEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            _event: event
        };
    }
    assign() {
        let allowedTokens_call = async (param1) => {
            let result = await this.call('allowedTokens', [param1]);
            return result;
        };
        this.allowedTokens = allowedTokens_call;
        let crossChainPolicy_call = async () => {
            let result = await this.call('crossChainPolicy');
            return result;
        };
        this.crossChainPolicy = crossChainPolicy_call;
        let isPermitted_call = async (param1) => {
            let result = await this.call('isPermitted', [param1]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.isPermitted = isPermitted_call;
        let lockedParams = (params) => [eth_wallet_1.Utils.toString(params.param1), params.param2, params.param3];
        let locked_call = async (params) => {
            let result = await this.call('locked', lockedParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.locked = locked_call;
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
        let paused_call = async () => {
            let result = await this.call('paused');
            return result;
        };
        this.paused = paused_call;
        let refundedParams = (params) => [eth_wallet_1.Utils.stringToBytes32(params.param1), eth_wallet_1.Utils.toString(params.param2)];
        let refunded_call = async (params) => {
            let result = await this.call('refunded', refundedParams(params));
            return result;
        };
        this.refunded = refunded_call;
        let round_call = async () => {
            let result = await this.call('round');
            return new eth_wallet_1.BigNumber(result);
        };
        this.round = round_call;
        let allowTokenParams = (params) => [params.token, params.allow];
        let allowToken_send = async (params) => {
            let result = await this.send('allowToken', allowTokenParams(params));
            return result;
        };
        let allowToken_call = async (params) => {
            let result = await this.call('allowToken', allowTokenParams(params));
            return;
        };
        this.allowToken = Object.assign(allowToken_send, {
            call: allowToken_call
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
        let lockParams = (params) => [params.token, eth_wallet_1.Utils.toString(params.amount)];
        let lock_send = async (params) => {
            let result = await this.send('lock', lockParams(params));
            return result;
        };
        let lock_call = async (params) => {
            let result = await this.call('lock', lockParams(params));
            return;
        };
        this.lock = Object.assign(lock_send, {
            call: lock_call
        });
        let newRound_send = async () => {
            let result = await this.send('newRound');
            return result;
        };
        let newRound_call = async () => {
            let result = await this.call('newRound');
            return;
        };
        this.newRound = Object.assign(newRound_send, {
            call: newRound_call
        });
        let pause_send = async () => {
            let result = await this.send('pause');
            return result;
        };
        let pause_call = async () => {
            let result = await this.call('pause');
            return;
        };
        this.pause = Object.assign(pause_send, {
            call: pause_call
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
        let refundParams = (params) => [eth_wallet_1.Utils.stringToBytes32(params.txHash), eth_wallet_1.Utils.toString(params.transferIndex), params.token, params.destination, eth_wallet_1.Utils.toString(params.amount), eth_wallet_1.Utils.stringToBytes(params.extraData)];
        let refund_send = async (params) => {
            let result = await this.send('refund', refundParams(params));
            return result;
        };
        let refund_call = async (params) => {
            let result = await this.call('refund', refundParams(params));
            return;
        };
        this.refund = Object.assign(refund_send, {
            call: refund_call
        });
        let resume_send = async () => {
            let result = await this.send('resume');
            return result;
        };
        let resume_call = async () => {
            let result = await this.call('resume');
            return;
        };
        this.resume = Object.assign(resume_send, {
            call: resume_call
        });
        let setCrossChainPolicy_send = async (crossChainPolicy) => {
            let result = await this.send('setCrossChainPolicy', [crossChainPolicy]);
            return result;
        };
        let setCrossChainPolicy_call = async (crossChainPolicy) => {
            let result = await this.call('setCrossChainPolicy', [crossChainPolicy]);
            return;
        };
        this.setCrossChainPolicy = Object.assign(setCrossChainPolicy_send, {
            call: setCrossChainPolicy_call
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
        let transferETHParams = (params) => [params.destination, eth_wallet_1.Utils.toString(params.amount)];
        let transferETH_send = async (params) => {
            let result = await this.send('transferETH', transferETHParams(params));
            return result;
        };
        let transferETH_call = async (params) => {
            let result = await this.call('transferETH', transferETHParams(params));
            return;
        };
        this.transferETH = Object.assign(transferETH_send, {
            call: transferETH_call
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
        let transferTokenParams = (params) => [params.token, params.destination, eth_wallet_1.Utils.toString(params.amount)];
        let transferToken_send = async (params) => {
            let result = await this.send('transferToken', transferTokenParams(params));
            return result;
        };
        let transferToken_call = async (params) => {
            let result = await this.call('transferToken', transferTokenParams(params));
            return;
        };
        this.transferToken = Object.assign(transferToken_send, {
            call: transferToken_call
        });
    }
}
exports.Custodian = Custodian;
