import * as Asset from "./Asset";
import {mongoose} from "../../vtt_server/exports";

export namespace ClientConfig {
    export interface Data extends Asset.Asset {
        createCharacter: ViewBinding;
        viewCharacter: ViewBinding;
        actionButtonGroup: ViewBinding;
    }
    export const Schema = {
        createCharacter: {actionTarget: String, dcID: String},
        viewCharacter: {actionTarget: String, dcID: String},
        actionButtonGroup: {actionTarget: String, dcID: String},
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
