import * as Asset from "./Asset";
import {mongoose} from "../../vtt_server/exports";

export namespace Roll {
    export interface Data extends Asset.Asset {

    }
    export const Schema = {

    }
    export interface KeyValue {
        key: Asset.Key;
        value: Data;
    }
}