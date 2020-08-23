export namespace Asset {
    export type ImageInfo = {
        _id: string;
        name: string;
        fileType: string;
        fileBuffer?: ArrayBuffer;
    }

    export type LocationModel = {
        ranks: number;
        files: number;
        tileWidth: number;
        tileLength: number;
    }
    export type LocationData = {
        locationID: string;
        name: string;
        mapImageID: string;
        model: LocationModel;
    }

    export type AssetSyncGroup = {
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
