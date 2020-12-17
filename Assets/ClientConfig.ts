import * as Asset from "./Asset";
import {mongoose} from "../../vtt_server/exports";

export namespace ClientConfig {
    export interface Data extends Asset.Asset {
        createCharacter: ViewBinding;
    }
    export const Schema = {
        createCharacter: {actionTarget: String, dcID: String},
    }
    export interface KeyValue {
        key: Asset.Key;
        value: Data;
    }
    export interface ViewBinding {
        actionTarget: string;
        dcID: string;
    }
}
