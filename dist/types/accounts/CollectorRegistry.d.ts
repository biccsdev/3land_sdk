import { PublicKey, Connection } from "@solana/web3.js";
import BN from "bn.js";
import * as types from "../types";
export interface CollectorRegistryFields {
    class: types.AccountClassKind;
    storeHash: BN;
    creator: PublicKey;
    holder: PublicKey;
    currency: PublicKey;
    date: types.IndexDateFields;
    filters: Array<number>;
    track: types.CollectTrackFields;
}
export interface CollectorRegistryJSON {
    class: types.AccountClassJSON;
    storeHash: string;
    creator: string;
    holder: string;
    currency: string;
    date: types.IndexDateJSON;
    filters: Array<number>;
    track: types.CollectTrackJSON;
}
export declare class CollectorRegistry {
    readonly class: types.AccountClassKind;
    readonly storeHash: BN;
    readonly creator: PublicKey;
    readonly holder: PublicKey;
    readonly currency: PublicKey;
    readonly date: types.IndexDate;
    readonly filters: Array<number>;
    readonly track: types.CollectTrack;
    static readonly discriminator: Buffer;
    static readonly layout: any;
    constructor(fields: CollectorRegistryFields);
    static fetch(c: Connection, address: PublicKey, programId?: PublicKey): Promise<CollectorRegistry | null>;
    static fetchMultiple(c: Connection, addresses: PublicKey[], programId?: PublicKey): Promise<Array<CollectorRegistry | null>>;
    static decode(data: Buffer): CollectorRegistry;
    toJSON(): CollectorRegistryJSON;
    static fromJSON(obj: CollectorRegistryJSON): CollectorRegistry;
}
//# sourceMappingURL=CollectorRegistry.d.ts.map