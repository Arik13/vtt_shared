import * as Asset from "./Asset";

export namespace Token {
    export interface Data extends Asset.Asset {
        name: string;
        imageID: string;
        tokenModel: Model;
    }
    export interface Model {
        position: {x: number, z: number};
        dimensions: {width: number, length: number};
    }
    export const Schema = {
        name: String,
        imageID: String,
        tokenModel: {
            position: {x: Number, z: Number},
            dimensions: {width: Number, length: Number},
        },
    }
    export interface KeyValue {
        key: Asset.Key,
        value: Data,
    }
    // export interface Data extends Asset.Asset {
    //     name: string;
    //     mapImageID: string;
    //     tokenIDs: string[],
    //     locationModel: Model,
    // }
    // export interface Model {
    //     ranks: number;
    //     files: number;
    //     tileWidth: number;
    //     tileLength: number;
    // }
    // export const Schema = {
    //     name: String,
    //     mapImageID: String,
    //     locationModel: {
    //         ranks: Number,
    //         files: Number,
    //         tileWidth: Number,
    //         tileLength: Number,
    //     },
    //     tokenIDs: [String],
    // }
    // export interface KeyValue {
    //     key: Asset.Key,
    //     value: Location.Data,
    // }
}