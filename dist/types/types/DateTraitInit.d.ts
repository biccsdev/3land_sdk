import BN from "bn.js";
export interface DateTraitInitFields {
    hash: BN;
    date: number;
}
export interface DateTraitInitJSON {
    hash: string;
    date: number;
}
export declare class DateTraitInit {
    readonly hash: BN;
    readonly date: number;
    constructor(fields: DateTraitInitFields);
    static layout(property?: string): any;
    static fromDecoded(obj: any): DateTraitInit;
    static toEncodable(fields: DateTraitInitFields): {
        hash: BN;
        date: number;
    };
    toJSON(): DateTraitInitJSON;
    static fromJSON(obj: DateTraitInitJSON): DateTraitInit;
    toEncodable(): {
        hash: BN;
        date: number;
    };
}