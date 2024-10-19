import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface CollectorRegistryFields {
  class: types.AccountClassKind
  storeHash: BN
  creator: PublicKey
  holder: PublicKey
  currency: PublicKey
  date: types.IndexDateFields
  filters: Array<number>
  track: types.CollectTrackFields
}

export interface CollectorRegistryJSON {
  class: types.AccountClassJSON
  storeHash: string
  creator: string
  holder: string
  currency: string
  date: types.IndexDateJSON
  filters: Array<number>
  track: types.CollectTrackJSON
}

export class CollectorRegistry {
  readonly class: types.AccountClassKind
  readonly storeHash: BN
  readonly creator: PublicKey
  readonly holder: PublicKey
  readonly currency: PublicKey
  readonly date: types.IndexDate
  readonly filters: Array<number>
  readonly track: types.CollectTrack

  static readonly discriminator = Buffer.from([
    25, 164, 62, 184, 54, 145, 8, 211,
  ])

  static readonly layout = borsh.struct([
    types.AccountClass.layout("class"),
    borsh.u64("storeHash"),
    borsh.publicKey("creator"),
    borsh.publicKey("holder"),
    borsh.publicKey("currency"),
    types.IndexDate.layout("date"),
    borsh.array(borsh.u8(), 4, "filters"),
    types.CollectTrack.layout("track"),
  ])

  constructor(fields: CollectorRegistryFields) {
    this.class = fields.class
    this.storeHash = fields.storeHash
    this.creator = fields.creator
    this.holder = fields.holder
    this.currency = fields.currency
    this.date = new types.IndexDate({ ...fields.date })
    this.filters = fields.filters
    this.track = new types.CollectTrack({ ...fields.track })
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<CollectorRegistry | null> {
    const info = await c.getAccountInfo(address)

    if (info === null) {
      return null
    }
    if (!info.owner.equals(programId)) {
      throw new Error("account doesn't belong to this program")
    }

    return this.decode(info.data)
  }

  static async fetchMultiple(
    c: Connection,
    addresses: PublicKey[],
    programId: PublicKey = PROGRAM_ID
  ): Promise<Array<CollectorRegistry | null>> {
    const infos = await c.getMultipleAccountsInfo(addresses)

    return infos.map((info) => {
      if (info === null) {
        return null
      }
      if (!info.owner.equals(programId)) {
        throw new Error("account doesn't belong to this program")
      }

      return this.decode(info.data)
    })
  }

  static decode(data: Buffer): CollectorRegistry {
    if (!data.slice(0, 8).equals(CollectorRegistry.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = CollectorRegistry.layout.decode(data.slice(8))

    return new CollectorRegistry({
      class: types.AccountClass.fromDecoded(dec.class),
      storeHash: dec.storeHash,
      creator: dec.creator,
      holder: dec.holder,
      currency: dec.currency,
      date: types.IndexDate.fromDecoded(dec.date),
      filters: dec.filters,
      track: types.CollectTrack.fromDecoded(dec.track),
    })
  }

  toJSON(): CollectorRegistryJSON {
    return {
      class: this.class.toJSON(),
      storeHash: this.storeHash.toString(),
      creator: this.creator.toString(),
      holder: this.holder.toString(),
      currency: this.currency.toString(),
      date: this.date.toJSON(),
      filters: this.filters,
      track: this.track.toJSON(),
    }
  }

  static fromJSON(obj: CollectorRegistryJSON): CollectorRegistry {
    return new CollectorRegistry({
      class: types.AccountClass.fromJSON(obj.class),
      storeHash: new BN(obj.storeHash),
      creator: new PublicKey(obj.creator),
      holder: new PublicKey(obj.holder),
      currency: new PublicKey(obj.currency),
      date: types.IndexDate.fromJSON(obj.date),
      filters: obj.filters,
      track: types.CollectTrack.fromJSON(obj.track),
    })
  }
}