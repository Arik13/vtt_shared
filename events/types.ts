export namespace EVENT_TYPE {
    export type EVENT_TYPE = {};
    export interface JOIN extends EVENT_TYPE {
        campaignID: string;
        userID: string;
    }
    export interface UPLOAD_IMAGE extends EVENT_TYPE {
        campaignID: string;
        name: string;
        file: ArrayBuffer;
    }
    export interface LOAD_CAMPAIGN extends EVENT_TYPE {
        imageIDs: string[];
    }
    export interface CREATE_TOKEN extends EVENT_TYPE {
        imageID: string;
        label: string;
        x: number;
        y: number;
    }
    export interface CREATE_LOCATION extends EVENT_TYPE {
        name: string;
        mapImageID: string;
        files: number;
        ranks: number;
        tileLength: number;
        tileWidth: number;
    }
    export interface DOWNLOAD_IMAGE extends EVENT_TYPE {
        id: string;
        name: string;
        file: ArrayBuffer;
    }
}

// export {EVENT_TYPE};