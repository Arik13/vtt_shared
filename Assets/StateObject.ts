import * as Asset from "./Asset";
import {mongoose} from "../../vtt_server/exports";

export type ModInfo = {name: string, args: any[]};
export type SoInfo = {id: string, mods: ModInfo[]};

export namespace StateObject {
    export interface Data extends Asset.Asset {
        mods: ModInfo[];
        // stateObject: any;
    }
    export const Schema = {
        mods: {
            type: [{name: String, args: [mongoose.Schema.Types.Mixed]}],
            default: [] as any[]
        },
        // stateObject: mongoose.Schema.Types.Mixed,
    }
    export interface KeyValue {
        key: Asset.Key;
        value: Data;
    }
}