import * as Asset from "./Asset";

export namespace Location {
    export interface Data extends Asset.Asset {
        name: string;
        mapImageID: string;
        tokenIDs: string[],
        locationModel: Model,
    }
    export interface Model {
        ranks: number;
        files: number;
        tileWidth: number;
        tileLength: number;
    }
    export const Schema = {
        name: String,
        mapImageID: String,
        locationModel: {
            ranks: Number,
            files: Number,
            tileWidth: Number,
            tileLength: Number,
        },
        tokenIDs: [String],
    }
    export interface KeyValue {
        key: Asset.Key,
        value: Location.Data,
    }
}