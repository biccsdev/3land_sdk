import * as borsh from "@coral-xyz/borsh";
export class Earnings {
    constructor(fields) { }
    static layout(property) {
        return borsh.struct([], property);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromDecoded(obj) {
        return new Earnings({});
    }
    static toEncodable(fields) {
        return {};
    }
    toJSON() {
        return {};
    }
    static fromJSON(obj) {
        return new Earnings({});
    }
    toEncodable() {
        return Earnings.toEncodable(this);
    }
}