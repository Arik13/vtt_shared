import * as Asset from "./Asset";
import {mongoose} from "../../vtt_server/exports";

export namespace DynamicComponent {
    export interface Data extends Asset.Asset {
        name: string;
        cd: any;
    }
    export const Schema = {
        name: String,
        cd: mongoose.Schema.Types.Mixed,
    }
    export interface KeyValue {
        key: Asset.Key;
        value: Data;
    }
}