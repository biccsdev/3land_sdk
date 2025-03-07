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
exports.fromCode = fromCode;
exports.fromTxError = fromTxError;
const programId_1 = require("../programId");
const anchor = __importStar(require("./anchor"));
function fromCode(code, logs) {
    return anchor.fromCode(code, logs);
}
function hasOwnProperty(obj, prop) {
    return Object.hasOwnProperty.call(obj, prop);
}
const errorRe = /Program (\w+) failed: custom program error: (\w+)/;
function fromTxError(err, programId = programId_1.PROGRAM_ID) {
    if (typeof err !== "object" ||
        err === null ||
        !hasOwnProperty(err, "logs") ||
        !Array.isArray(err.logs)) {
        return null;
    }
    let firstMatch = null;
    for (const logLine of err.logs) {
        firstMatch = errorRe.exec(logLine);
        if (firstMatch !== null) {
            break;
        }
    }
    if (firstMatch === null) {
        return null;
    }
    const [programIdRaw, codeRaw] = firstMatch.slice(1);
    if (programIdRaw !== programId.toString()) {
        return null;
    }
    let errorCode;
    try {
        errorCode = parseInt(codeRaw, 16);
    }
    catch (parseErr) {
        return null;
    }
    return fromCode(errorCode, err.logs);
}
//# sourceMappingURL=index.js.map