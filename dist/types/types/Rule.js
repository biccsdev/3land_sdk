import * as types from "../types"; // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh";
export class UnlocksAfter {
    constructor(value) {
        this.discriminator = 0;
        this.kind = "UnlocksAfter";
        this.value = {
            rule: value.rule,
        };
    }
    toJSON() {
        return {
            kind: "UnlocksAfter",
            value: {
                rule: this.value.rule.toJSON(),
            },
        };
    }
    toEncodable() {
        return {
            UnlocksAfter: {
                rule: this.value.rule.toEncodable(),
            },
        };
    }
}
UnlocksAfter.discriminator = 0;
UnlocksAfter.kind = "UnlocksAfter";
export class UnwrapsAfter {
    constructor(value) {
        this.discriminator = 1;
        this.kind = "UnwrapsAfter";
        this.value = {
            rule: value.rule,
        };
    }
    toJSON() {
        return {
            kind: "UnwrapsAfter",
            value: {
                rule: this.value.rule.toJSON(),
            },
        };
    }
    toEncodable() {
        return {
            UnwrapsAfter: {
                rule: this.value.rule.toEncodable(),
            },
        };
    }
}
UnwrapsAfter.discriminator = 1;
UnwrapsAfter.kind = "UnwrapsAfter";
export class WrappedSource {
    constructor(value) {
        this.discriminator = 2;
        this.kind = "WrappedSource";
        this.value = {
            rule: new types.WrappedSource(Object.assign({}, value.rule)),
        };
    }
    toJSON() {
        return {
            kind: "WrappedSource",
            value: {
                rule: this.value.rule.toJSON(),
            },
        };
    }
    toEncodable() {
        return {
            WrappedSource: {
                rule: types.WrappedSource.toEncodable(this.value.rule),
            },
        };
    }
}
WrappedSource.discriminator = 2;
WrappedSource.kind = "WrappedSource";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromDecoded(obj) {
    if (typeof obj !== "object") {
        throw new Error("Invalid enum object");
    }
    if ("UnlocksAfter" in obj) {
        const val = obj["UnlocksAfter"];
        return new UnlocksAfter({
            rule: types.ActionAfter.fromDecoded(val["rule"]),
        });
    }
    if ("UnwrapsAfter" in obj) {
        const val = obj["UnwrapsAfter"];
        return new UnwrapsAfter({
            rule: types.ActionAfter.fromDecoded(val["rule"]),
        });
    }
    if ("WrappedSource" in obj) {
        const val = obj["WrappedSource"];
        return new WrappedSource({
            rule: types.WrappedSource.fromDecoded(val["rule"]),
        });
    }
    throw new Error("Invalid enum object");
}
export function fromJSON(obj) {
    switch (obj.kind) {
        case "UnlocksAfter": {
            return new UnlocksAfter({
                rule: types.ActionAfter.fromJSON(obj.value.rule),
            });
        }
        case "UnwrapsAfter": {
            return new UnwrapsAfter({
                rule: types.ActionAfter.fromJSON(obj.value.rule),
            });
        }
        case "WrappedSource": {
            return new WrappedSource({
                rule: types.WrappedSource.fromJSON(obj.value.rule),
            });
        }
    }
}
export function layout(property) {
    const ret = borsh.rustEnum([
        borsh.struct([types.ActionAfter.layout("rule")], "UnlocksAfter"),
        borsh.struct([types.ActionAfter.layout("rule")], "UnwrapsAfter"),
        borsh.struct([types.WrappedSource.layout("rule")], "WrappedSource"),
    ]);
    if (property !== undefined) {
        return ret.replicate(property);
    }
    return ret;
}