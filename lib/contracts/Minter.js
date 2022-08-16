"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Minter = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Minter_json_1 = __importDefault(require("./Minter.json"));
class Minter extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Minter_json_1.default.abi, Minter_json_1.default.bytecode);
        this.assign();
    }
    deploy() {
        return this.__deploy();
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
    parseBurnEvent(receipt) {
        return this.parseEvents(receipt, "Burn").map(e => this.decodeBurnEvent(e));
    }
    decodeBurnEvent(event) {
        let result = event.data;
        return {
            token: result.token,
            amount: new eth_wallet_1.BigNumber(result.amount),
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
    parseMintEvent(receipt) {
        return this.parseEvents(receipt, "Mint").map(e => this.decodeMintEvent(e));
    }
    decodeMintEvent(event) {
        let result = event.data;
        return {
            token: result.token,
            destination: result.destination,
            amount: new eth_wallet_1.BigNumber(result.amount),
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
        let burned_call = async (param1) => {
            let result = await this.call('burned', [eth_wallet_1.Utils.stringToBytes32(param1)]);
            return result;
        };
        this.burned = burned_call;
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
        let mintedParams = (params) => [eth_wallet_1.Utils.stringToBytes32(params.param1), eth_wallet_1.Utils.toString(params.param2)];
        let minted_call = async (params) => {
            let result = await this.call('minted', mintedParams(params));
            return result;
        };
        this.minted = minted_call;
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
        let burnParams = (params) => [eth_wallet_1.Utils.stringToBytes32(params.txHash), params.token, eth_wallet_1.Utils.toString(params.amount)];
        let burn_send = async (params) => {
            let result = await this.send('burn', burnParams(params));
            return result;
        };
        let burn_call = async (params) => {
            let result = await this.call('burn', burnParams(params));
            return;
        };
        this.burn = Object.assign(burn_send, {
            call: burn_call
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
        let mintParams = (params) => [eth_wallet_1.Utils.stringToBytes32(params.txHash), eth_wallet_1.Utils.toString(params.transferIndex), params.token, params.destination, eth_wallet_1.Utils.toString(params.amount), eth_wallet_1.Utils.stringToBytes(params.extraData)];
        let mint_send = async (params) => {
            let result = await this.send('mint', mintParams(params));
            return result;
        };
        let mint_call = async (params) => {
            let result = await this.call('mint', mintParams(params));
            return;
        };
        this.mint = Object.assign(mint_send, {
            call: mint_call
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
exports.Minter = Minter;
