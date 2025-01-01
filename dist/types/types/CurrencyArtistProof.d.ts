import BN from "bn.js";
export interface CurrencyArtistProofFields {
    proofHash: BN;
    amount: BN;
    currencyVerifier: BN;
    artistVerifier: BN;
}
export interface CurrencyArtistProofJSON {
    proofHash: string;
    amount: string;
    currencyVerifier: BN;
    artistVerifier: BN;
}
export declare class CurrencyArtistProof {
    readonly proofHash: BN;
    readonly amount: BN;
    readonly currencyVerifier: BN;
    readonly artistVerifier: BN;
    constructor(fields: CurrencyArtistProofFields);
    static layout(property?: string): any;
    static fromDecoded(obj: any): CurrencyArtistProof;
    static toEncodable(fields: CurrencyArtistProofFields): {
        proofHash: BN;
        amount: BN;
        currencyVerifier: BN;
        artistVerifier: BN;
    };
    toJSON(): CurrencyArtistProofJSON;
    static fromJSON(obj: CurrencyArtistProofJSON): CurrencyArtistProof;
    toEncodable(): {
        proofHash: BN;
        amount: BN;
        currencyVerifier: BN;
        artistVerifier: BN;
    };
}