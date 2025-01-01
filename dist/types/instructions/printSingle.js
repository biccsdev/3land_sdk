import { TransactionInstruction } from "@solana/web3.js"; // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"; // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId";
export const layout = borsh.struct([
    borsh.option(types.CurrencyArtistProof.layout(), "proof"),
    borsh.u8("storeBump"),
    borsh.u8("creatorAuthBump"),
    borsh.u8("itemBump"),
    borsh.u8("treeBump"),
    types.ExtraParameter.layout("extra"),
]);
export function printSingle(args, accounts, programId = PROGRAM_ID) {
    const keys = [
        { pubkey: accounts.owner, isSigner: false, isWritable: false },
        { pubkey: accounts.itemAccount, isSigner: false, isWritable: true },
        { pubkey: accounts.treeAuthority, isSigner: false, isWritable: true },
        { pubkey: accounts.storeAccount, isSigner: false, isWritable: true },
        { pubkey: accounts.creatorAuthority, isSigner: false, isWritable: false },
        { pubkey: accounts.paymentAccount, isSigner: false, isWritable: true },
        { pubkey: accounts.merkleTree, isSigner: false, isWritable: true },
        { pubkey: accounts.merkleManager, isSigner: false, isWritable: true },
        {
            pubkey: accounts.collectionAuthorityRecordPda,
            isSigner: false,
            isWritable: false,
        },
        { pubkey: accounts.editionAccount, isSigner: false, isWritable: false },
        { pubkey: accounts.collectionMetadata, isSigner: false, isWritable: true },
        { pubkey: accounts.collectionMint, isSigner: false, isWritable: false },
        { pubkey: accounts.bubblegumSigner, isSigner: false, isWritable: false },
        { pubkey: accounts.buytrackAccount, isSigner: false, isWritable: true },
        { pubkey: accounts.revealForMe, isSigner: false, isWritable: true },
        { pubkey: accounts.payer, isSigner: true, isWritable: true },
        { pubkey: accounts.logWrapper, isSigner: false, isWritable: false },
        { pubkey: accounts.bubblegumProgram, isSigner: false, isWritable: false },
        { pubkey: accounts.compressionProgram, isSigner: false, isWritable: false },
        {
            pubkey: accounts.tokenMetadataProgram,
            isSigner: false,
            isWritable: false,
        },
        { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    ];
    const identifier = Buffer.from([105, 204, 23, 32, 170, 121, 225, 133]);
    const buffer = Buffer.alloc(1000);
    const len = layout.encode({
        proof: (args.proof && types.CurrencyArtistProof.toEncodable(args.proof)) ||
            null,
        storeBump: args.storeBump,
        creatorAuthBump: args.creatorAuthBump,
        itemBump: args.itemBump,
        treeBump: args.treeBump,
        extra: args.extra.toEncodable(),
    }, buffer);
    const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len);
    const ix = new TransactionInstruction({ keys, programId, data });
    return ix;
}