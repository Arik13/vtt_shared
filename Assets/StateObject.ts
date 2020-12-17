import * as Asset from "./Asset";
import {mongoose} from "../../vtt_server/exports";

export namespace StateObject {
    export interface Data extends Asset.Asset {
        stateObject: any;
    }
    export const Schema = {
        stateObject: mongoose.Schema.Types.Mixed,
    }
    export interface KeyValue {
        key: Asset.Key;
        value: Data;
    }
}