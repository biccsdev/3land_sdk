"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleConfig = exports.MetadataArgs = exports.StoreConfig = exports.Store = void 0;
const web3_js_1 = require("@solana/web3.js");
const mpl_token_metadata_1 = require("@metaplex-foundation/mpl-token-metadata");
const spl_token_1 = require("@solana/spl-token");
const Connection_1 = require("../utility/Connection");
const createStore_1 = require("./instructions/store/createStore");
const createSingleEdition_1 = require("./instructions/store/createSingleEdition");
const buySingleEdition_1 = require("./instructions/store/buySingleEdition");
const types_1 = require("../types/types");
Object.defineProperty(exports, "StoreConfig", { enumerable: true, get: function () { return types_1.StoreConfig; } });
Object.defineProperty(exports, "MetadataArgs", { enumerable: true, get: function () { return types_1.MetadataArgs; } });
Object.defineProperty(exports, "SaleConfig", { enumerable: true, get: function () { return types_1.SaleConfig; } });
const PdaManager_1 = require("../utility/PdaManager");
const Holders_1 = require("../utility/Holders");
const bn_js_1 = __importDefault(require("bn.js"));
const uploadFilesIryis_1 = require("./instructions/store/uploadFilesIryis");
const programId_1 = require("../types/programId");
const registerCreator_1 = require("../types/instructions/registerCreator");
const irys_1 = require("./Irys/irys");
const mpl_token_metadata_2 = require("@metaplex-foundation/mpl-token-metadata");
const instructions_1 = require("../types/instructions");
const validation_1 = require("../utility/validation");
const config_1 = require("../utility/config");
const accounts_1 = require("../types/accounts");
const extraAccount = [
    {
        pubkey: new web3_js_1.PublicKey("GyPCu89S63P9NcCQAtuSJesiefhhgpGWrNVJs4bF2cSK"), //global store
        isSigner: false,
        isWritable: true,
    },
];
class Store {
    constructor(options = {}) {
        const { network = config_1.NetworkType.DEVNET, 
        // network = NetworkType.MAINNET,
        customEndpoint, customConfig, } = options;
        const baseConfig = config_1.NETWORK_CONFIGS[network];
        this.networkConfig = {
            ...baseConfig,
            ...customConfig,
            endpoint: customEndpoint || baseConfig.endpoint,
        };
        this.connection = (0, Connection_1.getConnection)(this.networkConfig.endpoint);
    }
    async createStore(payer, name, storeConfig, creator, storeId) {
        if (!payer || !payer.publicKey) {
            throw new validation_1.ValidationError("Invalid payer");
        }
        if (!name || name.length > 32) {
            throw new validation_1.ValidationError("Store name is required and must be <= 32 characters");
        }
        storeId = Math.floor(Math.random() * 10000);
        creator = payer.publicKey;
        (0, validation_1.validateStoreConfig)(storeConfig);
        (0, validation_1.validateIdentifier)(storeId);
        try {
            const [holderAccount] = await (0, PdaManager_1.holderPDA)({
                creator: Holders_1.devnetHolder.creator,
                slot: Holders_1.devnetHolder.slot,
            });
            const [storeAccount] = await (0, PdaManager_1.storePDA)({
                storeId: storeId,
                creator: creator.toString(),
                holder: holderAccount.toString(),
            });
            const instruction = (0, createStore_1.createStoreInstruction)(holderAccount, storeAccount, payer.publicKey, name, storeConfig, storeId);
            const transaction = new web3_js_1.Transaction().add(instruction);
            return (0, web3_js_1.sendAndConfirmTransaction)(this.connection, transaction, [payer]);
        }
        catch (error) {
            if (error instanceof validation_1.ValidationError) {
                throw error;
            }
            throw new Error(`Failed to create store: ${error}`);
        }
    }
    async createCollection(payer, collectionDetails, metadata, irysData, mutable = false, supply = 0) {
        try {
            if (!payer || !payer.publicKey) {
                throw new validation_1.ValidationError("Invalid payer");
            }
            (0, validation_1.validateCollectionArgs)(collectionDetails, supply, metadata, irysData);
            if (typeof mutable !== "boolean") {
                throw new validation_1.ValidationError("Mutable parameter must be a boolean");
            }
            if (metadata.uri.length !== 0) {
                throw new validation_1.ValidationError("URI must be empty");
            }
            let instructions = [];
            let signers = [payer];
            if (metadata.uri.length !== 0)
                throw new Error("-- URI must be empty --");
            const irysConfig = this.networkConfig.endpoint.includes(config_1.NetworkType.MAINNET)
                ? {
                    arweave_rpc: "https://node2.irys.xyz",
                    rpc: "https://api.mainnet-beta.solana.com",
                    network: "mainnet",
                }
                : {};
            const irys = await (0, irys_1.init)(payer.publicKey.toBase58(), irysConfig);
            const uuid = "random_uuid_per_upload_session";
            const { instruction, signerIrys, metadataUrl } = await (0, uploadFilesIryis_1.uploadFilesIrysInstruction)(irysData.options, irys, uuid);
            instructions.push(instruction);
            signers.push(signerIrys);
            const mint = web3_js_1.Keypair.generate();
            const connection = this.connection;
            const updateAuthority = payer.publicKey;
            collectionDetails = collectionDetails || null;
            const mintRent = await connection.getMinimumBalanceForRentExemption(spl_token_1.MintLayout.span);
            instructions.push(web3_js_1.SystemProgram.createAccount({
                fromPubkey: payer.publicKey,
                newAccountPubkey: mint.publicKey,
                lamports: mintRent,
                space: spl_token_1.MintLayout.span,
                programId: programId_1.TOKEN_PROGRAM_ID,
            }));
            const owner = payer.publicKey;
            const freezeAuthority = owner;
            instructions.push((0, spl_token_1.createInitializeMintInstruction)(mint.publicKey, //mint
            0, //decimals
            owner, //mintAuthority
            freezeAuthority, //freezeAuthority
            programId_1.TOKEN_PROGRAM_ID));
            signers.push(mint);
            const ownerATA = await (0, PdaManager_1.getATAPDA)({ owner, mint: mint.publicKey });
            instructions.push((0, spl_token_1.createAssociatedTokenAccountInstruction)(payer.publicKey, ownerATA, //associatedTokenAddress
            owner, //walletAddress
            mint.publicKey));
            const metadataAccount = await (0, PdaManager_1.getMetadataPDA)(mint.publicKey);
            const create_accounts = {
                metadata: metadataAccount,
                mint: mint.publicKey,
                mintAuthority: payer.publicKey,
                payer: payer.publicKey,
                updateAuthority,
            };
            const metadataObj = { ...metadata, uri: metadataUrl };
            console.log("metatadaobj: ", metadataObj);
            const create_args = {
                createMetadataAccountArgsV3: {
                    data: metadataObj,
                    isMutable: mutable === false ? false : true,
                    collectionDetails,
                },
            };
            instructions.push((0, mpl_token_metadata_1.createCreateMetadataAccountV3Instruction)(create_accounts, create_args));
            instructions.push((0, spl_token_1.createMintToInstruction)(mint.publicKey, ownerATA, owner /*authority*/, 1, []));
            const supplies = {
                maxSupply: supply || supply === 0 ? new bn_js_1.default(supply) : null,
            };
            const [editionAccount] = await (0, PdaManager_1.getEditionPDA)(mint.publicKey, false);
            const accounts = {
                edition: editionAccount,
                mint: mint.publicKey,
                updateAuthority,
                mintAuthority: owner,
                payer: payer.publicKey,
                metadata: metadataAccount,
            };
            const args = { createMasterEditionArgs: { ...supplies } };
            instructions.push((0, mpl_token_metadata_1.createCreateMasterEditionV3Instruction)(accounts, args));
            const transaction = new web3_js_1.Transaction().add(...instructions);
            const sendedconfirmedTransaction = await (0, web3_js_1.sendAndConfirmTransaction)(this.connection, transaction, signers);
            const { errors, succeeds } = await irys?.uploadFiles({
                uuid,
                signature: sendedconfirmedTransaction,
            });
            return sendedconfirmedTransaction;
        }
        catch (error) {
            if (error instanceof validation_1.ValidationError) {
                throw error;
            }
            throw new Error(`Failed to create collection: ${error}`);
        }
    }
    async createSingleEdition(payer, storeAccount, supply, metadata, saleConfig, category, superCategory, eventCategory, hashTraits, collection, irysData) {
        const identifier = Math.floor(Math.random() * 1000000);
        const creator = payer.publicKey;
        if (!payer || !payer.publicKey) {
            throw new validation_1.ValidationError("Invalid payer");
        }
        if (!storeAccount) {
            throw new validation_1.ValidationError("Store account is required");
        }
        (0, validation_1.validateSupply)(supply);
        (0, validation_1.validateMetadata)(metadata);
        (0, validation_1.validateSaleConfig)(saleConfig);
        (0, validation_1.validateIdentifier)(identifier);
        try {
            const irysConfig = this.networkConfig.endpoint.includes(config_1.NetworkType.MAINNET)
                ? {
                    arweave_rpc: "https://node2.irys.xyz",
                    rpc: "https://api.mainnet-beta.solana.com",
                    network: "mainnet",
                }
                : {};
            console.log("irysConfig: ", irysConfig);
            const irys = await (0, irys_1.init)(payer.publicKey.toBase58(), irysConfig);
            const uuid = "random_uuid_per_upload_session";
            const [itemAccount] = await (0, PdaManager_1.itemAccountPDA)({
                creator: creator,
                store: storeAccount,
                identifier: new bn_js_1.default(identifier),
            });
            const [creatorAuthority] = await (0, PdaManager_1.creatorAuthorityPDA)({
                creator: payer.publicKey,
                store: storeAccount,
            });
            let instructions = [];
            let signers = [payer];
            const { instruction, signerIrys, metadataUrl } = await (0, uploadFilesIryis_1.uploadFilesIrysInstruction)(irysData.options, irys, uuid);
            instructions.push(instruction);
            signers.push(signerIrys);
            const collection_mint = (0, PdaManager_1.toPublicKey)(collection);
            const new_authority = creatorAuthority;
            const [authRecord] = await (0, PdaManager_1.collectionAuthorityRecord)({
                mint: collection_mint,
                new_authority: new_authority,
            });
            let collection_permission = false;
            try {
                const res = await this.connection.getAccountInfo(authRecord);
                if (res)
                    collection_permission = true;
            }
            catch (e) {
                collection_permission = false;
            }
            if (!collection_permission) {
                const metadataPda = await (0, PdaManager_1.getMetadataPDA)(collection_mint);
                const accounts = {
                    collectionAuthorityRecord: authRecord,
                    newCollectionAuthority: new_authority,
                    updateAuthority: payer.publicKey,
                    payer: payer.publicKey,
                    metadata: metadataPda,
                    mint: collection_mint,
                };
                const approveInstruction = (0, mpl_token_metadata_2.createApproveCollectionAuthorityInstruction)(accounts);
                instructions.push(approveInstruction);
                // signers.push(new_authority)
            }
            console.log("metadataurl: ", metadataUrl);
            const meta = {
                name: metadata.name,
                uri: metadataUrl ? metadataUrl.split(".net/")[1] : "",
                uriType: 1,
                sellerFeeBasisPoints: metadata.sellerFeeBasisPoints,
                collection: metadata.collection,
                creators: metadata.creators,
                toJSON: function () {
                    throw new Error("Function not implemented.");
                },
                toEncodable: function () {
                    throw new Error("Function not implemented.");
                },
            };
            console.log("meta: ", meta);
            const instructionSing = (0, createSingleEdition_1.createSingleEditionInstruction)(storeAccount, itemAccount, creatorAuthority, programId_1.PROGRAM_ID, payer.publicKey, payer.publicKey, supply, meta, saleConfig, identifier, category, superCategory, eventCategory, hashTraits);
            instructions.push(instructionSing);
            const [userActivity, userActivityBump] = await (0, PdaManager_1.userActivityPDA)({
                user: creator,
                store: storeAccount,
            });
            const [creatorRegistry] = await (0, PdaManager_1.creatorRegistryPDA)({
                user: creator,
                store: storeAccount,
                currency: saleConfig?.prices?.[0]?.priceType?.kind === "Spl"
                    ? (0, PdaManager_1.toPublicKey)(saleConfig?.prices?.[0]?.priceType?.value?.id)
                    : (0, PdaManager_1.toPublicKey)(programId_1.PROGRAM_CNFT),
            });
            const registerIX = (0, registerCreator_1.registerCreator)({
                userActivityBump: userActivityBump,
            }, {
                creatorRegistry,
                userActivity,
                itemAccount,
                store: storeAccount,
                payer: payer.publicKey,
                systemProgram: web3_js_1.SystemProgram.programId,
            });
            instructions.push(registerIX);
            const transaction = new web3_js_1.Transaction().add(...instructions);
            const sendedconfirmedTransaction = await (0, web3_js_1.sendAndConfirmTransaction)(this.connection, transaction, signers);
            const { errors, succeeds } = await irys?.uploadFiles({
                uuid,
                signature: sendedconfirmedTransaction,
            });
            return sendedconfirmedTransaction;
        }
        catch (error) {
            if (error instanceof validation_1.ValidationError) {
                throw error;
            }
            throw new Error(`Failed to create single edition: ${error}`);
        }
    }
    async buySingleEdition(payer, distributionBumps, itemAddress, extraAccounts = extraAccount, globalStoreAccount = programId_1.DEVNET_PROGRAM_ID, packAccount = programId_1.PROGRAM_CNFT, burnProgress = programId_1.PROGRAM_CNFT, poolVault = programId_1.PROGRAM_CNFT) {
        try {
            const owner = payer.publicKey;
            //const storedata = await this.connection.getAccountInfo(itemAddress);
            const single = await accounts_1.Single.fetch(this.connection, itemAddress, programId_1.PROGRAM_ID);
            const identifier = parseInt(single?.identifier?.toString() || "none");
            const creator = single?.creator;
            const storeAccount = single?.holder;
            const collectionAddress = single?.item?.metadata?.collection;
            (0, validation_1.validateIdentifier)(identifier);
            if (!creator)
                throw new Error("Missing creator...");
            if (!storeAccount)
                throw new Error("Missing creator...");
            if (!collectionAddress)
                throw new Error("Missing collection...");
            (0, validation_1.validateBuySingleArgs)(payer, packAccount, burnProgress, owner, distributionBumps, globalStoreAccount, extraAccounts, collectionAddress.key, storeAccount, creator);
            const [itemAccount] = await (0, PdaManager_1.itemAccountPDA)({
                creator: creator,
                store: storeAccount,
                identifier: new bn_js_1.default(identifier),
            });
            const [paymentAccount] = await (0, PdaManager_1.buyPaymentPDA)({
                owner: owner,
                itemAccount,
            });
            const holderAccount = storeAccount;
            let instructions = [];
            const instruction = await (0, buySingleEdition_1.buySingleEditionInstruction)(paymentAccount, itemAccount, packAccount, burnProgress, poolVault, holderAccount, owner, payer.publicKey, distributionBumps, {}, storeAccount, globalStoreAccount, identifier, extraAccounts, creator, collectionAddress.key, this.connection);
            instructions.push(...instruction);
            const [userActivity, userActivityBump] = await (0, PdaManager_1.userActivityPDA)({
                user: payer.publicKey,
                store: storeAccount,
            });
            const [collectorRegistry] = await (0, PdaManager_1.collectorArtistRegistryPDA)({
                user: payer.publicKey,
                artist: creator,
                store: storeAccount,
                currency: (0, PdaManager_1.toPublicKey)(programId_1.PROGRAM_CNFT),
            });
            const [creatorRegistry, creatorBump] = await (0, PdaManager_1.creatorRegistryPDA)({
                user: creator,
                currency: (0, PdaManager_1.toPublicKey)(programId_1.PROGRAM_CNFT),
                store: storeAccount,
            });
            const [collectorGlobalRegistry] = await (0, PdaManager_1.collectorGlobalRegistryPDA)({
                user: payer.publicKey,
                currency: (0, PdaManager_1.toPublicKey)(programId_1.PROGRAM_CNFT),
                store: storeAccount,
            });
            const registerIX = (0, instructions_1.registerCollector)({
                creatorBump: creatorBump,
                activityBump: userActivityBump,
            }, {
                collectorArtistRegistry: collectorRegistry,
                collectorGlobalRegistry: collectorGlobalRegistry,
                userActivity: userActivity,
                creatorRegistry: creatorRegistry,
                store: storeAccount,
                payer: payer.publicKey,
                systemProgram: web3_js_1.SystemProgram.programId,
            });
            instructions.push(registerIX);
            const transaction = new web3_js_1.Transaction().add(...instructions);
            console.log("transaction: ", payer.publicKey);
            return (0, web3_js_1.sendAndConfirmTransaction)(this.connection, transaction, [payer]);
        }
        catch (error) {
            if (error instanceof validation_1.ValidationError) {
                throw error;
            }
            throw new Error(`Failed to buy single edition: ${error}`);
        }
    }
}
exports.Store = Store;
//# sourceMappingURL=Store.js.map