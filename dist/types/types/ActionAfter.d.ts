import * as types from "../types";
import * as borsh from "@coral-xyz/borsh";
export interface MintingOutJSON {
    kind: "MintingOut";
}
export declare class MintingOut {
    static readonly discriminator = 0;
    static readonly kind = "MintingOut";
    readonly discriminator = 0;
    readonly kind = "MintingOut";
    toJSON(): MintingOutJSON;
    toEncodable(): {
        MintingOut: {};
    };
}
export type SupplyFields = {
    limit: number;
};
export type SupplyValue = {
    limit: number;
};
export interface SupplyJSON {
    kind: "Supply";
    value: {
        limit: number;
    };
}
export declare class Supply {
    static readonly discriminator = 1;
    static readonly kind = "Supply";
    readonly discriminator = 1;
    readonly kind = "Supply";
    readonly value: SupplyValue;
    constructor(value: SupplyFields);
    toJSON(): SupplyJSON;
    toEncodable(): {
        Supply: {
            limit: number;
        };
    };
}
export type HoursFields = {
    hours: number;
};
export type HoursValue = {
    hours: number;
};
export interface HoursJSON {
    kind: "Hours";
    value: {
        hours: number;
    };
}
export declare class Hours {
    static readonly discriminator = 2;
    static readonly kind = "Hours";
    readonly discriminator = 2;
    readonly kind = "Hours";
    readonly value: HoursValue;
    constructor(value: HoursFields);
    toJSON(): HoursJSON;
    toEncodable(): {
        Hours: {
            hours: number;
        };
    };
}
export interface SellingOutJSON {
    kind: "SellingOut";
}
export declare class SellingOut {
    static readonly discriminator = 3;
    static readonly kind = "SellingOut";
    readonly discriminator = 3;
    readonly kind = "SellingOut";
    toJSON(): SellingOutJSON;
    toEncodable(): {
        SellingOut: {};
    };
}
export declare function fromDecoded(obj: any): types.ActionAfterKind;
export declare function fromJSON(obj: types.ActionAfterJSON): types.ActionAfterKind;
export declare function layout(property?: string): borsh.EnumLayout<unknown>;
//# sourceMappingURL=ActionAfter.d.ts.map