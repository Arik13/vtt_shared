import { Directory, DirectorySchema } from '../Directories/Directory';
/*
    The list of socket event types
*/

import * as Asset from "../Assets/Asset"

export namespace EVENT_TYPE {
    export type EVENT_TYPE = {};
    export interface JOIN extends EVENT_TYPE {
        campaignID: string;
        userID: string;
    }

    export interface LOAD_CAMPAIGN extends EVENT_TYPE {
        syncGroup: Asset.SyncKeys
    }
    export interface UPDATE_CLIENT_CONFIG extends EVENT_TYPE {
        clientConfig: Asset.ClientConfig.Data;
    }
    export interface CLIENT_CONFIG_UPDATED extends EVENT_TYPE {
        clientConfig: Asset.ClientConfig.Data;
    }

    // ASSET //
    export interface CREATE_ASSET extends EVENT_TYPE {
        asset: Asset.Asset;
        parentID: string;
    }
    export interface DELETE_ASSET extends EVENT_TYPE {
        assetID: string;
        directoryID: string;
    }

    export interface ASSET_CREATED extends EVENT_TYPE {
        keyValue: {
            key: Asset.Key;
            value: Asset.Asset;
        }
        directory: DirectorySchema;
        parentID: string;
    }
    export interface ASSET_DELETED extends EVENT_TYPE {
        assetID: string;
        directoryID: string;
    }

    // IMAGES //
    export interface CREATE_IMAGE extends EVENT_TYPE {
        campaignID: string;
        name: string;
        fileBuffer: ArrayBuffer;
        directoryID: string;
    }

    export interface DELETE_IMAGE extends EVENT_TYPE {
        imageID: string;
        directoryID: string;
    }

    export interface IMAGE_DELETED extends EVENT_TYPE {
        imageID: string;
        directoryID: string;
    }

    export interface IMAGE_CREATED extends EVENT_TYPE {
        id: string;
        name: string;
        fileType: string;
        file: ArrayBuffer;
        //
        directory: DirectorySchema;
        parentID: string;
    }

    // LOCATIONS //
    export interface CREATE_LOCATION extends EVENT_TYPE {
        location: Asset.Location.Data;
        parentID: string;
    }
    // export interface DOWNLOAD_LOCATION extends EVENT_TYPE {
    //     location: Asset.Location.Data
    // }
    export interface LOCATION_CREATED extends EVENT_TYPE {
        keyValue: Asset.Location.KeyValue;
        directory: DirectorySchema;
        parentID: string;
        // location: Asset.LocationData
    }
    export interface UPDATE_ACTIVE_LOCATION extends EVENT_TYPE {
        locationID: string;
    }
    export interface ACTIVE_LOCATION_UPDATED extends EVENT_TYPE {
        locationID: string;
    }


    export interface DELETE_LOCATION extends EVENT_TYPE {
        locationID: string;
        directoryID: string;
    }
    export interface LOCATION_DELETED extends EVENT_TYPE {
        locationID: string;
        directoryID: string;
    }



    // TOKENS //
    export interface CREATE_TOKEN extends EVENT_TYPE {
        locationID: string;
        token: Asset.Token.Data;
    }
    export interface UPDATE_TOKEN extends EVENT_TYPE {
        locationID: string;
        token: Asset.Token.Data;
    }
    export interface DELETE_TOKEN extends EVENT_TYPE {
        tokenID: string;
        locationID: string;
    }
    export interface TOKEN_CREATED extends EVENT_TYPE {
        locationID: string;
        keyValue: Asset.Token.KeyValue;
    }
    export interface TOKEN_DELETED extends EVENT_TYPE {
        tokenID: string;
        locationID: string;
    }
    export interface TOKEN_UPDATED extends EVENT_TYPE {
        // tokenID: string;
        locationID: string;
        token: Asset.Token.Data;
    }

    // SCRIPT //
    export interface CREATE_SCRIPT extends EVENT_TYPE {
        script: Asset.Script.Data;
        directoryID: string;
    }
    export interface UPDATE_SCRIPT extends EVENT_TYPE {
        script: Asset.Script.Data;
        directoryID: string;
    }
    export interface DELETE_SCRIPT extends EVENT_TYPE {
        scriptID: string;
        directoryID: string;
    }

    export interface SCRIPT_CREATED extends EVENT_TYPE {
        keyValue: Asset.Script.KeyValue;
        directory: DirectorySchema;
        parentID: string;
    }
    export interface SCRIPT_UPDATED extends EVENT_TYPE {
        script: Asset.Script.Data;
        directoryID: string;
    }
    export interface SCRIPT_DELETED extends EVENT_TYPE {
        scriptID: string;
        directoryID: string;
    }

    // DYNAMIC COMPONENT //
    export interface CREATE_DYNAMIC_COMPONENT extends EVENT_TYPE {
        dynamicComponent: Asset.DynamicComponent.Data;
        directoryID: string;
    }
    export interface UPDATE_DYNAMIC_COMPONENT extends EVENT_TYPE {
        dynamicComponent: Asset.DynamicComponent.Data;
        directoryID: string;
    }
    export interface DELETE_DYNAMIC_COMPONENT extends EVENT_TYPE {
        dcID: string;
        directoryID: string;
    }

    export interface DYNAMIC_COMPONENT_CREATED extends EVENT_TYPE {
        keyValue: Asset.DynamicComponent.KeyValue;
        directory: DirectorySchema;
        parentID: string;
    }
    export interface DYNAMIC_COMPONENT_UPDATED extends EVENT_TYPE {
        keyValue: Asset.DynamicComponent.KeyValue;
        // dynamicComponent: Asset.DynamicComponent.Data;
        directoryID: string;
    }
    export interface DYNAMIC_COMPONENT_DELETED extends EVENT_TYPE {
        dcID: string;
        directoryID: string;
    }


    // STATE OBJECT //
    export interface CREATE_STATE_OBJECT extends EVENT_TYPE {
        stateObject: Asset.StateObject.Data;
        directoryID: string;
    }
    export interface UPDATE_STATE_OBJECT extends EVENT_TYPE {
        stateObject: Asset.StateObject.Data;
        directoryID: string;
    }
    export interface DELETE_STATE_OBJECT extends EVENT_TYPE {
        soID: string;
        directoryID: string;
    }

    export interface STATE_OBJECT_CREATED extends EVENT_TYPE {
        keyValue: Asset.StateObject.KeyValue;
        directory: DirectorySchema;
        parentID: string;
    }
    export interface STATE_OBJECT_UPDATED extends EVENT_TYPE {
        stateObject: Asset.StateObject.Data;
        directoryID: string;
    }
    export interface STATE_OBJECT_DELETED extends EVENT_TYPE {
        soID: string;
        directoryID: string;
    }

    // ROLL //
    export interface CREATE_ROLL extends EVENT_TYPE {
        roll: Asset.Roll.Data;
    }
    export interface UPDATE_ROLL extends EVENT_TYPE {
        roll: Asset.Roll.Data;
    }
    export interface DELETE_ROLL extends EVENT_TYPE {
        id: string;
    }

    export interface ROLL_CREATED extends EVENT_TYPE {
        keyValue: Asset.Roll.KeyValue;
    }
    export interface ROLL_UPDATED extends EVENT_TYPE {
        roll: Asset.Roll.Data;
    }
    export interface ROLL_DELETED extends EVENT_TYPE {
        id: string;
    }
}