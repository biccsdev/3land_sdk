"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeTraitValue = void 0;
const bn_js_1 = __importDefault(require("bn.js")); // eslint-disable-line @typescript-eslint/no-unused-vars
const borsh = __importStar(require("@coral-xyz/borsh"));
class FakeTraitValue {
    constructor(fields) {
        this.trait_value = fields.trait_value;
        this.state = fields.state;
    }
    static layout(property) {
        return borsh.struct([borsh.u64("trait_value"), borsh.u8("state")], property);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromDecoded(obj) {
        return new FakeTraitValue({
            trait_value: obj.trait_value,
            state: obj.state,
        });
    }
    static toEncodable(fields) {
        return {
            trait_value: fields.trait_value,
            state: fields.state,
        };
    }
    toJSON() {
        return {
            trait_value: this.trait_value.toString(),
            state: this.state,
        };
    }
    static fromJSON(obj) {
        return new FakeTraitValue({
            trait_value: new bn_js_1.default(obj.trait_value),
            state: obj.state,
        });
    }
    toEncodable() {
        return FakeTraitValue.toEncodable(this);
    }
}
exports.FakeTraitValue = FakeTraitValue;
//# sourceMappingURL=FakeTraitValue.js.map