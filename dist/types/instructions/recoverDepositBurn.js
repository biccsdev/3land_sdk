import { TransactionInstruction } from "@solana/web3.js"; // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"; // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId";
export const layout = borsh.struct([
    types.RecoverDeposit.layout("deposit"),
    borsh.u8("burn"),
]);
export function recoverDepositBurn(args, accounts, programId = PROGRAM_ID) {
    const keys = [
        { pubkey: accounts.burnDeposit, isSigner: false, isWritable: true },
        { pubkey: accounts.artistBurnTrack, isSigner: false, isWritable: true },
        { pubkey: accounts.globalBurnTrack, isSigner: false, isWritable: true },
        { pubkey: accounts.itemAccount, isSigner: false, isWritable: false },
        { pubkey: accounts.packAccount, isSigner: false, isWritable: false },
        { pubkey: accounts.treeAuthority, isSigner: false, isWritable: true },
        { pubkey: accounts.merkleTree, isSigner: false, isWritable: true },
        { pubkey: accounts.fromAta, isSigner: false, isWritable: true },
        { pubkey: accounts.toAta, isSigner: false, isWritable: true },
        { pubkey: accounts.recoverTo, isSigner: false, isWritable: true },
        { pubkey: accounts.storeAccount, isSigner: false, isWritable: true },
        { pubkey: accounts.token, isSigner: false, isWritable: true },
        { pubkey: accounts.payer, isSigner: true, isWritable: true },
        { pubkey: accounts.tokenProgram, isSigner: false, isWritable: false },
        { pubkey: accounts.bubblegumProgram, isSigner: false, isWritable: false },
        { pubkey: accounts.logWrapper, isSigner: false, isWritable: false },
        { pubkey: accounts.compressionProgram, isSigner: false, isWritable: false },
        { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    ];
    const identifier = Buffer.from([0, 193, 58, 0, 59, 165, 12, 100]);
    const buffer = Buffer.alloc(1000);
    const len = layout.encode({
        deposit: types.RecoverDeposit.toEncodable(args.deposit),
        burn: args.burn,
    }, buffer);
    const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len);
    const ix = new TransactionInstruction({ keys, programId, data });
    return ix;
}