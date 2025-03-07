"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idl = void 0;
exports.idl = {
    version: "0.1.0",
    name: "cnfaucet",
    instructions: [
        {
            name: "initialize",
            accounts: [
                {
                    name: "holderAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "creator",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "slot",
                    type: "u64",
                },
                {
                    name: "globalFee",
                    type: {
                        option: {
                            defined: "GlobalFee",
                        },
                    },
                },
            ],
        },
        {
            name: "createCollection",
            accounts: [
                {
                    name: "creatorAuthority",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "metadata",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "edition",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "mint",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "tokenAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "storeAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "tokenProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "tokenMetadataProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "associatedTokenProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "rent",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "tokenMetadata",
                    type: {
                        defined: "TokenMetadata",
                    },
                },
            ],
        },
        {
            name: "deleteTokenLauncher",
            accounts: [
                {
                    name: "tokenManager",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "mint",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "storeAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "tokenProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "tokenMetadataProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [],
        },
        {
            name: "buyToken",
            accounts: [
                {
                    name: "tokenManager",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "tokenAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "tokenMintRegistry",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "tokenGlobalRegistry",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "mint",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "storeAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "tokenProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "associatedTokenProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "tokenMetadataProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "amount",
                    type: "u64",
                },
            ],
        },
        {
            name: "createTokenLauncher",
            accounts: [
                {
                    name: "tokenManager",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "metadata",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "mint",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "tokenAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "storeTokenAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "genericUser",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "storeAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "tokenProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "associatedTokenProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "tokenMetadataProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "rent",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "price",
                    type: "u64",
                },
                {
                    name: "decimals",
                    type: "u8",
                },
                {
                    name: "tokenMetadata",
                    type: {
                        defined: "TokenMetadata",
                    },
                },
                {
                    name: "share",
                    type: "u16",
                },
                {
                    name: "tokenType",
                    type: {
                        defined: "TokenType",
                    },
                },
            ],
        },
        {
            name: "registerGenericUser",
            accounts: [
                {
                    name: "genericUser",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "storeAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "profileHolder",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "categoryHolder",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "oldCategoryHolder",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "merkleTree",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "treeAuthority",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "merkleManager",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "logWrapper",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "bubblegumProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "compressionProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "tokenMetadataProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "username",
                    type: "string",
                },
                {
                    name: "subApp",
                    type: "u64",
                },
                {
                    name: "subWallet",
                    type: "publicKey",
                },
                {
                    name: "category",
                    type: "u64",
                },
                {
                    name: "lut",
                    type: {
                        option: "publicKey",
                    },
                },
                {
                    name: "genericData",
                    type: {
                        option: {
                            vec: {
                                defined: "GenericStore",
                            },
                        },
                    },
                },
                {
                    name: "arweave",
                    type: {
                        option: "string",
                    },
                },
                {
                    name: "cnft",
                    type: {
                        option: {
                            defined: "CompactCnftData",
                        },
                    },
                },
            ],
        },
        {
            name: "registerUser",
            accounts: [
                {
                    name: "threeId",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "storeAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "username",
                    type: "string",
                },
                {
                    name: "sub",
                    type: "publicKey",
                },
                {
                    name: "lut",
                    type: "publicKey",
                },
            ],
        },
        {
            name: "createStore",
            accounts: [
                {
                    name: "holderAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "storeAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "creator",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "name",
                    type: "string",
                },
                {
                    name: "storeConfig",
                    type: {
                        defined: "StoreConfig",
                    },
                },
                {
                    name: "storeId",
                    type: "u16",
                },
            ],
        },
        {
            name: "updatePack",
            accounts: [
                {
                    name: "storeAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packContent",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "packReserveList",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "prevCreatorRegistry",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "creator",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "supply",
                    type: {
                        option: "u64",
                    },
                },
                {
                    name: "metadata",
                    type: {
                        option: {
                            defined: "MetadataArgs",
                        },
                    },
                },
                {
                    name: "saleConfig",
                    type: {
                        option: {
                            defined: "SaleConfig",
                        },
                    },
                },
                {
                    name: "state",
                    type: {
                        option: {
                            defined: "ItemState",
                        },
                    },
                },
                {
                    name: "category",
                    type: {
                        option: {
                            array: ["u16", 3],
                        },
                    },
                },
                {
                    name: "packConfig",
                    type: {
                        option: {
                            defined: "PackConfig",
                        },
                    },
                },
            ],
        },
        {
            name: "updateStore",
            accounts: [
                {
                    name: "holderAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "storeAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "creator",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "name",
                    type: "string",
                },
                {
                    name: "storeConfig",
                    type: {
                        defined: "StoreConfig",
                    },
                },
            ],
        },
        {
            name: "prepareCreator",
            accounts: [
                {
                    name: "storeAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "creatorAuthority",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "creator",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [],
        },
        {
            name: "prepareTraits",
            accounts: [
                {
                    name: "packAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packTraits",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [],
        },
        {
            name: "preparePack",
            accounts: [
                {
                    name: "storeAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packContent",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "creator",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "supply",
                    type: "u64",
                },
                {
                    name: "identifier",
                    type: "u64",
                },
            ],
        },
        {
            name: "createPack",
            accounts: [
                {
                    name: "storeAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "creatorAuthority",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packReserveList",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "creator",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "metadata",
                    type: {
                        defined: "MetadataArgs",
                    },
                },
                {
                    name: "saleConfig",
                    type: {
                        defined: "SaleConfig",
                    },
                },
                {
                    name: "identifier",
                    type: "u64",
                },
                {
                    name: "category",
                    type: {
                        array: ["u16", 3],
                    },
                },
                {
                    name: "superCategory",
                    type: {
                        array: ["u8", 2],
                    },
                },
                {
                    name: "eventCategory",
                    type: "u16",
                },
                {
                    name: "hashTraits",
                    type: "u64",
                },
                {
                    name: "packConfig",
                    type: {
                        defined: "PackConfig",
                    },
                },
            ],
        },
        {
            name: "flagPack",
            accounts: [
                {
                    name: "storeAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "creator",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "globalState",
                    type: {
                        option: {
                            defined: "GlobalState",
                        },
                    },
                },
                {
                    name: "state",
                    type: {
                        option: {
                            defined: "ItemState",
                        },
                    },
                },
                {
                    name: "serverless",
                    type: {
                        option: "u8",
                    },
                },
            ],
        },
        {
            name: "flagSingle",
            accounts: [
                {
                    name: "storeAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "itemAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "creator",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "globalState",
                    type: {
                        defined: "GlobalState",
                    },
                },
                {
                    name: "state",
                    type: {
                        defined: "ItemState",
                    },
                },
            ],
        },
        {
            name: "updateSingle",
            accounts: [
                {
                    name: "storeAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "itemAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "itemReserveList",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "prevCreatorRegistry",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "creator",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "supply",
                    type: {
                        option: "u64",
                    },
                },
                {
                    name: "metadata",
                    type: {
                        option: {
                            defined: "MetadataArgs",
                        },
                    },
                },
                {
                    name: "saleConfig",
                    type: {
                        option: {
                            defined: "SaleConfig",
                        },
                    },
                },
                {
                    name: "state",
                    type: {
                        option: {
                            defined: "ItemState",
                        },
                    },
                },
                {
                    name: "category",
                    type: {
                        option: {
                            array: ["u16", 3],
                        },
                    },
                },
            ],
        },
        {
            name: "updateCard",
            accounts: [
                {
                    name: "packAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "cardAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packContent",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "creator",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "supply",
                    type: {
                        option: "u32",
                    },
                },
                {
                    name: "metadata",
                    type: {
                        option: {
                            defined: "MetadataArgs",
                        },
                    },
                },
                {
                    name: "state",
                    type: {
                        option: {
                            defined: "CardState",
                        },
                    },
                },
            ],
        },
        {
            name: "createCard",
            accounts: [
                {
                    name: "packAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "cardAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "creatorAuthority",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packContent",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "creator",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "supply",
                    type: "u32",
                },
                {
                    name: "index",
                    type: "u16",
                },
                {
                    name: "metadata",
                    type: {
                        defined: "MetadataArgs",
                    },
                },
            ],
        },
        {
            name: "storeLutFor",
            accounts: [
                {
                    name: "lutAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "vaultAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "forKey",
                    type: "publicKey",
                },
                {
                    name: "id",
                    type: "string",
                },
            ],
        },
        {
            name: "assignPackDelegate",
            accounts: [
                {
                    name: "storeAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "packAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "delegateAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [],
        },
        {
            name: "createZeroCard",
            accounts: [
                {
                    name: "packAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packTraits",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "merkleTree",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "merkleManager",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packContent",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "treeAuthority",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "logWrapper",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "bubblegumProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "compressionProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "tokenMetadataProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "metadatas",
                    type: {
                        vec: {
                            defined: "ShortMetadata",
                        },
                    },
                },
                {
                    name: "bumps",
                    type: {
                        array: ["u8", 6],
                    },
                },
                {
                    name: "extras",
                    type: {
                        array: ["u8", 3],
                    },
                },
                {
                    name: "config",
                    type: {
                        option: {
                            defined: "ZeroConfig",
                        },
                    },
                },
            ],
        },
        {
            name: "createSingle",
            accounts: [
                {
                    name: "storeAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "itemAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "creatorAuthority",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "itemReserveList",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "creator",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "supply",
                    type: "u64",
                },
                {
                    name: "shortMetadata",
                    type: {
                        defined: "ShortMetadataArgs",
                    },
                },
                {
                    name: "saleConfig",
                    type: {
                        defined: "SaleConfig",
                    },
                },
                {
                    name: "identifier",
                    type: "u64",
                },
                {
                    name: "category",
                    type: {
                        array: ["u16", 3],
                    },
                },
                {
                    name: "superCategory",
                    type: {
                        array: ["u8", 2],
                    },
                },
                {
                    name: "eventCategory",
                    type: "u16",
                },
                {
                    name: "hashTraits",
                    type: "u64",
                },
            ],
        },
        {
            name: "deleteSingle",
            accounts: [
                {
                    name: "storeAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "itemAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "itemReserveList",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "archiveDeposit",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "creatorRegistry",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "manager",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [],
        },
        {
            name: "archiveItem",
            accounts: [
                {
                    name: "storeAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "itemAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "archiveDeposit",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "treeAuthority",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "creatorAuthority",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "merkleTree",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "merkleManager",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "owner",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "logWrapper",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "bubblegumProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "compressionProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "storeBump",
                    type: "u8",
                },
            ],
        },
        {
            name: "buyPack",
            accounts: [
                {
                    name: "owner",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "packAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packOpenAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "storeAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packContent",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "paymentAccount",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "claimer",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "buytrackAccount",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "randomizer",
                    isMut: false,
                    isSigner: true,
                    isOptional: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "proof",
                    type: {
                        option: {
                            defined: "CurrencyArtistProof",
                        },
                    },
                },
                {
                    name: "amountPerPack",
                    type: "u8",
                },
                {
                    name: "randomBase",
                    type: "u64",
                },
                {
                    name: "fee",
                    type: "u8",
                },
            ],
        },
        {
            name: "gatePay",
            accounts: [
                {
                    name: "paymentAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "itemAccount",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "packAccount",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "holderAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "merkleTree",
                    isMut: false,
                    isSigner: false,
                    docs: ["CHECK"],
                },
                {
                    name: "owner",
                    isMut: false,
                    isSigner: false,
                    docs: ["CHECK"],
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "bubblegumProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "index",
                    type: "u32",
                },
                {
                    name: "metadata",
                    type: {
                        defined: "MetadataArgs",
                    },
                },
            ],
        },
        {
            name: "closeDepositBurn",
            accounts: [
                {
                    name: "burnDeposit",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "itemAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "storeAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "owner",
                    isMut: true,
                    isSigner: false,
                    docs: ["CHECK"],
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "identifier",
                    type: "u64",
                },
            ],
        },
        {
            name: "unwrapAndDestroy",
            accounts: [
                {
                    name: "itemAccount",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "packAccount",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "currency",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                    docs: ["CHECK"],
                },
                {
                    name: "splVaultFrom",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                    docs: ["CHECK"],
                },
                {
                    name: "splVaultTo",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                    docs: ["CHECK"],
                },
                {
                    name: "merkleTree",
                    isMut: false,
                    isSigner: false,
                    docs: ["CHECK"],
                },
                {
                    name: "owner",
                    isMut: false,
                    isSigner: true,
                },
                {
                    name: "tokenProgram",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "metadata",
                    type: {
                        defined: "UnwrapMetadata",
                    },
                },
            ],
        },
        {
            name: "buyPay",
            accounts: [
                {
                    name: "paymentAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "itemAccount",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "packAccount",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "burnDeposit",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "holderAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "owner",
                    isMut: false,
                    isSigner: false,
                    docs: ["CHECK"],
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "distributionBumps",
                    type: {
                        array: ["u8", 6],
                    },
                },
            ],
        },
        {
            name: "addBurn",
            accounts: [
                {
                    name: "burnProgress",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "reserveList",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "itemAccount",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "packAccount",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "owner",
                    isMut: false,
                    isSigner: false,
                    docs: ["CHECK"],
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "bubblegumProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "metadata",
                    type: {
                        defined: "MetadataArgs",
                    },
                },
                {
                    name: "randomBase",
                    type: "u32",
                },
            ],
        },
        {
            name: "burnPay",
            accounts: [
                {
                    name: "paymentAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "itemAccount",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "packAccount",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "holderAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "owner",
                    isMut: false,
                    isSigner: false,
                    docs: ["CHECK"],
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "bubblegumProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "metadata",
                    type: {
                        option: {
                            defined: "MetadataArgs",
                        },
                    },
                },
            ],
        },
        {
            name: "openPack",
            accounts: [
                {
                    name: "treeAuthority",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "merkleTree",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packOpenAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "creatorAuthority",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packContent",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "owner",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packReceipt",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "openAuthority",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "bubblegumProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "logWrapper",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "compressionProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "root",
                    type: {
                        array: ["u8", 32],
                    },
                },
                {
                    name: "dataHash",
                    type: {
                        array: ["u8", 32],
                    },
                },
                {
                    name: "creatorHash",
                    type: {
                        array: ["u8", 32],
                    },
                },
                {
                    name: "index",
                    type: "u32",
                },
                {
                    name: "randomBase",
                    type: "u64",
                },
                {
                    name: "creatorAuthorityBump",
                    type: "u8",
                },
            ],
        },
        {
            name: "deletePack",
            accounts: [
                {
                    name: "storeAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packContent",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packTraits",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "itemReserveList",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "archiveDeposit",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "creatorRegistry",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "manager",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [],
        },
        {
            name: "deleteCard",
            accounts: [
                {
                    name: "packAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packContent",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "cardAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "manager",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [],
        },
        {
            name: "claimZeroCard",
            accounts: [
                {
                    name: "storeAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "claimer",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "packOpenAccountKeep",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "packOpenAccountClose",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "treeAuthority",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "creatorAuthority",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "merkleTreeVerifier",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "merkleTree",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "merkleManager",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "collectionAuthorityRecordPda",
                    isMut: false,
                    isSigner: false,
                    docs: [
                        "If there is no collecton authority record PDA then",
                        "this must be the Bubblegum program address.",
                    ],
                },
                {
                    name: "editionAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "collectionMetadata",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "collectionMint",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "bubblegumSigner",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "owner",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                    docs: ["CHECK"],
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "logWrapper",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "bubblegumProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "compressionProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "tokenMetadataProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "leafIndex",
                    type: "u32",
                },
                {
                    name: "root",
                    type: {
                        array: ["u8", 32],
                    },
                },
                {
                    name: "bumps",
                    type: {
                        array: ["u8", 7],
                    },
                },
                {
                    name: "metadata",
                    type: {
                        defined: "TightCardMetadata",
                    },
                },
            ],
        },
        {
            name: "withdrawFromStore",
            accounts: [
                {
                    name: "storeAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "creator",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [],
        },
        {
            name: "registerTraits",
            accounts: [
                {
                    name: "packAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packTraitsRegistry",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "traits",
                    type: {
                        vec: "string",
                    },
                },
            ],
        },
        {
            name: "closeRegisterTraits",
            accounts: [
                {
                    name: "packAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packTraitsRegistry",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [],
        },
        {
            name: "feedTraits",
            accounts: [
                {
                    name: "packAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packTraits",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "packTraitsRegistry",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "traits",
                    type: {
                        defined: "FeedingTraits",
                    },
                },
            ],
        },
        {
            name: "registerCreator",
            accounts: [
                {
                    name: "creatorRegistry",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "userActivity",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "itemAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "store",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "userActivityBump",
                    type: "u8",
                },
            ],
        },
        {
            name: "feedPool",
            accounts: [
                {
                    name: "poolVault",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "currency",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "fromAta",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "toAta",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "storeAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "tokenProgram",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "name",
                    type: "string",
                },
                {
                    name: "amount",
                    type: "u64",
                },
                {
                    name: "decimals",
                    type: "u8",
                },
                {
                    name: "withdraw",
                    type: "u8",
                },
            ],
        },
        {
            name: "donateUser",
            accounts: [
                {
                    name: "donationRegistryNew",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "donationRegistryOld",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "donationRecord",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "currency",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "receiver",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "userActivity",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "storeAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "merkleTree",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "treeAuthority",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "merkleManager",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "logWrapper",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "bubblegumProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "compressionProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "tokenMetadataProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "epoch",
                    type: "u32",
                },
                {
                    name: "amount",
                    type: "u64",
                },
                {
                    name: "message",
                    type: "string",
                },
                {
                    name: "previousRecord",
                    type: {
                        option: {
                            defined: "PreviousDonationRecord",
                        },
                    },
                },
            ],
        },
        {
            name: "registerCollector",
            accounts: [
                {
                    name: "collectorArtistRegistry",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "collectorGlobalRegistry",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "creatorRegistry",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "userActivity",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "store",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "creatorBump",
                    type: "u8",
                },
                {
                    name: "activityBump",
                    type: "u8",
                },
            ],
        },
        {
            name: "registerActivity",
            accounts: [
                {
                    name: "userActivity",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "store",
                    isMut: false,
                    isSigner: false,
                    docs: ["CHECK"],
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "userActivityBump",
                    type: "u8",
                },
            ],
        },
        {
            name: "registerPackUploads",
            accounts: [
                {
                    name: "packAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "packUploads",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "newPackUploads",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "arweave",
                    type: {
                        option: "string",
                    },
                },
            ],
        },
        {
            name: "printPack",
            accounts: [
                {
                    name: "treeAuthority",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "creatorAuthority",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "discriminator",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "packAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "merkleTree",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "merkleManager",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "collectionAuthorityRecordPda",
                    isMut: false,
                    isSigner: false,
                    docs: [
                        "If there is no collecton authority record PDA then",
                        "this must be the Bubblegum program address.",
                    ],
                },
                {
                    name: "packReceipt",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "editionAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "collectionMetadata",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "collectionMint",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "storeAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "paymentAccount",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "buytrackAccount",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "bubblegumSigner",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "owner",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "logWrapper",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "bubblegumProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "compressionProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "tokenMetadataProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "proof",
                    type: {
                        defined: "CurrencyArtistProof",
                    },
                },
                {
                    name: "receiptSlot",
                    type: "u64",
                },
            ],
        },
        {
            name: "recoverDepositBurn",
            accounts: [
                {
                    name: "burnDeposit",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "artistBurnTrack",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "globalBurnTrack",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "itemAccount",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "packAccount",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "treeAuthority",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "merkleTree",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                    docs: ["CHECK"],
                },
                {
                    name: "fromAta",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                    docs: ["CHECK"],
                },
                {
                    name: "toAta",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                    docs: ["CHECK"],
                },
                {
                    name: "recoverTo",
                    isMut: true,
                    isSigner: false,
                    docs: ["CHECK"],
                },
                {
                    name: "storeAccount",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "token",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                    docs: ["CHECK"],
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "tokenProgram",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "bubblegumProgram",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "logWrapper",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "compressionProgram",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "deposit",
                    type: {
                        defined: "RecoverDeposit",
                    },
                },
                {
                    name: "burn",
                    type: "u8",
                },
            ],
        },
        {
            name: "adjustDepositBurn",
            accounts: [
                {
                    name: "burnDeposit",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "itemAccount",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "packAccount",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "owner",
                    isMut: true,
                    isSigner: false,
                    docs: ["CHECK"],
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [],
        },
        {
            name: "depositBurn",
            accounts: [
                {
                    name: "newBurnDeposit",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "existingBurnDeposit",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "artistBurnTrack",
                    isMut: true,
                    isSigner: false,
                    docs: ["CHECK"],
                },
                {
                    name: "globalBurnTrack",
                    isMut: true,
                    isSigner: false,
                    docs: ["CHECK"],
                },
                {
                    name: "itemAccount",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "packAccount",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "metadataAccount",
                    isMut: false,
                    isSigner: false,
                    isOptional: true,
                    docs: ["CHECK"],
                },
                {
                    name: "owner",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "deposit",
                    type: {
                        defined: "Deposit",
                    },
                },
            ],
        },
        {
            name: "printSingle",
            accounts: [
                {
                    name: "owner",
                    isMut: false,
                    isSigner: false,
                    docs: ["CHECK"],
                },
                {
                    name: "itemAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "treeAuthority",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "storeAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "creatorAuthority",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "paymentAccount",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "merkleTree",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "merkleManager",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "collectionAuthorityRecordPda",
                    isMut: false,
                    isSigner: false,
                    docs: [
                        "If there is no collecton authority record PDA then",
                        "this must be the Bubblegum program address.",
                    ],
                },
                {
                    name: "editionAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "collectionMetadata",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "collectionMint",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "bubblegumSigner",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "buytrackAccount",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "revealForMe",
                    isMut: true,
                    isSigner: false,
                    isOptional: true,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "logWrapper",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "bubblegumProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "compressionProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "tokenMetadataProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "proof",
                    type: {
                        option: {
                            defined: "CurrencyArtistProof",
                        },
                    },
                },
                {
                    name: "storeBump",
                    type: "u8",
                },
                {
                    name: "creatorAuthBump",
                    type: "u8",
                },
                {
                    name: "itemBump",
                    type: "u8",
                },
                {
                    name: "treeBump",
                    type: "u8",
                },
                {
                    name: "extra",
                    type: {
                        defined: "ExtraParameter",
                    },
                },
            ],
        },
        {
            name: "feedTree",
            accounts: [
                {
                    name: "merkleAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "merkleManager",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "lutAccount",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "treeAuthority",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "logWrapper",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "bubblegumProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "compressionProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "managerBump",
                    type: "u8",
                },
                {
                    name: "maxDepth",
                    type: "u32",
                },
                {
                    name: "maxBufferSize",
                    type: "u32",
                },
                {
                    name: "public",
                    type: {
                        option: "bool",
                    },
                },
            ],
        },
    ],
    accounts: [
        {
            name: "BuyTrack",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "count",
                        type: "u32",
                    },
                    {
                        name: "time",
                        type: "u32",
                    },
                ],
            },
        },
        {
            name: "BuyHistory",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "buyType",
                        type: {
                            defined: "BuyHistoryClass",
                        },
                    },
                    {
                        name: "owner",
                        type: "publicKey",
                    },
                    {
                        name: "item",
                        type: "publicKey",
                    },
                    {
                        name: "store",
                        type: "publicKey",
                    },
                ],
            },
        },
        {
            name: "ZeroOpenHolder",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "storeHalfHash",
                        type: {
                            array: ["u8", 4],
                        },
                    },
                    {
                        name: "state",
                        type: {
                            defined: "PackOpenHolderState",
                        },
                    },
                    {
                        name: "paidFee",
                        type: "u8",
                    },
                    {
                        name: "pack",
                        type: "publicKey",
                    },
                    {
                        name: "creator",
                        type: "publicKey",
                    },
                    {
                        name: "claimer",
                        type: "publicKey",
                    },
                    {
                        name: "randomBase",
                        type: "u64",
                    },
                    {
                        name: "packType",
                        type: {
                            defined: "PackType",
                        },
                    },
                    {
                        name: "sendToVault",
                        type: {
                            option: {
                                defined: "MemeVaultProof",
                            },
                        },
                    },
                    {
                        name: "items",
                        type: {
                            vec: {
                                defined: "SelectedZeroCard",
                            },
                        },
                    },
                ],
            },
        },
        {
            name: "PackOpenHolder",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "state",
                        type: {
                            defined: "PackOpenHolderState",
                        },
                    },
                    {
                        name: "pack",
                        type: "publicKey",
                    },
                    {
                        name: "creator",
                        type: "publicKey",
                    },
                    {
                        name: "claimer",
                        type: "publicKey",
                    },
                    {
                        name: "packType",
                        type: {
                            defined: "PackType",
                        },
                    },
                    {
                        name: "items",
                        type: {
                            vec: {
                                defined: "SelectedCard",
                            },
                        },
                    },
                ],
            },
        },
        {
            name: "ArchiveDeposit",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "identifier",
                        type: "u64",
                    },
                    {
                        name: "creator",
                        type: "publicKey",
                    },
                    {
                        name: "dates",
                        type: {
                            defined: "IndexDates",
                        },
                    },
                    {
                        name: "holder",
                        type: "publicKey",
                    },
                    {
                        name: "category",
                        type: {
                            defined: "Category",
                        },
                    },
                    {
                        name: "superCategory",
                        type: {
                            defined: "SuperCategory",
                        },
                    },
                    {
                        name: "eventCategory",
                        type: "u16",
                    },
                    {
                        name: "hash",
                        type: "u64",
                    },
                    {
                        name: "manager",
                        type: "publicKey",
                    },
                    {
                        name: "metadata",
                        type: {
                            defined: "MetadataArgs",
                        },
                    },
                    {
                        name: "supply",
                        type: "u64",
                    },
                    {
                        name: "trackType",
                        type: {
                            defined: "TrackRegistry",
                        },
                    },
                    {
                        name: "mainCurrencyHash",
                        type: "u64",
                    },
                    {
                        name: "volume",
                        type: {
                            vec: {
                                defined: "FakeVolumeTrack",
                            },
                        },
                    },
                ],
            },
        },
        {
            name: "CollectorRegistry",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "storeHash",
                        type: "u64",
                    },
                    {
                        name: "creator",
                        type: "publicKey",
                    },
                    {
                        name: "holder",
                        type: "publicKey",
                    },
                    {
                        name: "currency",
                        type: "publicKey",
                    },
                    {
                        name: "date",
                        type: {
                            defined: "IndexDate",
                        },
                    },
                    {
                        name: "filters",
                        type: {
                            array: ["u8", 4],
                        },
                    },
                    {
                        name: "track",
                        type: {
                            defined: "CollectTrack",
                        },
                    },
                ],
            },
        },
        {
            name: "LutVault",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "address",
                        type: "publicKey",
                    },
                    {
                        name: "creator",
                        type: "publicKey",
                    },
                ],
            },
        },
        {
            name: "TokenManager",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "storeHash",
                        type: "u64",
                    },
                    {
                        name: "tokenType",
                        type: {
                            defined: "TokenType",
                        },
                    },
                    {
                        name: "state",
                        type: {
                            defined: "TokenState",
                        },
                    },
                    {
                        name: "currency",
                        type: "publicKey",
                    },
                    {
                        name: "creator",
                        type: "publicKey",
                    },
                    {
                        name: "communityShare",
                        type: "u16",
                    },
                    {
                        name: "name",
                        type: "string",
                    },
                    {
                        name: "base",
                        type: "u64",
                    },
                    {
                        name: "price",
                        type: "u64",
                    },
                    {
                        name: "supply",
                        type: "u64",
                    },
                    {
                        name: "created",
                        type: "u64",
                    },
                    {
                        name: "pool",
                        type: "u64",
                    },
                    {
                        name: "pending",
                        type: "u64",
                    },
                    {
                        name: "taxes",
                        type: {
                            array: ["u16", 4],
                        },
                    },
                    {
                        name: "options",
                        type: {
                            array: ["u8", 8],
                        },
                    },
                    {
                        name: "extra",
                        type: {
                            array: ["u8", 64],
                        },
                    },
                ],
            },
        },
        {
            name: "CreatorRegistry",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "storeHash",
                        type: "u64",
                    },
                    {
                        name: "currency",
                        type: "publicKey",
                    },
                    {
                        name: "creator",
                        type: "publicKey",
                    },
                    {
                        name: "donations",
                        type: "u64",
                    },
                    {
                        name: "date",
                        type: {
                            defined: "IndexDate",
                        },
                    },
                    {
                        name: "filters",
                        type: {
                            array: ["u8", 8],
                        },
                    },
                    {
                        name: "track",
                        type: {
                            defined: "SaleTrack",
                        },
                    },
                    {
                        name: "lut",
                        type: "publicKey",
                    },
                ],
            },
        },
        {
            name: "CollectionRegistry",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "storeHash",
                        type: "u64",
                    },
                    {
                        name: "currency",
                        type: "publicKey",
                    },
                    {
                        name: "collection",
                        type: "publicKey",
                    },
                    {
                        name: "donations",
                        type: "u64",
                    },
                    {
                        name: "date",
                        type: {
                            defined: "IndexDate",
                        },
                    },
                    {
                        name: "filters",
                        type: {
                            array: ["u8", 8],
                        },
                    },
                    {
                        name: "track",
                        type: {
                            defined: "SaleTrack",
                        },
                    },
                ],
            },
        },
        {
            name: "PoolVault",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "state",
                        type: {
                            defined: "PoolState",
                        },
                    },
                    {
                        name: "storeHash",
                        type: "u64",
                    },
                    {
                        name: "currency",
                        type: "publicKey",
                    },
                    {
                        name: "creator",
                        type: "publicKey",
                    },
                    {
                        name: "poolType",
                        type: {
                            defined: "PoolType",
                        },
                    },
                    {
                        name: "access",
                        type: {
                            defined: "PoolAccess",
                        },
                    },
                    {
                        name: "deposit",
                        type: "u64",
                    },
                    {
                        name: "secured",
                        type: "u64",
                    },
                    {
                        name: "decimals",
                        type: "u8",
                    },
                    {
                        name: "managers",
                        type: {
                            vec: "publicKey",
                        },
                    },
                    {
                        name: "name",
                        type: "string",
                    },
                ],
            },
        },
        {
            name: "Store",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "holder",
                        type: "publicKey",
                    },
                    {
                        name: "creator",
                        type: "publicKey",
                    },
                    {
                        name: "page",
                        type: "u64",
                    },
                    {
                        name: "count",
                        type: "u64",
                    },
                    {
                        name: "live",
                        type: "u64",
                    },
                    {
                        name: "name",
                        type: "string",
                    },
                    {
                        name: "config",
                        type: {
                            defined: "StoreConfig",
                        },
                    },
                    {
                        name: "storeId",
                        type: "u16",
                    },
                    {
                        name: "globalFee",
                        type: {
                            option: {
                                defined: "GlobalFee",
                            },
                        },
                    },
                    {
                        name: "globalDeposit",
                        type: "u64",
                    },
                    {
                        name: "cacheHolder",
                        type: {
                            array: ["u8", 128],
                        },
                    },
                ],
            },
        },
        {
            name: "CurrencyArtistProof",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "proofHash",
                        type: "u64",
                    },
                    {
                        name: "amount",
                        type: "u64",
                    },
                    {
                        name: "currencyVerifier",
                        type: "u32",
                    },
                    {
                        name: "artistVerifier",
                        type: "u32",
                    },
                ],
            },
        },
        {
            name: "Payment",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "PaymentClass",
                        },
                    },
                    {
                        name: "hash",
                        type: {
                            array: ["u8", 32],
                        },
                    },
                ],
            },
        },
        {
            name: "RevealForMe",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "storeHalfHash",
                        type: {
                            array: ["u8", 4],
                        },
                    },
                    {
                        name: "state",
                        type: "u8",
                    },
                    {
                        name: "creator",
                        type: "publicKey",
                    },
                    {
                        name: "nft",
                        type: "publicKey",
                    },
                    {
                        name: "random",
                        type: "u16",
                    },
                    {
                        name: "data",
                        type: "bytes",
                    },
                ],
            },
        },
        {
            name: "BurnDeposit",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "state",
                        type: {
                            defined: "BurnState",
                        },
                    },
                    {
                        name: "deposits",
                        type: {
                            vec: {
                                defined: "FakeDeposit",
                            },
                        },
                    },
                ],
            },
        },
        {
            name: "BurnProgress",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "id",
                        type: "u16",
                    },
                    {
                        name: "burns",
                        type: "publicKey",
                    },
                ],
            },
        },
        {
            name: "ItemReserveList",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "queue",
                        type: "publicKey",
                    },
                ],
            },
        },
        {
            name: "ItemReserveList2",
            type: {
                kind: "struct",
                fields: [],
            },
        },
        {
            name: "PackTraits",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "list",
                        type: {
                            vec: {
                                defined: "TraitType",
                            },
                        },
                    },
                ],
            },
        },
        {
            name: "PackReceipt",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "cnft",
                        type: "publicKey",
                    },
                    {
                        name: "pack",
                        type: "publicKey",
                    },
                    {
                        name: "creator",
                        type: "publicKey",
                    },
                    {
                        name: "state",
                        type: {
                            defined: "PackState",
                        },
                    },
                    {
                        name: "cardsInside",
                        type: "u8",
                    },
                    {
                        name: "slot",
                        type: "u64",
                    },
                    {
                        name: "created",
                        type: "u32",
                    },
                ],
            },
        },
        {
            name: "ZeroContent",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "cards",
                        type: {
                            array: ["u8", 10000000],
                        },
                    },
                ],
            },
        },
        {
            name: "PackContent",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "cards",
                        type: "publicKey",
                    },
                ],
            },
        },
        {
            name: "ZeroCard",
            type: {
                kind: "struct",
                fields: [],
            },
        },
        {
            name: "Authority",
            type: {
                kind: "struct",
                fields: [],
            },
        },
        {
            name: "Card",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "globalState",
                        type: {
                            defined: "GlobalState",
                        },
                    },
                    {
                        name: "store",
                        type: "publicKey",
                    },
                    {
                        name: "creator",
                        type: "publicKey",
                    },
                    {
                        name: "holder",
                        type: "publicKey",
                    },
                    {
                        name: "hash",
                        type: "u64",
                    },
                    {
                        name: "page",
                        type: "u64",
                    },
                    {
                        name: "manager",
                        type: "publicKey",
                    },
                    {
                        name: "index",
                        type: "u16",
                    },
                    {
                        name: "hashTraits",
                        type: "u64",
                    },
                    {
                        name: "created",
                        type: "u32",
                    },
                    {
                        name: "reserved",
                        type: {
                            array: ["u8", 16],
                        },
                    },
                    {
                        name: "item",
                        type: {
                            defined: "Item",
                        },
                    },
                ],
            },
        },
        {
            name: "ItemArchive",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "globalState",
                        type: {
                            defined: "GlobalState",
                        },
                    },
                    {
                        name: "holder",
                        type: "publicKey",
                    },
                    {
                        name: "creator",
                        type: "publicKey",
                    },
                    {
                        name: "dates",
                        type: {
                            defined: "IndexDates",
                        },
                    },
                    {
                        name: "category",
                        type: {
                            defined: "Category",
                        },
                    },
                    {
                        name: "superCategory",
                        type: {
                            defined: "SuperCategory",
                        },
                    },
                    {
                        name: "eventCategory",
                        type: "u16",
                    },
                    {
                        name: "trackType",
                        type: {
                            defined: "TrackRegistry",
                        },
                    },
                    {
                        name: "mainCurrencyHash",
                        type: "u64",
                    },
                    {
                        name: "state",
                        type: {
                            defined: "ItemState",
                        },
                    },
                    {
                        name: "collection",
                        type: "publicKey",
                    },
                    {
                        name: "cnft",
                        type: "publicKey",
                    },
                    {
                        name: "identifier",
                        type: "u64",
                    },
                    {
                        name: "hash",
                        type: "u64",
                    },
                    {
                        name: "supply",
                        type: "u64",
                    },
                    {
                        name: "volume",
                        type: {
                            vec: {
                                defined: "FakeVolumeTrack",
                            },
                        },
                    },
                ],
            },
        },
        {
            name: "SecureHolder",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "payload",
                        type: {
                            defined: "EncryptedPayload",
                        },
                    },
                ],
            },
        },
        {
            name: "Single",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "globalState",
                        type: {
                            defined: "GlobalState",
                        },
                    },
                    {
                        name: "holder",
                        type: "publicKey",
                    },
                    {
                        name: "creator",
                        type: "publicKey",
                    },
                    {
                        name: "dates",
                        type: {
                            defined: "IndexDates",
                        },
                    },
                    {
                        name: "category",
                        type: {
                            defined: "Category",
                        },
                    },
                    {
                        name: "superCategory",
                        type: {
                            defined: "SuperCategory",
                        },
                    },
                    {
                        name: "eventCategory",
                        type: "u16",
                    },
                    {
                        name: "trackType",
                        type: {
                            defined: "TrackRegistry",
                        },
                    },
                    {
                        name: "mainCurrencyHash",
                        type: "u64",
                    },
                    {
                        name: "track",
                        type: {
                            defined: "ItemTrack",
                        },
                    },
                    {
                        name: "popularity",
                        type: {
                            defined: "Popularity",
                        },
                    },
                    {
                        name: "filtering",
                        type: {
                            defined: "Filter",
                        },
                    },
                    {
                        name: "page",
                        type: "u64",
                    },
                    {
                        name: "manager",
                        type: "publicKey",
                    },
                    {
                        name: "isServerless",
                        type: "u8",
                    },
                    {
                        name: "availableOption",
                        type: "u8",
                    },
                    {
                        name: "hasWrappedTokens",
                        type: "u8",
                    },
                    {
                        name: "burntPieces",
                        type: "u32",
                    },
                    {
                        name: "flag",
                        type: {
                            array: ["u8", 1],
                        },
                    },
                    {
                        name: "item",
                        type: {
                            defined: "Item",
                        },
                    },
                    {
                        name: "saleConfig",
                        type: {
                            defined: "SaleConfig",
                        },
                    },
                    {
                        name: "identifier",
                        type: "u64",
                    },
                    {
                        name: "hash",
                        type: "u64",
                    },
                    {
                        name: "hashTraits",
                        type: "u64",
                    },
                    {
                        name: "volume",
                        type: {
                            vec: {
                                defined: "FakeVolumeTrack",
                            },
                        },
                    },
                    {
                        name: "extra",
                        type: {
                            array: ["u8", 4],
                        },
                    },
                ],
            },
        },
        {
            name: "Pack",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "globalState",
                        type: {
                            defined: "GlobalState",
                        },
                    },
                    {
                        name: "holder",
                        type: "publicKey",
                    },
                    {
                        name: "creator",
                        type: "publicKey",
                    },
                    {
                        name: "dates",
                        type: {
                            defined: "IndexDates",
                        },
                    },
                    {
                        name: "category",
                        type: {
                            defined: "Category",
                        },
                    },
                    {
                        name: "superCategory",
                        type: {
                            defined: "SuperCategory",
                        },
                    },
                    {
                        name: "eventCategory",
                        type: "u16",
                    },
                    {
                        name: "trackType",
                        type: {
                            defined: "TrackRegistry",
                        },
                    },
                    {
                        name: "mainCurrencyHash",
                        type: "u64",
                    },
                    {
                        name: "track",
                        type: {
                            defined: "ItemTrack",
                        },
                    },
                    {
                        name: "popularity",
                        type: {
                            defined: "Popularity",
                        },
                    },
                    {
                        name: "filtering",
                        type: {
                            defined: "Filter",
                        },
                    },
                    {
                        name: "page",
                        type: "u64",
                    },
                    {
                        name: "manager",
                        type: "publicKey",
                    },
                    {
                        name: "isServerless",
                        type: "u8",
                    },
                    {
                        name: "availableOption",
                        type: "u8",
                    },
                    {
                        name: "hasWrappedTokens",
                        type: "u8",
                    },
                    {
                        name: "burntPieces",
                        type: "u32",
                    },
                    {
                        name: "flag",
                        type: {
                            array: ["u8", 1],
                        },
                    },
                    {
                        name: "item",
                        type: {
                            defined: "Item",
                        },
                    },
                    {
                        name: "count",
                        type: "u64",
                    },
                    {
                        name: "live",
                        type: "u64",
                    },
                    {
                        name: "available",
                        type: "u64",
                    },
                    {
                        name: "printed",
                        type: "u64",
                    },
                    {
                        name: "saleConfig",
                        type: {
                            defined: "SaleConfig",
                        },
                    },
                    {
                        name: "opened",
                        type: "u64",
                    },
                    {
                        name: "owed",
                        type: "u64",
                    },
                    {
                        name: "identifier",
                        type: "u64",
                    },
                    {
                        name: "hash",
                        type: "u64",
                    },
                    {
                        name: "hashTraits",
                        type: "u64",
                    },
                    {
                        name: "packConfig",
                        type: {
                            defined: "PackConfig",
                        },
                    },
                    {
                        name: "volume",
                        type: {
                            vec: {
                                defined: "FakeVolumeTrack",
                            },
                        },
                    },
                    {
                        name: "delegate",
                        type: {
                            vec: "publicKey",
                        },
                    },
                    {
                        name: "extra",
                        type: {
                            array: ["u8", 4],
                        },
                    },
                ],
            },
        },
        {
            name: "GenericUser",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "subApp",
                        type: "u64",
                    },
                    {
                        name: "holderHash",
                        type: "u64",
                    },
                    {
                        name: "category",
                        type: "u64",
                    },
                    {
                        name: "creator",
                        type: "publicKey",
                    },
                    {
                        name: "lutAccount",
                        type: "publicKey",
                    },
                    {
                        name: "subWallets",
                        type: {
                            vec: "publicKey",
                        },
                    },
                    {
                        name: "extended",
                        type: "u8",
                    },
                    {
                        name: "flags",
                        type: {
                            array: ["u8", 8],
                        },
                    },
                    {
                        name: "username",
                        type: "string",
                    },
                    {
                        name: "genericStore",
                        type: {
                            vec: {
                                defined: "GenericStore",
                            },
                        },
                    },
                    {
                        name: "extra",
                        type: {
                            array: ["u8", 32],
                        },
                    },
                ],
            },
        },
        {
            name: "ThreeId",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "holderHash",
                        type: "u64",
                    },
                    {
                        name: "creator",
                        type: "publicKey",
                    },
                    {
                        name: "lutAccount",
                        type: "publicKey",
                    },
                    {
                        name: "points1",
                        type: "u64",
                    },
                    {
                        name: "points2",
                        type: "u64",
                    },
                    {
                        name: "coin1",
                        type: "u32",
                    },
                    {
                        name: "coin2",
                        type: "u32",
                    },
                    {
                        name: "settings",
                        type: {
                            array: ["u8", 8],
                        },
                    },
                    {
                        name: "subwallets",
                        type: {
                            vec: "publicKey",
                        },
                    },
                    {
                        name: "username",
                        type: "string",
                    },
                    {
                        name: "generalStore",
                        type: {
                            vec: {
                                defined: "GeneralStore",
                            },
                        },
                    },
                    {
                        name: "extra",
                        type: {
                            array: ["u8", 32],
                        },
                    },
                ],
            },
        },
        {
            name: "StoresHolder",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "class",
                        type: {
                            defined: "AccountClass",
                        },
                    },
                    {
                        name: "slot",
                        type: "u64",
                    },
                    {
                        name: "creator",
                        type: "publicKey",
                    },
                    {
                        name: "count",
                        type: "u64",
                    },
                    {
                        name: "defaultGlobalFee",
                        type: {
                            option: {
                                defined: "GlobalFee",
                            },
                        },
                    },
                ],
            },
        },
    ],
    types: [
        {
            name: "TraitPass",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "list",
                        type: {
                            vec: {
                                defined: "TraitPassType",
                            },
                        },
                    },
                ],
            },
        },
        {
            name: "TraitPassType",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "SemiFungible",
                        fields: [
                            {
                                name: "typeId",
                                type: "u16",
                            },
                            {
                                name: "amount",
                                type: "u64",
                            },
                        ],
                    },
                    {
                        name: "Date",
                        fields: [
                            {
                                name: "typeId",
                                type: "u16",
                            },
                            {
                                name: "date",
                                type: "u32",
                            },
                        ],
                    },
                    {
                        name: "NonFungible",
                        fields: [
                            {
                                name: "typeId",
                                type: "u16",
                            },
                            {
                                name: "valueId",
                                type: "u16",
                            },
                        ],
                    },
                ],
            },
        },
        {
            name: "TraitType",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "SemiFungible",
                        fields: [
                            {
                                name: "hash",
                                type: "u64",
                            },
                            {
                                name: "count",
                                type: "u32",
                            },
                            {
                                name: "supply",
                                type: "u64",
                            },
                            {
                                name: "total",
                                type: "u64",
                            },
                        ],
                    },
                    {
                        name: "Date",
                        fields: [
                            {
                                name: "hash",
                                type: "u64",
                            },
                            {
                                name: "count",
                                type: "u32",
                            },
                            {
                                name: "supply",
                                type: "u64",
                            },
                        ],
                    },
                    {
                        name: "NonFungible",
                        fields: [
                            {
                                name: "hash",
                                type: "u64",
                            },
                            {
                                name: "values",
                                type: {
                                    vec: {
                                        defined: "TraitValue",
                                    },
                                },
                            },
                        ],
                    },
                ],
            },
        },
        {
            name: "FeedingTraits",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "list",
                        type: {
                            vec: {
                                defined: "TraitInit",
                            },
                        },
                    },
                ],
            },
        },
        {
            name: "TraitInit",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "SemiFungible",
                        fields: [
                            {
                                name: "hash",
                                type: "u64",
                            },
                        ],
                    },
                    {
                        name: "Date",
                        fields: [
                            {
                                name: "hash",
                                type: "u64",
                            },
                        ],
                    },
                    {
                        name: "NonFungible",
                        fields: [
                            {
                                name: "hash",
                                type: "u64",
                            },
                            {
                                name: "values",
                                type: {
                                    vec: "u64",
                                },
                            },
                        ],
                    },
                ],
            },
        },
        {
            name: "DateTraitInitMap",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "hash",
                        type: "u64",
                    },
                    {
                        name: "date",
                        type: "u32",
                    },
                    {
                        name: "index",
                        type: "u32",
                    },
                ],
            },
        },
        {
            name: "DateTraitInit",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "hash",
                        type: "u64",
                    },
                    {
                        name: "date",
                        type: "u32",
                    },
                ],
            },
        },
        {
            name: "NonFungibleTraitInitMap",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "hash",
                        type: "u64",
                    },
                    {
                        name: "values",
                        type: {
                            vec: {
                                defined: "FakeTraitValue",
                            },
                        },
                    },
                    {
                        name: "index",
                        type: "u32",
                    },
                ],
            },
        },
        {
            name: "SemiFungibleTraitInitMap",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "hash",
                        type: "u64",
                    },
                    {
                        name: "amount",
                        type: "u64",
                    },
                    {
                        name: "index",
                        type: "u32",
                    },
                ],
            },
        },
        {
            name: "NonFungibleTraitInit",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "hash",
                        type: "u64",
                    },
                    {
                        name: "values",
                        type: {
                            vec: "u64",
                        },
                    },
                ],
            },
        },
        {
            name: "SemiFungibleTraitInit",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "hash",
                        type: "u64",
                    },
                    {
                        name: "amount",
                        type: "u64",
                    },
                ],
            },
        },
        {
            name: "TraitValue",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "hash",
                        type: "u64",
                    },
                    {
                        name: "count",
                        type: "u32",
                    },
                    {
                        name: "supply",
                        type: "u64",
                    },
                ],
            },
        },
        {
            name: "TokenMetadata",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "name",
                        type: "string",
                    },
                    {
                        name: "symbol",
                        type: "string",
                    },
                    {
                        name: "arweave",
                        type: "string",
                    },
                ],
            },
        },
        {
            name: "StoreConfig",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "fee",
                        type: "u64",
                    },
                    {
                        name: "feePercentage",
                        type: "u16",
                    },
                    {
                        name: "feeType",
                        type: {
                            defined: "FeeType",
                        },
                    },
                    {
                        name: "trust",
                        type: "publicKey",
                    },
                    {
                        name: "rules",
                        type: {
                            vec: {
                                defined: "StoreRule",
                            },
                        },
                    },
                ],
            },
        },
        {
            name: "GlobalFee",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "delegate",
                        type: "publicKey",
                    },
                    {
                        name: "fee",
                        type: "u64",
                    },
                    {
                        name: "feePercentage",
                        type: "u16",
                    },
                    {
                        name: "feeType",
                        type: {
                            defined: "FeeType",
                        },
                    },
                ],
            },
        },
        {
            name: "ListingPerWalletArgs",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "amount",
                        type: "u16",
                    },
                ],
            },
        },
        {
            name: "EncryptedPayload",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "encType",
                        type: "u8",
                    },
                    {
                        name: "arweave",
                        type: "string",
                    },
                ],
            },
        },
        {
            name: "AllowedCurrencyArgs",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "id",
                        type: "u16",
                    },
                ],
            },
        },
        {
            name: "FakeBurnCount",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "key",
                        type: "u64",
                    },
                    {
                        name: "track",
                        type: {
                            defined: "DepositTrack",
                        },
                    },
                ],
            },
        },
        {
            name: "BurnCount",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "list",
                        type: {
                            vec: {
                                defined: "FakeBurnCount",
                            },
                        },
                    },
                ],
            },
        },
        {
            name: "Seed",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "seed",
                        type: "bytes",
                    },
                ],
            },
        },
        {
            name: "AccountHasher",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "seeds",
                        type: {
                            vec: {
                                defined: "Seed",
                            },
                        },
                    },
                    {
                        name: "insertAt",
                        type: "u8",
                    },
                    {
                        name: "program",
                        type: "publicKey",
                    },
                    {
                        name: "bump",
                        type: "u8",
                    },
                ],
            },
        },
        {
            name: "RecoverDeposit",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "cnft",
                        type: {
                            option: {
                                defined: "CnftData",
                            },
                        },
                    },
                ],
            },
        },
        {
            name: "PreviousDonationRecord",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "cnft",
                        type: {
                            defined: "CnftData",
                        },
                    },
                    {
                        name: "amount",
                        type: "u64",
                    },
                    {
                        name: "message",
                        type: "string",
                    },
                ],
            },
        },
        {
            name: "CnftData",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "root",
                        type: {
                            array: ["u8", 32],
                        },
                    },
                    {
                        name: "dataHash",
                        type: {
                            array: ["u8", 32],
                        },
                    },
                    {
                        name: "creatorHash",
                        type: {
                            array: ["u8", 32],
                        },
                    },
                    {
                        name: "index",
                        type: "u32",
                    },
                ],
            },
        },
        {
            name: "DepositType",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "Creator",
                        fields: [
                            {
                                name: "creators",
                                type: {
                                    vec: {
                                        defined: "Creator",
                                    },
                                },
                            },
                        ],
                    },
                    {
                        name: "PdaCreator",
                        fields: [
                            {
                                name: "creators",
                                type: {
                                    vec: {
                                        defined: "Creator",
                                    },
                                },
                            },
                            {
                                name: "hasher",
                                type: {
                                    defined: "AccountHasher",
                                },
                            },
                        ],
                    },
                    {
                        name: "Collection",
                        fields: [
                            {
                                name: "metadata",
                                type: {
                                    defined: "VerifyCollectionMetadata",
                                },
                            },
                            {
                                name: "subtype",
                                type: {
                                    defined: "DepositSubtype",
                                },
                            },
                        ],
                    },
                ],
            },
        },
        {
            name: "CompactCnftData",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "root",
                        type: {
                            array: ["u8", 32],
                        },
                    },
                    {
                        name: "arweave",
                        type: "string",
                    },
                    {
                        name: "index",
                        type: "u32",
                    },
                ],
            },
        },
        {
            name: "Deposit",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "depositType",
                        type: {
                            defined: "DepositType",
                        },
                    },
                    {
                        name: "format",
                        type: {
                            defined: "DepositFormat",
                        },
                    },
                    {
                        name: "interestHash",
                        type: "u64",
                    },
                    {
                        name: "proofSize",
                        type: "u8",
                    },
                ],
            },
        },
        {
            name: "DepositTrackType",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "Creator",
                    },
                    {
                        name: "PdaCreator",
                    },
                    {
                        name: "Collection",
                    },
                ],
            },
        },
        {
            name: "DepositTrack",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "depositTrackType",
                        type: {
                            defined: "DepositTrackType",
                        },
                    },
                    {
                        name: "depositState",
                        type: {
                            defined: "DepositState",
                        },
                    },
                ],
            },
        },
        {
            name: "FakeDeposit",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "key",
                        type: "u64",
                    },
                    {
                        name: "track",
                        type: {
                            defined: "BurnCount",
                        },
                    },
                ],
            },
        },
        {
            name: "BurnState",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "NonPending",
                    },
                    {
                        name: "Pending",
                    },
                ],
            },
        },
        {
            name: "DepositState",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "Available",
                    },
                    {
                        name: "Burning",
                    },
                ],
            },
        },
        {
            name: "DepositSubtype",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "None",
                    },
                    {
                        name: "Three",
                    },
                ],
            },
        },
        {
            name: "DepositFormat",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "Cnft",
                    },
                    {
                        name: "Nft",
                    },
                ],
            },
        },
        {
            name: "SelectedZeroCard",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "id",
                        type: "u32",
                    },
                    {
                        name: "edition",
                        type: "u32",
                    },
                ],
            },
        },
        {
            name: "SelectedCard",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "id",
                        type: "u16",
                    },
                    {
                        name: "edition",
                        type: "u32",
                    },
                ],
            },
        },
        {
            name: "BurnTrack",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "amount",
                        type: "u16",
                    },
                    {
                        name: "burnType",
                        type: {
                            defined: "BurnTypeBurn",
                        },
                    },
                ],
            },
        },
        {
            name: "MemeVaultProof",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "amount",
                        type: "u64",
                    },
                    {
                        name: "halfCurrencyHash",
                        type: "u32",
                    },
                ],
            },
        },
        {
            name: "Item",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "metadata",
                        type: {
                            defined: "MetadataArgs",
                        },
                    },
                ],
            },
        },
        {
            name: "ItemTrack",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "state",
                        type: {
                            defined: "ItemState",
                        },
                    },
                    {
                        name: "supply",
                        type: "u64",
                    },
                    {
                        name: "created",
                        type: "u64",
                    },
                ],
            },
        },
        {
            name: "CardTrack",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "supply",
                        type: "u32",
                    },
                    {
                        name: "created",
                        type: "u32",
                    },
                    {
                        name: "state",
                        type: {
                            defined: "CardState",
                        },
                    },
                ],
            },
        },
        {
            name: "IndexDate",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "hour",
                        type: "u32",
                    },
                    {
                        name: "day",
                        type: "u32",
                    },
                    {
                        name: "week",
                        type: "u32",
                    },
                    {
                        name: "month",
                        type: "u32",
                    },
                    {
                        name: "minRelative",
                        type: "u8",
                    },
                ],
            },
        },
        {
            name: "IndexDates",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "created",
                        type: {
                            defined: "IndexDate",
                        },
                    },
                    {
                        name: "activity",
                        type: {
                            defined: "IndexDate",
                        },
                    },
                ],
            },
        },
        {
            name: "SaleTrack",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "created",
                        type: "u64",
                    },
                    {
                        name: "sold",
                        type: "u64",
                    },
                    {
                        name: "earned",
                        type: "u64",
                    },
                    {
                        name: "collectors",
                        type: "u64",
                    },
                ],
            },
        },
        {
            name: "CollectTrack",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "collected",
                        type: "u64",
                    },
                    {
                        name: "spent",
                        type: "u64",
                    },
                ],
            },
        },
        {
            name: "Filter",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "filter1",
                        type: {
                            defined: "FilterType",
                        },
                    },
                    {
                        name: "filter2",
                        type: {
                            defined: "FilterType",
                        },
                    },
                ],
            },
        },
        {
            name: "Category",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "cat1",
                        type: "u16",
                    },
                    {
                        name: "cat2",
                        type: "u16",
                    },
                    {
                        name: "cat3",
                        type: "u16",
                    },
                ],
            },
        },
        {
            name: "SuperCategory",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "cat1",
                        type: "u8",
                    },
                    {
                        name: "cat2",
                        type: "u8",
                    },
                ],
            },
        },
        {
            name: "Earnings",
            type: {
                kind: "struct",
                fields: [],
            },
        },
        {
            name: "Popularity",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "lastReset",
                        type: "u16",
                    },
                    {
                        name: "count",
                        type: "u64",
                    },
                    {
                        name: "state",
                        type: {
                            defined: "PopularityState",
                        },
                    },
                ],
            },
        },
        {
            name: "FakeTraitValue",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "trait_value",
                        type: "u64",
                    },
                    {
                        name: "state",
                        type: "u8",
                    },
                ],
            },
        },
        {
            name: "FakeTraitPair",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "trait_type",
                        type: "string",
                    },
                    {
                        name: "value",
                        type: "string",
                    },
                ],
            },
        },
        {
            name: "FakeVolumeTrack",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "key",
                        type: "publicKey",
                    },
                    {
                        name: "track",
                        type: {
                            defined: "VolumeTrack",
                        },
                    },
                ],
            },
        },
        {
            name: "PackConfig",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "amountPerPack",
                        type: "u8",
                    },
                    {
                        name: "chancesOfEmpty",
                        type: "u16",
                    },
                    {
                        name: "openAuthority",
                        type: "publicKey",
                    },
                    {
                        name: "packType",
                        type: {
                            defined: "PackType",
                        },
                    },
                    {
                        name: "packRules",
                        type: {
                            vec: {
                                defined: "PackRule",
                            },
                        },
                    },
                ],
            },
        },
        {
            name: "VolumeTrack",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "amount",
                        type: "u64",
                    },
                    {
                        name: "pieces",
                        type: "u64",
                    },
                ],
            },
        },
        {
            name: "SaleConfig",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "prices",
                        type: {
                            vec: {
                                defined: "Price",
                            },
                        },
                    },
                    {
                        name: "priceType",
                        type: {
                            defined: "PriceRule",
                        },
                    },
                    {
                        name: "rules",
                        type: {
                            vec: {
                                defined: "Rule",
                            },
                        },
                    },
                    {
                        name: "sendToVault",
                        type: "u8",
                    },
                    {
                        name: "saleType",
                        type: {
                            defined: "SaleType",
                        },
                    },
                ],
            },
        },
        {
            name: "ZeroConfig",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "bytes",
                        type: "u8",
                    },
                    {
                        name: "chunks",
                        type: {
                            array: ["u8", 2],
                        },
                    },
                    {
                        name: "chunkSize",
                        type: "u8",
                    },
                    {
                        name: "supplyChunkBytes",
                        type: "u8",
                    },
                ],
            },
        },
        {
            name: "Price",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "amount",
                        type: "u64",
                    },
                    {
                        name: "priceType",
                        type: {
                            defined: "CurrencyType",
                        },
                    },
                ],
            },
        },
        {
            name: "CoolTimePerAmountArgs",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "count",
                        type: "u16",
                    },
                    {
                        name: "amount",
                        type: "u16",
                    },
                    {
                        name: "time",
                        type: "u32",
                    },
                ],
            },
        },
        {
            name: "TotalPerTimeArgs",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "count",
                        type: "u16",
                    },
                    {
                        name: "amount",
                        type: "u16",
                    },
                    {
                        name: "time",
                        type: "u32",
                    },
                    {
                        name: "lastTimeReset",
                        type: "u32",
                    },
                ],
            },
        },
        {
            name: "OnlyBetweenTimesArgs",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "start",
                        type: "u32",
                    },
                    {
                        name: "end",
                        type: "u32",
                    },
                    {
                        name: "rangeType",
                        type: {
                            defined: "TimeRangeType",
                        },
                    },
                ],
            },
        },
        {
            name: "OnlyTheseDOWArgs",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "days",
                        type: "u8",
                    },
                ],
            },
        },
        {
            name: "CreatorGateArgs",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "key",
                        type: "publicKey",
                    },
                ],
            },
        },
        {
            name: "TotalPerTimeWalletArgs",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "amount",
                        type: "u16",
                    },
                    {
                        name: "time",
                        type: "u32",
                    },
                ],
            },
        },
        {
            name: "TimedPerWalletArgs",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "amount",
                        type: "u16",
                    },
                ],
            },
        },
        {
            name: "WrappedSource",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "pool",
                        type: "publicKey",
                    },
                    {
                        name: "amount",
                        type: "u64",
                    },
                    {
                        name: "distribution",
                        type: "u16",
                    },
                    {
                        name: "track",
                        type: "u8",
                    },
                ],
            },
        },
        {
            name: "GenericValue",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "None",
                    },
                    {
                        name: "Key",
                        fields: [
                            {
                                name: "value",
                                type: "publicKey",
                            },
                        ],
                    },
                    {
                        name: "EightBytes",
                        fields: [
                            {
                                name: "value",
                                type: "u64",
                            },
                        ],
                    },
                ],
            },
        },
        {
            name: "GenericStore",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "storeType",
                        type: "u16",
                    },
                    {
                        name: "data",
                        type: {
                            defined: "GenericValue",
                        },
                    },
                ],
            },
        },
        {
            name: "Uses",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "useMethod",
                        type: {
                            defined: "UseMethod",
                        },
                    },
                    {
                        name: "remaining",
                        type: "u64",
                    },
                    {
                        name: "total",
                        type: "u64",
                    },
                ],
            },
        },
        {
            name: "Collection",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "verified",
                        type: "bool",
                    },
                    {
                        name: "key",
                        type: "publicKey",
                    },
                ],
            },
        },
        {
            name: "Creator",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "address",
                        type: "publicKey",
                    },
                    {
                        name: "verified",
                        type: "bool",
                    },
                    {
                        name: "share",
                        type: "u8",
                    },
                ],
            },
        },
        {
            name: "ShortCreator",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "address",
                        type: "publicKey",
                    },
                    {
                        name: "share",
                        type: "u8",
                    },
                ],
            },
        },
        {
            name: "VerifyCollectionMetadata",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "name",
                        type: "string",
                    },
                    {
                        name: "symbol",
                        type: "string",
                    },
                    {
                        name: "uri",
                        type: "string",
                    },
                    {
                        name: "royalty",
                        type: "u16",
                    },
                    {
                        name: "collection",
                        type: "u8",
                    },
                    {
                        name: "creators",
                        type: {
                            vec: {
                                defined: "Creator",
                            },
                        },
                    },
                ],
            },
        },
        {
            name: "TightCardMetadata",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "traitHash",
                        type: "u64",
                    },
                    {
                        name: "name",
                        type: "string",
                    },
                    {
                        name: "arweave",
                        type: "string",
                    },
                    {
                        name: "royalty",
                        type: "u16",
                    },
                    {
                        name: "chunkSize",
                        type: "u8",
                    },
                    {
                        name: "creators",
                        type: {
                            vec: {
                                defined: "ShortCreator",
                            },
                        },
                    },
                    {
                        name: "uploader",
                        type: {
                            option: "publicKey",
                        },
                    },
                ],
            },
        },
        {
            name: "ShortMetadata",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "index",
                        type: "u32",
                    },
                    {
                        name: "supply",
                        type: {
                            option: "u64",
                        },
                    },
                    {
                        name: "traitHash",
                        type: "u64",
                    },
                    {
                        name: "name",
                        type: "string",
                    },
                    {
                        name: "arweave",
                        type: "string",
                    },
                    {
                        name: "traitPass",
                        type: {
                            option: {
                                defined: "TraitPass",
                            },
                        },
                    },
                    {
                        name: "royalty",
                        type: {
                            option: "u16",
                        },
                    },
                    {
                        name: "creators",
                        type: {
                            option: {
                                vec: {
                                    defined: "ShortCreator",
                                },
                            },
                        },
                    },
                ],
            },
        },
        {
            name: "UnwrapMetadata",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "wrappedAmount",
                        type: "u64",
                    },
                    {
                        name: "decimals",
                        type: "u8",
                    },
                    {
                        name: "traitHash",
                        type: "u64",
                    },
                    {
                        name: "name",
                        type: "string",
                    },
                    {
                        name: "arweave",
                        type: "string",
                    },
                    {
                        name: "edition",
                        type: "u32",
                    },
                    {
                        name: "leafIndex",
                        type: "u32",
                    },
                    {
                        name: "cardIndex",
                        type: {
                            option: "u32",
                        },
                    },
                    {
                        name: "royalty",
                        type: "u16",
                    },
                    {
                        name: "creators",
                        type: {
                            vec: {
                                defined: "ShortCreator",
                            },
                        },
                    },
                    {
                        name: "bumps",
                        type: {
                            array: ["u8", 2],
                        },
                    },
                ],
            },
        },
        {
            name: "MetadataArgs",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "name",
                        docs: ["The name of the asset"],
                        type: "string",
                    },
                    {
                        name: "symbol",
                        docs: ["The symbol for the asset"],
                        type: "string",
                    },
                    {
                        name: "uri",
                        docs: ["URI pointing to JSON representing the asset"],
                        type: "string",
                    },
                    {
                        name: "sellerFeeBasisPoints",
                        docs: [
                            "Royalty basis points that goes to creators in secondary sales (0-10000)",
                        ],
                        type: "u16",
                    },
                    {
                        name: "primarySaleHappened",
                        type: "bool",
                    },
                    {
                        name: "isMutable",
                        type: "bool",
                    },
                    {
                        name: "editionNonce",
                        docs: ["nonce for easy calculation of editions, if present"],
                        type: {
                            option: "u8",
                        },
                    },
                    {
                        name: "tokenStandard",
                        docs: [
                            "Since we cannot easily change Metadata, we add the new DataV2 fields here at the end.",
                        ],
                        type: {
                            option: {
                                defined: "TokenStandard",
                            },
                        },
                    },
                    {
                        name: "collection",
                        docs: ["Collection"],
                        type: {
                            option: {
                                defined: "Collection",
                            },
                        },
                    },
                    {
                        name: "uses",
                        docs: ["Uses"],
                        type: {
                            option: {
                                defined: "Uses",
                            },
                        },
                    },
                    {
                        name: "tokenProgramVersion",
                        type: {
                            defined: "TokenProgramVersion",
                        },
                    },
                    {
                        name: "creators",
                        type: {
                            vec: {
                                defined: "Creator",
                            },
                        },
                    },
                ],
            },
        },
        {
            name: "ShortMetadataArgs",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "name",
                        type: "string",
                    },
                    {
                        name: "uri",
                        type: "string",
                    },
                    {
                        name: "uriType",
                        type: "u8",
                    },
                    {
                        name: "sellerFeeBasisPoints",
                        type: "u16",
                    },
                    {
                        name: "collection",
                        type: "publicKey",
                    },
                    {
                        name: "creators",
                        type: {
                            vec: {
                                defined: "ShortCreator",
                            },
                        },
                    },
                ],
            },
        },
        {
            name: "BuyHistoryClass",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "SingleBuyV1",
                    },
                    {
                        name: "PackBuyV1",
                    },
                ],
            },
        },
        {
            name: "FeeType",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "AllMints",
                    },
                    {
                        name: "PricedMintsOnly",
                    },
                    {
                        name: "SkipBurnMints",
                    },
                ],
            },
        },
        {
            name: "PackRule",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "CoolDownToOpen",
                        fields: [
                            {
                                name: "seconds",
                                type: "u32",
                            },
                        ],
                    },
                ],
            },
        },
        {
            name: "StoreRule",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "ListingPerWallet",
                        fields: [
                            {
                                name: "config",
                                type: {
                                    defined: "ListingPerWalletArgs",
                                },
                            },
                        ],
                    },
                    {
                        name: "AllowedCurrency",
                        fields: [
                            {
                                name: "config",
                                type: {
                                    defined: "CurrencyType",
                                },
                            },
                        ],
                    },
                ],
            },
        },
        {
            name: "BurnTypeBurn",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "CollectionBurn",
                    },
                ],
            },
        },
        {
            name: "EditionStoreType",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "None",
                    },
                    {
                        name: "Name",
                    },
                    {
                        name: "Url",
                    },
                ],
            },
        },
        {
            name: "FilterType",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "None",
                    },
                ],
            },
        },
        {
            name: "PopularityState",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "New",
                    },
                    {
                        name: "None",
                    },
                    {
                        name: "First",
                    },
                    {
                        name: "Ten",
                    },
                    {
                        name: "TwentyFive",
                    },
                    {
                        name: "Hundred",
                    },
                    {
                        name: "Thousand",
                    },
                    {
                        name: "TenThousand",
                    },
                    {
                        name: "HundredThousand",
                    },
                    {
                        name: "Million",
                    },
                    {
                        name: "TenMillion",
                    },
                    {
                        name: "HundredMillion",
                    },
                    {
                        name: "Billion",
                    },
                    {
                        name: "TenBillion",
                    },
                    {
                        name: "HundrerBillion",
                    },
                    {
                        name: "Trillion",
                    },
                    {
                        name: "TenTrillion",
                    },
                    {
                        name: "HundredTrillion",
                    },
                    {
                        name: "Highest",
                    },
                    {
                        name: "Banned",
                    },
                ],
            },
        },
        {
            name: "TrackRegistry",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "NoTrack",
                    },
                    {
                        name: "Tracked",
                    },
                ],
            },
        },
        {
            name: "PackType",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "RandomDirect",
                    },
                    {
                        name: "RandomPack",
                    },
                    {
                        name: "Bundle",
                    },
                ],
            },
        },
        {
            name: "SaleType",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "Normal",
                    },
                    {
                        name: "NoMarketFee",
                    },
                    {
                        name: "Partnership",
                    },
                    {
                        name: "LocksInVault",
                    },
                ],
            },
        },
        {
            name: "CurrencyType",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "Native",
                    },
                    {
                        name: "Spl",
                        fields: [
                            {
                                name: "id",
                                type: "publicKey",
                            },
                        ],
                    },
                    {
                        name: "Collection",
                        fields: [
                            {
                                name: "id",
                                type: "publicKey",
                            },
                        ],
                    },
                    {
                        name: "Creator",
                        fields: [
                            {
                                name: "id",
                                type: "publicKey",
                            },
                        ],
                    },
                    {
                        name: "None",
                    },
                ],
            },
        },
        {
            name: "CardState",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "Active",
                    },
                    {
                        name: "Hidden",
                    },
                    {
                        name: "Inactive",
                    },
                    {
                        name: "Retired",
                    },
                    {
                        name: "SoldOut",
                    },
                    {
                        name: "None",
                    },
                    {
                        name: "NotReady",
                    },
                ],
            },
        },
        {
            name: "ItemState",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "Active",
                    },
                    {
                        name: "Hidden",
                    },
                    {
                        name: "Inactive",
                    },
                    {
                        name: "Retired",
                    },
                    {
                        name: "SoldOut",
                    },
                    {
                        name: "None",
                    },
                    {
                        name: "NotReady",
                    },
                    {
                        name: "NotReadyStarted",
                    },
                    {
                        name: "Flagged",
                    },
                ],
            },
        },
        {
            name: "PackState",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "Closed",
                    },
                    {
                        name: "Opened",
                    },
                    {
                        name: "Unassigned",
                    },
                ],
            },
        },
        {
            name: "PackOpenHolderState",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "Unclaimed",
                    },
                    {
                        name: "Claiming",
                    },
                    {
                        name: "Claimed",
                    },
                ],
            },
        },
        {
            name: "PriceRule",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "None",
                    },
                    {
                        name: "And",
                    },
                    {
                        name: "Or",
                    },
                    {
                        name: "BondingLinear",
                        fields: [
                            {
                                name: "initial",
                                type: "u64",
                            },
                            {
                                name: "rate",
                                type: "u64",
                            },
                            {
                                name: "index",
                                type: "u8",
                            },
                            {
                                name: "max",
                                type: "u32",
                            },
                            {
                                name: "min",
                                type: "u16",
                            },
                        ],
                    },
                ],
            },
        },
        {
            name: "TimeRangeType",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "BetweenHours",
                    },
                    {
                        name: "BetweenDays",
                    },
                    {
                        name: "BetweenHoursNegate",
                    },
                ],
            },
        },
        {
            name: "UnlocksAfter",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "MintingOut",
                    },
                    {
                        name: "Supply",
                        fields: [
                            {
                                name: "limit",
                                type: "u32",
                            },
                        ],
                    },
                    {
                        name: "Hours",
                        fields: [
                            {
                                name: "hours",
                                type: "u16",
                            },
                        ],
                    },
                ],
            },
        },
        {
            name: "ActionAfter",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "MintingOut",
                    },
                    {
                        name: "Supply",
                        fields: [
                            {
                                name: "limit",
                                type: "u32",
                            },
                        ],
                    },
                    {
                        name: "Hours",
                        fields: [
                            {
                                name: "hours",
                                type: "u16",
                            },
                        ],
                    },
                    {
                        name: "SellingOut",
                    },
                ],
            },
        },
        {
            name: "Rule",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "UnlocksAfter",
                        fields: [
                            {
                                name: "rule",
                                type: {
                                    defined: "ActionAfter",
                                },
                            },
                        ],
                    },
                    {
                        name: "UnwrapsAfter",
                        fields: [
                            {
                                name: "rule",
                                type: {
                                    defined: "ActionAfter",
                                },
                            },
                        ],
                    },
                    {
                        name: "WrappedSource",
                        fields: [
                            {
                                name: "rule",
                                type: {
                                    defined: "WrappedSource",
                                },
                            },
                        ],
                    },
                ],
            },
        },
        {
            name: "AuthorityGateTypes",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "IPGate",
                    },
                    {
                        name: "BiometricsGate",
                    },
                ],
            },
        },
        {
            name: "GeneralStore",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "None",
                    },
                ],
            },
        },
        {
            name: "PoolType",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "None",
                    },
                    {
                        name: "Token",
                    },
                ],
            },
        },
        {
            name: "PoolState",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "Available",
                    },
                    {
                        name: "Closed",
                    },
                ],
            },
        },
        {
            name: "PoolAccess",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "Cpi",
                    },
                    {
                        name: "Public",
                    },
                ],
            },
        },
        {
            name: "ExtraParameter",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "None",
                    },
                    {
                        name: "Revealer",
                        fields: [
                            {
                                name: "random",
                                type: "u16",
                            },
                        ],
                    },
                ],
            },
        },
        {
            name: "AccountClass",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "HolderV1",
                    },
                    {
                        name: "StoreV1",
                    },
                    {
                        name: "SingleV1",
                    },
                    {
                        name: "PackV1",
                    },
                    {
                        name: "CardV1",
                    },
                    {
                        name: "PackReceiptV1",
                    },
                    {
                        name: "PackContentV1",
                    },
                    {
                        name: "PackOpenHolderV1",
                    },
                    {
                        name: "BuyTrackV1",
                    },
                    {
                        name: "SingleArchiveV1",
                    },
                    {
                        name: "PackArchiveV1",
                    },
                    {
                        name: "None",
                    },
                    {
                        name: "CreatorRegistryV1",
                    },
                    {
                        name: "CollectorGlobalRegistryV1",
                    },
                    {
                        name: "CollectorArtistRegistryV1",
                    },
                    {
                        name: "PackTraitsV1",
                    },
                    {
                        name: "PackUploadsV1",
                    },
                    {
                        name: "ZeroOpenHolderV1",
                    },
                    {
                        name: "BurnDepositV1",
                    },
                    {
                        name: "GlobalBurnTrackV1",
                    },
                    {
                        name: "ArtistBurnTrackV1",
                    },
                    {
                        name: "SecureHolderV1",
                    },
                    {
                        name: "RevealerForMeV1",
                    },
                    {
                        name: "ThreeIdV1",
                    },
                    {
                        name: "DonationRegistryV1",
                    },
                    {
                        name: "PoolVaultV1",
                    },
                    {
                        name: "GenericUserV1",
                    },
                    {
                        name: "TokenManagerV1",
                    },
                ],
            },
        },
        {
            name: "GlobalState",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "HiddenBySystem",
                    },
                    {
                        name: "Public",
                    },
                    {
                        name: "HiddenByUser",
                    },
                    {
                        name: "FlaggedPirate",
                    },
                ],
            },
        },
        {
            name: "TokenType",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "Basic",
                    },
                    {
                        name: "OnlyUp",
                    },
                ],
            },
        },
        {
            name: "TokenState",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "New",
                    },
                    {
                        name: "Active",
                    },
                ],
            },
        },
        {
            name: "BurnType",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "None",
                    },
                    {
                        name: "InTX",
                    },
                    {
                        name: "Progressed",
                    },
                ],
            },
        },
        {
            name: "PaymentClass",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "PaymentV1",
                    },
                    {
                        name: "BurnPaymentV1",
                    },
                    {
                        name: "GatePaymentV1",
                    },
                ],
            },
        },
        {
            name: "ItemClass",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "Single",
                    },
                    {
                        name: "Pack",
                    },
                ],
            },
        },
        {
            name: "CardClass",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "Normal",
                    },
                ],
            },
        },
        {
            name: "TokenProgramVersion",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "Original",
                    },
                    {
                        name: "Token2022",
                    },
                ],
            },
        },
        {
            name: "TokenStandard",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "NonFungible",
                    },
                    {
                        name: "FungibleAsset",
                    },
                    {
                        name: "Fungible",
                    },
                    {
                        name: "NonFungibleEdition",
                    },
                ],
            },
        },
        {
            name: "UseMethod",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "Burn",
                    },
                    {
                        name: "Multiple",
                    },
                    {
                        name: "Single",
                    },
                ],
            },
        },
    ],
    metadata: {
        address: "HgtiJuEcdN6bN6WyYpamL3QKpyMcF8g8FxutDQNB96J9",
    },
};
//# sourceMappingURL=idl.js.map