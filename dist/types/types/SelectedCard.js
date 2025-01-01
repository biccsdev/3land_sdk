import * as borsh from "@coral-xyz/borsh";
export class SelectedCard {
    constructor(fields) {
        this.id = fields.id;
        this.edition = fields.edition;
    }
    static layout(property) {
        return borsh.struct([borsh.u16("id"), borsh.u32("edition")], property);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromDecoded(obj) {
        return new SelectedCard({
            id: obj.id,
            edition: obj.edition,
        });
    }
    static toEncodable(fields) {
        return {
            id: fields.id,
            edition: fields.edition,
        };
    }
    toJSON() {
        return {
            id: this.id,
            edition: this.edition,
        };
    }
    static fromJSON(obj) {
        return new SelectedCard({
            id: obj.id,
            edition: obj.edition,
        });
    }
    toEncodable() {
        return SelectedCard.toEncodable(this);
    }
}