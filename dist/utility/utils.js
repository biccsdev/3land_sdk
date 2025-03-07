"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCategory = exports.checkFileType = exports.validateSolAddress = exports.nowS = exports.sleep = exports.cyrb53 = void 0;
exports.bytesToU32 = bytesToU32;
exports.normalizeFileData = normalizeFileData;
exports.getFileType = getFileType;
exports.validateFileType = validateFileType;
exports.getFileCategory = getFileCategory;
exports.isAnimatable = isAnimatable;
const web3_js_1 = require("@solana/web3.js");
function bytesToU32(slice) {
    let result = 0;
    for (let i = slice.length - 1; i >= 0; i--) {
        result = (result << 8) | slice[i];
    }
    return result >>> 0;
}
const cyrb53 = (str, seed = 0) => {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    let arr = null;
    if (typeof str != "string") {
        if (Array.isArray(str)) {
            arr = str;
        }
        else {
            str = str + "";
        }
    }
    if (arr) {
        for (const ch of arr) {
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
    }
    else {
        for (let i = 0, ch; i < str.length; i++) {
            ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
    }
    h1 =
        Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
            Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 =
        Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
            Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};
exports.cyrb53 = cyrb53;
const sleep = (t) => {
    return new Promise((res) => {
        setTimeout(res, t);
    });
};
exports.sleep = sleep;
const nowS = () => Date.now() / 1000;
exports.nowS = nowS;
const validateSolAddress = (address) => {
    try {
        let pubkey = new web3_js_1.PublicKey(address);
        return web3_js_1.PublicKey.isOnCurve(pubkey.toBuffer());
    }
    catch (error) {
        return false;
    }
};
exports.validateSolAddress = validateSolAddress;
const checkFileType = (file) => {
    return file?.type?.includes("video/webp")
        ? "video/webp"
        : file?.type?.includes("image/webp")
            ? "image/webp"
            : file?.type?.includes("jpeg") || file?.type?.includes("jpg")
                ? "image/jpeg"
                : file?.type?.includes("gif")
                    ? "image/gif"
                    : file?.type?.includes("png")
                        ? "image/png"
                        : file?.type?.includes("audio")
                            ? "audio"
                            : file?.type?.includes("mp4")
                                ? "video/mp4"
                                : file?.name?.includes("glb") || file?.type?.includes("model")
                                    ? "model/gltf-binary"
                                    : null;
};
exports.checkFileType = checkFileType;
const checkCategory = (file) => {
    return file?.type?.includes("image")
        ? "image"
        : file?.type?.includes("audio")
            ? "audio"
            : file?.type?.includes("video")
                ? "video"
                : file?.name?.includes("glb") || file?.type?.includes("model")
                    ? "vr"
                    : null;
};
exports.checkCategory = checkCategory;
async function normalizeFileData(fileData) {
    try {
        const buffer = await (fileData.arrayBuffer instanceof Function
            ? fileData.arrayBuffer()
            : Promise.resolve(fileData.arrayBuffer));
        const type = fileData.type || getMimeTypeFromBuffer(buffer);
        return {
            arrayBuffer: () => buffer,
            type,
            size: buffer.byteLength,
            name: fileData.name,
        };
    }
    catch (error) {
        throw new Error(`Failed to normalize file data: ${error}`);
    }
}
function getMimeTypeFromBuffer(buffer) {
    const arr = new Uint8Array(buffer).subarray(0, 12);
    const header = Array.from(arr)
        .map((byte) => byte.toString(16))
        .join("");
    if (header.startsWith("89504e47"))
        return "image/png";
    if (header.startsWith("474946"))
        return "image/gif";
    if (header.startsWith("ffd8ff"))
        return "image/jpeg";
    if (header.startsWith("52494646") && header.includes("57454250"))
        return "image/webp";
    if (header.startsWith("494433") || header.startsWith("fffb"))
        return "audio/mp3";
    if (header.startsWith("000000") &&
        (header.includes("66747970") || header.includes("6d6f6f76")))
        return "video/mp4";
    if (header.startsWith("676c5446"))
        return "model/gltf-binary";
    return "application/octet-stream";
}
function getFileType(file) {
    if (!file)
        return null;
    const type = file.type?.toLowerCase() || "";
    const name = (file.name || "").toLowerCase();
    if (type.includes("video/webp"))
        return "video/webp";
    if (type.includes("image/webp"))
        return "image/webp";
    if (type.includes("jpeg") || type.includes("jpg"))
        return "image/jpeg";
    if (type.includes("gif"))
        return "image/gif";
    if (type.includes("png"))
        return "image/png";
    if (type.includes("mp3") || type.includes("audio/mp3"))
        return "audio/mp3";
    if (type.includes("mp4"))
        return "video/mp4";
    if (type.includes("glb") || name.endsWith(".glb"))
        return "model/gltf-binary";
    return type || null;
}
function validateFileType(type) {
    const allowedTypes = [
        "image/png",
        "image/jpeg",
        "image/gif",
        "image/webp",
        "video/mp4",
        "audio/mp3",
        "model/gltf-binary",
        "application/octet-stream",
    ];
    if (!allowedTypes.includes(type)) {
        throw new Error(`Unsupported file type: ${type}`);
    }
}
function getFileCategory(file) {
    if (!file)
        return null;
    const type = (file.type || "").toLowerCase();
    const name = (file.name || "").toLowerCase();
    if (type.includes("image"))
        return "image";
    if (type.includes("audio"))
        return "audio";
    if (type.includes("video"))
        return "video";
    if (type.includes("model") || name.endsWith(".glb"))
        return "vr";
    return null;
}
function isAnimatable(type) {
    return (type?.includes("video/") ||
        type?.includes("audio/") ||
        type === "model/gltf-binary");
}
//# sourceMappingURL=utils.js.map