export interface SeedFields {
    seed: Uint8Array;
}
export interface SeedJSON {
    seed: Array<number>;
}
export declare class Seed {
    readonly seed: Uint8Array;
    constructor(fields: SeedFields);
    static layout(property?: string): any;
    static fromDecoded(obj: any): Seed;
    static toEncodable(fields: SeedFields): {
        seed: Buffer;
    };
    toJSON(): SeedJSON;
    static fromJSON(obj: SeedJSON): Seed;
    toEncodable(): {
        seed: Buffer;
    };
}