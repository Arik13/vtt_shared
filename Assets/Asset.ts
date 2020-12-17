/*
    This file contains the Type information for the Assets contained in the app.
*/

import { Directory } from "../Directories/Directory";
import { ClientConfig } from "./ClientConfig";
import { Location } from "./Location";
import { Token } from "./Token";
import { DynamicComponent } from "./DynamicComponent";
import { Script } from "./Script";
import { StateObject } from "./StateObject";

export {
    Token,
    Script,
    Location,
    StateObject,
    DynamicComponent,
    ClientConfig,
}

export interface Asset {
    id?: string;
    timestamp?: string;
}
export interface Key {
    id: string;
    timestamp: string;
}

export interface SyncGroup extends Asset {
    imageData:      {toRemove: string[], toAdd: ImageInfo[]};
    locationData:   {toRemove: Key[], toAdd: Location.KeyValue[]};
    tokenData:      {toRemove: Key[], toAdd: Token.KeyValue[]};
    scriptData:     {toRemove: Key[], toAdd: Script.KeyValue[]};
    dcData:         {toRemove: Key[], toAdd: DynamicComponent.KeyValue[]};
    soData:         {toRemove: Key[], toAdd: StateObject.KeyValue[]};
    campaignData: CampaignData;
    clientConfig: ClientConfig.Data;
    directory: Directory;
}

export interface SyncKeys extends Asset {
    imageKeys: string[];
    locationKeys: Key[];
    tokenKeys: Key[];
    scriptKeys: Key[];
    dynamicComponentKeys: Key[];
    soKeys: Key[];
}

// Campaign
export interface CampaignData extends Asset {
    id: string;
    name: string;
    activeLocationID: string;
    // dynamicViewBindings: DynamicViewBindings;
}

// Images
export interface ImageInfo extends Asset {
    name: string;
    fileType: string;
    fileBuffer?: ArrayBuffer;
}


// State Object
