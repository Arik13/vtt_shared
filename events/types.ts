import { Directory } from '../Directories/Directory';
/*
    The list of socket event types
*/

import {Asset} from "../Assets/Asset"

export namespace EVENT_TYPE {
    export type EVENT_TYPE = {};
    export interface JOIN extends EVENT_TYPE {
        campaignID: string;
        userID: string;
    }

    export interface LOAD_CAMPAIGN extends EVENT_TYPE {
        syncGroup: Asset.AssetSyncKeys
        // imageIDs: string[];
        // locationKeys: Asset.LocationKey[];
    }
    // export interface DOWNLOAD_CAMPAIGN extends EVENT_TYPE {
    //     // imageIDs: string[];
    //     // locationIDs: string[];
    //     // tokenIDs: string[];
    // }

    // IMAGES //
    export interface UPLOAD_IMAGE extends EVENT_TYPE {
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

    export interface DOWNLOAD_IMAGE extends EVENT_TYPE {
        id: string;
        name: string;
        fileType: string;
        file: ArrayBuffer;
        //
        directory: Directory;
        parentID: string;
    }

    // LOCATIONS //
    export interface CREATE_LOCATION extends EVENT_TYPE {
        location: Asset.LocationData;
    }
    export interface DOWNLOAD_LOCATION extends EVENT_TYPE {
        location: Asset.LocationData
    }
    export interface LOCATION_DOWNLOADED extends EVENT_TYPE {
        locationKeyValue: Asset.LocationKeyValue
        // location: Asset.LocationData
    }


    export interface LOCATION_UPDATED_NEW_TOKEN extends EVENT_TYPE {
        locationID: string;
        tokenKeyValue: Asset.TokenKeyValue;
    }

    export interface UPDATE_ACTIVE_LOCATION extends EVENT_TYPE {
        locationID: string;
    }
    export interface ACTIVE_LOCATION_UPDATED extends EVENT_TYPE {
        locationID: string;
    }


    export interface DELETE_LOCATION extends EVENT_TYPE {
        locationID: string
    }
    export interface LOCATION_DELETED extends EVENT_TYPE {
        locationID: string
    }



    // TOKENS //
    export interface CREATE_TOKEN extends EVENT_TYPE {
        locationID: string;
        token: Asset.TokenData
    }
    export interface DELETE_TOKEN extends EVENT_TYPE {
        tokenID: string;
    }
    export interface TOKEN_DELETED extends EVENT_TYPE {
        tokenID: string;
    }

    // SCRIPT //
    export interface CREATE_SCRIPT extends EVENT_TYPE {
        fileName: string;
        directoryID: string;
    }
    export interface UPDATE_SCRIPT extends EVENT_TYPE {
        id: string;
        name: string;
        script: string;
    }
    export interface DELETE_SCRIPT extends EVENT_TYPE {
        scriptID: string;
        directoryID: string;
    }

    export interface DOWNLOAD_SCRIPT extends EVENT_TYPE {
        scriptKeyValue: Asset.ScriptKeyValue;
        directory: Directory;
        parentID: string;
    }
    export interface SCRIPT_UPDATED extends EVENT_TYPE {
        id: string;
        script: string;
        directoryID: string;
    }
    export interface SCRIPT_DELETED extends EVENT_TYPE {
        scriptID: string;
        directoryID: string;
    }
}

// export {EVENT_TYPE};