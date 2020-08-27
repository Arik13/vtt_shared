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
        imageIDs: string[];
    }

    // IMAGES //
    export interface UPLOAD_IMAGE extends EVENT_TYPE {
        campaignID: string;
        name: string;
        fileBuffer: ArrayBuffer;
    }

    export interface DELETE_IMAGE extends EVENT_TYPE {
        imageID: string;
    }

    export interface IMAGE_DELETED extends EVENT_TYPE {
        imageID: string;
    }

    export interface DOWNLOAD_IMAGE extends EVENT_TYPE {
        id: string;
        name: string;
        file: ArrayBuffer;
    }

    // LOCATIONS //
    export interface CREATE_LOCATION extends EVENT_TYPE {
        location: Asset.LocationData
    }
    export interface LOCATION_DELETED extends EVENT_TYPE {
        locationID: string
    }
    export interface DELETE_LOCATION extends EVENT_TYPE {
        locationID: string
    }

    export interface DOWNLOAD_LOCATION extends EVENT_TYPE {
        location: Asset.LocationData
    }

    // TOKENS //
    export interface CREATE_TOKEN extends EVENT_TYPE {
        imageID: string;
        label: string;
        x: number;
        y: number;
    }
}

// export {EVENT_TYPE};