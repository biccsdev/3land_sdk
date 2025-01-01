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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStoreImp = createStoreImp;
exports.createCollectionImp = createCollectionImp;
exports.createSingleImp = createSingleImp;
exports.buySingleImp = buySingleImp;
exports.handleError = handleError;
const bn_js_1 = require("bn.js");
const Store_1 = require("../Store");
const web3_js_1 = require("@solana/web3.js");
const types_1 = require("../../types/types");
const anchor_1 = require("@project-serum/anchor");
const fs2 = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const bytes_1 = require("@project-serum/anchor/dist/cjs/utils/bytes");
function initializeSDKAndWallet(options) {
    const sdk = new Store_1.Store();
    let walletKeypair;
    if (options.privateKey) {
        if (typeof options.privateKey === "string") {
            // Decode base58 string to Uint8Array
            try {
                const decoded = bytes_1.bs58.decode(options.privateKey);
                walletKeypair = web3_js_1.Keypair.fromSecretKey(decoded);
            }
            catch (error) {
                throw new Error(`Invalid base58 private key: ${error}`);
            }
        }
        else if (Array.isArray(options.privateKey)) {
            // Handle array of numbers
            walletKeypair = web3_js_1.Keypair.fromSecretKey(Uint8Array.from(options.privateKey));
        }
        else {
            // Handle Uint8Array directly
            walletKeypair = web3_js_1.Keypair.fromSecretKey(options.privateKey);
        }
    }
    else if (options.walletPath) {
        // Existing file-based initialization
        const secretKey = JSON.parse(fs2.readFileSync(options.walletPath, "utf-8"));
        walletKeypair = web3_js_1.Keypair.fromSecretKey(Uint8Array.from(secretKey));
    }
    else {
        throw new Error("Either walletPath or privateKey must be provided");
    }
    const payer = new anchor_1.Wallet(walletKeypair);
    return { sdk, walletKeypair, payer };
}
function createStoreImp(options, storeSetup) {
    return __awaiter(this, void 0, void 0, function* () {
        const { sdk, walletKeypair, payer } = initializeSDKAndWallet(options);
        try {
            const storeConfig = {
                fee: new bn_js_1.BN(1000000),
                feePercentage: storeSetup.storeFee,
                feeType: new types_1.FeeType.AllMints(),
                trust: payer.publicKey,
                rules: [],
                toJSON: function () {
                    throw new Error("Function not implemented.");
                },
                toEncodable: function () {
                    throw new Error("Function not implemented.");
                },
            };
            const createStoreTxId = yield sdk.createStore(walletKeypair, storeSetup.storeName, storeConfig);
            return {
                transactionId: createStoreTxId,
                payerPublicKey: payer.publicKey.toString(),
            };
        }
        catch (error) {
            handleError(error);
            throw error;
        }
    });
}
function createCollectionImp(options, collectionOpts) {
    return __awaiter(this, void 0, void 0, function* () {
        const { sdk, walletKeypair, payer } = initializeSDKAndWallet(options);
        const collectionDetails = { __kind: "V1", size: 0 };
        const creator = new types_1.Creator({
            address: payer.publicKey,
            verified: false,
            share: 100,
        });
        const metadata = {
            symbol: collectionOpts.collectionSymbol, //max 10 chars
            name: collectionOpts.collectionName, //max 32 chars
            uri: "",
            sellerFeeBasisPoints: new bn_js_1.BN(5),
            creators: [creator],
            collection: null,
            uses: null,
        };
        const imageBuffer = fs2.readFileSync(path_1.default.join(process.cwd(), "assets", "ds.jpeg")).buffer;
        const coverBuffer = fs2.readFileSync(path_1.default.join(process.cwd(), "assets", "3land_rebrand.gif")).buffer;
        const optionsCollection = {
            symbol: metadata.symbol,
            metadata: {
                name: metadata.name,
                description: collectionOpts.collectionDescription,
                files: {
                    file: {
                        arrayBuffer() {
                            return imageBuffer;
                        },
                        type: "image/gif",
                    },
                    cover: {
                        arrayBuffer() {
                            return coverBuffer;
                        },
                        type: "image/gif",
                    },
                },
            },
            creators: metadata.creators,
            traits: [],
            sellerFeeBasisPoints: metadata.sellerFeeBasisPoints,
        };
        try {
            const collectionTx = yield sdk.createCollection(walletKeypair, collectionDetails, metadata, {
                options: optionsCollection,
            });
            console.log("create collection tx: ", collectionTx);
            return collectionTx;
        }
        catch (error) {
            handleError(error);
            return { success: false, error: error };
        }
    });
}
function createSingleImp(options, storeAccount, collectionAccount, createOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const { sdk, walletKeypair, payer } = initializeSDKAndWallet(options);
        try {
            const creator = new types_1.Creator({
                address: payer.publicKey,
                verified: false,
                share: 100,
            });
            const metadata = {
                name: createOptions.itemName,
                uri: "",
                uriType: 1,
                sellerFeeBasisPoints: createOptions.sellerFee,
                collection: new web3_js_1.PublicKey(collectionAccount),
                creators: [creator],
                toJSON: function () {
                    throw new Error("Function not implemented.");
                },
                toEncodable: function () {
                    throw new Error("Function not implemented.");
                },
            };
            /*
              For MP4
              const videoBuffer = await fs2.promises.readFile(
                path.join(process.cwd(), "assets", "video.mp4")
              );
        
              For MP3
              const audioBuffer = await fs2.promises.readFile(
                path.join(process.cwd(), "assets", "audio.mp3")
              );
        
              For WebP
              const webpBuffer = await fs2.promises.readFile(
                path.join(process.cwd(), "assets", "image.webp")
              );
        
              For GLB
              const glbBuffer = await fs2.promises.readFile(
                path.join(process.cwd(), "assets", "model.glb")
        );
            */
            let options;
            if (createOptions.mainImageUrl) {
                // Create base metadata files object
                let baseMetadataFiles = {
                    file: {
                        url: createOptions.mainImageUrl,
                    },
                };
                // Add cover if present
                if (createOptions.coverImageUrl) {
                    baseMetadataFiles.cover = {
                        url: createOptions.coverImageUrl,
                    };
                }
                options = {
                    symbol: createOptions.itemSymbol,
                    metadata: {
                        name: metadata.name,
                        description: createOptions.itemDescription,
                        files: baseMetadataFiles,
                    },
                    creators: metadata.creators,
                    traits: createOptions.traits,
                    sellerFeeBasisPoints: metadata.sellerFeeBasisPoints,
                };
            }
            else {
                const imageBuffer = yield fs2.promises.readFile(path_1.default.join(process.cwd(), "assets", "og.png"));
                if (!imageBuffer || imageBuffer.byteLength === 0) {
                    throw new Error("Failed to read main image file");
                }
                const coverBuffer = yield fs2.promises.readFile(path_1.default.join(process.cwd(), "assets", "niicl.gif"));
                if (!coverBuffer) {
                    throw new Error("Failed to read cover file");
                }
                options = {
                    symbol: createOptions.itemSymbol,
                    metadata: {
                        name: metadata.name,
                        description: createOptions.itemDescription,
                        files: {
                            file: {
                                arrayBuffer: () => imageBuffer,
                                type: "image/png",
                                name: "og.png",
                                size: imageBuffer.length,
                            },
                            cover: {
                                arrayBuffer: () => coverBuffer,
                                type: "image/gif",
                                name: "niicl.gif",
                                size: coverBuffer.length,
                            },
                        },
                    },
                    creators: metadata.creators,
                    traits: createOptions.traits,
                    sellerFeeBasisPoints: metadata.sellerFeeBasisPoints,
                };
            }
            console.log("cover options: ", options);
            const saleConfig = {
                prices: [
                    {
                        amount: new bn_js_1.BN(createOptions.price),
                        priceType: new types_1.CurrencyType.Native(),
                        toJSON: function () {
                            throw new Error("Function not implemented.");
                        },
                        toEncodable: function () {
                            throw new Error("Function not implemented.");
                        },
                    },
                ],
                priceType: new types_1.PriceRule.None(),
                rules: [],
                sendToVault: 0,
                saleType: new types_1.SaleType.Normal(),
                toJSON: function () {
                    throw new Error("Function not implemented.");
                },
                toEncodable: function () {
                    throw new Error("Function not implemented.");
                },
            };
            const createSingleEditionTxId = yield sdk.createSingleEdition(walletKeypair, new web3_js_1.PublicKey(storeAccount), 100, metadata, saleConfig, [1, 0, 0], [1, 0], 0, 12345, new web3_js_1.PublicKey(collectionAccount), {
                options: options,
            });
            return {
                transactionId: createSingleEditionTxId,
                payerPublicKey: payer.publicKey.toString(),
            };
        }
        catch (error) {
            handleError(error);
            throw error;
        }
    });
}
function buySingleImp(options, item) {
    return __awaiter(this, void 0, void 0, function* () {
        const { sdk, walletKeypair, payer } = initializeSDKAndWallet(options);
        try {
            const owner = payer;
            const buySingleEditionTxId = yield sdk.buySingleEdition(walletKeypair, [0, 0, 0, 0, 0, 0], new web3_js_1.PublicKey(item));
            console.log("** buy single tx: ", buySingleEditionTxId);
            return {
                transactionId: buySingleEditionTxId,
                ownerPublicKey: owner.publicKey.toString(),
            };
        }
        catch (error) {
            handleError(error);
            throw error;
        }
    });
}
function handleError(error) {
    if (error instanceof web3_js_1.SendTransactionError) {
        console.error("Transaction failed. Error message:", error.message);
        console.error("Transaction logs:", error.logs);
    }
    else {
        console.error("An unexpected error occurred:", error);
    }
}