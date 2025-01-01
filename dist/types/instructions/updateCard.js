import { TransactionInstruction } from "@solana/web3.js"; // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"; // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId";
export const layout = borsh.struct([
    borsh.option(borsh.u32(), "supply"),
    borsh.option(types.MetadataArgs.layout(), "metadata"),
    borsh.option(types.CardState.layout(), "state"),
]);
export function updateCard(args, accounts, programId = PROGRAM_ID) {
    const keys = [
        { pubkey: accounts.packAccount, isSigner: false, isWritable: true },
        { pubkey: accounts.cardAccount, isSigner: false, isWritable: true },
        { pubkey: accounts.packContent, isSigner: false, isWritable: true },
        { pubkey: accounts.creator, isSigner: true, isWritable: true },
        { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    ];
    const identifier = Buffer.from([216, 82, 240, 120, 78, 100, 66, 33]);
    const buffer = Buffer.alloc(1000);
    const len = layout.encode({
        supply: args.supply,
        metadata: (args.metadata && types.MetadataArgs.toEncodable(args.metadata)) ||
            null,
        state: (args.state && args.state.toEncodable()) || null,
    }, buffer);
    const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len);
    const ix = new TransactionInstruction({ keys, programId, data });
    return ix;
}