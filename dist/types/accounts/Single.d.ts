import { PublicKey, Connection } from "@solana/web3.js";
import BN from "bn.js";
import * as types from "../types";
export interface SingleFields {
    class: types.AccountClassKind;
    globalState: types.GlobalStateKind;
    holder: PublicKey;
    creator: PublicKey;
    dates: types.IndexDatesFields;
    category: types.CategoryFields;
    superCategory: types.SuperCategoryFields;
    eventCategory: number;
    trackType: types.TrackRegistryKind;
    mainCurrencyHash: BN;
    track: types.ItemTrackFields;
    popularity: types.PopularityFields;
    filtering: types.FilterFields;
    page: BN;
    manager: PublicKey;
    isServerless: number;
    availableOption: number;
    hasWrappedTokens: number;
    burntPieces: number;
    flag: Array<number>;
    item: types.ItemFields;
    saleConfig: types.SaleConfigFields;
    identifier: BN;
    hash: BN;
    hashTraits: BN;
    volume: Array<types.FakeVolumeTrackFields>;
    extra: Array<number>;
}
export interface SingleJSON {
    class: types.AccountClassJSON;
    globalState: types.GlobalStateJSON;
    holder: string;
    creator: string;
    dates: types.IndexDatesJSON;
    category: types.CategoryJSON;
    superCategory: types.SuperCategoryJSON;
    eventCategory: number;
    trackType: types.TrackRegistryJSON;
    mainCurrencyHash: string;
    track: types.ItemTrackJSON;
    popularity: types.PopularityJSON;
    filtering: types.FilterJSON;
    page: string;
    manager: string;
    isServerless: number;
    availableOption: number;
    hasWrappedTokens: number;
    burntPieces: number;
    flag: Array<number>;
    item: types.ItemJSON;
    saleConfig: types.SaleConfigJSON;
    identifier: string;
    hash: string;
    hashTraits: string;
    volume: Array<types.FakeVolumeTrackJSON>;
    extra: Array<number>;
}
export declare class Single {
    readonly class: types.AccountClassKind;
    readonly globalState: types.GlobalStateKind;
    readonly holder: PublicKey;
    readonly creator: PublicKey;
    readonly dates: types.IndexDates;
    readonly category: types.Category;
    readonly superCategory: types.SuperCategory;
    readonly eventCategory: number;
    readonly trackType: types.TrackRegistryKind;
    readonly mainCurrencyHash: BN;
    readonly track: types.ItemTrack;
    readonly popularity: types.Popularity;
    readonly filtering: types.Filter;
    readonly page: BN;
    readonly manager: PublicKey;
    readonly isServerless: number;
    readonly availableOption: number;
    readonly hasWrappedTokens: number;
    readonly burntPieces: number;
    readonly flag: Array<number>;
    readonly item: types.Item;
    readonly saleConfig: types.SaleConfig;
    readonly identifier: BN;
    readonly hash: BN;
    readonly hashTraits: BN;
    readonly volume: Array<types.FakeVolumeTrack>;
    readonly extra: Array<number>;
    static readonly discriminator: Buffer;
    static readonly layout: any;
    constructor(fields: SingleFields);
    static fetch(c: Connection, address: PublicKey, programId?: PublicKey): Promise<Single | null>;
    static fetchMultiple(c: Connection, addresses: PublicKey[], programId?: PublicKey): Promise<Array<Single | null>>;
    static decode(data: Buffer): Single;
    toJSON(): SingleJSON;
    static fromJSON(obj: SingleJSON): Single;
}