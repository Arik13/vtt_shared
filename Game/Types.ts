import * as Asset from "@shared/Assets/Asset";
import {EVENT_TYPE} from "../Events/Events"

export namespace GAME_EVENT_TYPE {
    export interface GAME_EVENT_TYPE extends EVENT_TYPE.EVENT_TYPE {}
    export interface DO_ACTION extends GAME_EVENT_TYPE {
        name: string;
        args: any;
    }
    export interface ACTION_DONE extends GAME_EVENT_TYPE {
        sos: Asset.StateObject.Data[];
        out: any;
    }
}