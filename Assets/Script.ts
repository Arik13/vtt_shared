import * as Asset from "./Asset";
import {mongoose} from "../../vtt_server/exports";

export namespace Script {
    // Scripts
    export interface Data extends Asset.Asset {
        name: string;
        script: string;
        type: "ACTION" | "MODIFICATION";
        isActive: boolean;
    }
    export const Schema = {
        name: String,
        script: String,
        type: String,
        isActive: Boolean,
    }
    export interface KeyValue {
        key: Asset.Key;
        value: Data;
    }
}