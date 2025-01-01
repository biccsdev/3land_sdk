export interface AllowedCurrencyArgsFields {
    id: number;
}
export interface AllowedCurrencyArgsJSON {
    id: number;
}
export declare class AllowedCurrencyArgs {
    readonly id: number;
    constructor(fields: AllowedCurrencyArgsFields);
    static layout(property?: string): any;
    static fromDecoded(obj: any): AllowedCurrencyArgs;
    static toEncodable(fields: AllowedCurrencyArgsFields): {
        id: number;
    };
    toJSON(): AllowedCurrencyArgsJSON;
    static fromJSON(obj: AllowedCurrencyArgsJSON): AllowedCurrencyArgs;
    toEncodable(): {
        id: number;
    };
}