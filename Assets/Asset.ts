/*
    This file contains the Type information for the Assets contained in the app.
*/

import { Directory } from "../Directories/Directory";

export namespace Asset {
    export interface Asset {
        id?: string;
        timestamp?: string,
    }

    // Images
    export interface ImageInfo extends Asset {
        name: string;
        fileType: string;
        fileBuffer?: ArrayBuffer;
    }

    // Locations
    export interface LocationModel extends Asset {
        ranks: number;
        files: number;
        tileWidth: number;
        tileLength: number;
    }
    export interface LocationData extends Asset {
        name: string;
        mapImageID: string;
        model: LocationModel;
        tokenIDs?: string[],
    }

    // Tokens
    export interface TokenModel extends Asset {
        position: {x: number, z: number};
        dimensions: {width: number, length: number};
    }
    export interface TokenData extends Asset {
        name: string;
        imageID: string;
        model: TokenModel;
    }
    export interface TokenKey {
        tokenID: string;
        timestamp: string;
    }
    export interface TokenKeyValue {
        key: TokenKey,
        value: TokenData,
    }


    export interface LocationKey {
        locationID: string;
        timestamp: string;
    }
    export interface LocationKeyValue {
        key: LocationKey,
        value: LocationData,
    }
    export interface AssetSyncKeys extends Asset {
        imageKeys: string[];
        locationKeys: LocationKey[];
        tokenKeys: TokenKey[];
    }
    export interface AssetSyncGroup extends Asset {
        imageData: {
            toAdd: ImageInfo[],
            toRemove: string[],
        }
        locationData: {
            toAdd: LocationKeyValue[],
            toRemove: LocationKey[],
        }
        tokenData: {
            toAdd: TokenKeyValue[],
            toRemove: TokenKey[],
        }
        campaignData: CampaignData,
        directory: Directory
        // directories: {
        //     imageDirectory: Directory,
        //     locationDirectory: Directory,
        // }
    }

    export interface CampaignData extends Asset {
        campaignID: string;
        name: string;
        activeLocationID: string;
    }
}
