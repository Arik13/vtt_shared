/*
    This file contains the Type information for the Assets contained in the app.
*/

export namespace Asset {
    export interface Asset {
        id?: string;
    }
    export interface ImageInfo extends Asset {
        // _id: string;
        name: string;
        fileType: string;
        fileBuffer?: ArrayBuffer;
    }

    export interface LocationModel extends Asset {
        ranks: number;
        files: number;
        tileWidth: number;
        tileLength: number;
    }
    export interface LocationData extends Asset {
        // locationID?: string;
        name: string;
        mapImageID: string;
        model: LocationModel;
    }

    export interface AssetSyncGroup extends Asset {
        imageData: {
            toAdd: ImageInfo[],
            toRemove: string[],
        }
        locationData: {
            toAdd: LocationData[],
            toRemove: string[],
        }
    }
}
