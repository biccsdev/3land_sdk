import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";
import * as types from "../types";
export interface GenericStoreFields {
    storeType: number;
    data: types.GenericValueKind;
}
export interface GenericStoreJSON {
    storeType: number;
    data: types.GenericValueJSON;
}
export declare class GenericStore {
    readonly storeType: number;
    readonly data: types.GenericValueKind;
    constructor(fields: GenericStoreFields);
    static layout(property?: string): any;
    static fromDecoded(obj: any): types.GenericStore;
    static toEncodable(fields: GenericStoreFields): {
        storeType: number;
        data: {
            None: {};
        } | {
            Key: {
                value: PublicKey;
            };
        } | {
            EightBytes: {
                value: BN;
            };
        };
    };
    toJSON(): GenericStoreJSON;
    static fromJSON(obj: GenericStoreJSON): GenericStore;
    toEncodable(): {
        storeType: number;
        data: {
            None: {};
        } | {
            Key: {
                value: PublicKey;
            };
        } | {
            EightBytes: {
                value: BN;
            };
        };
    };
}
//# sourceMappingURL=GenericStore.d.ts.map