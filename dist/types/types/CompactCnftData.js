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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompactCnftData = void 0;
const borsh = __importStar(require("@coral-xyz/borsh"));
class CompactCnftData {
    constructor(fields) {
        this.root = fields.root;
        this.arweave = fields.arweave;
        this.index = fields.index;
    }
    static layout(property) {
        return borsh.struct([
            borsh.array(borsh.u8(), 32, "root"),
            borsh.str("arweave"),
            borsh.u32("index"),
        ], property);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromDecoded(obj) {
        return new CompactCnftData({
            root: obj.root,
            arweave: obj.arweave,
            index: obj.index,
        });
    }
    static toEncodable(fields) {
        return {
            root: fields.root,
            arweave: fields.arweave,
            index: fields.index,
        };
    }
    toJSON() {
        return {
            root: this.root,
            arweave: this.arweave,
            index: this.index,
        };
    }
    static fromJSON(obj) {
        return new CompactCnftData({
            root: obj.root,
            arweave: obj.arweave,
            index: obj.index,
        });
    }
    toEncodable() {
        return CompactCnftData.toEncodable(this);
    }
}
exports.CompactCnftData = CompactCnftData;
//# sourceMappingURL=CompactCnftData.js.map