import {EVENT_TYPE} from "../Events/Events"
import { Directory, DirectorySchema, ROOT_NAME } from "./Directory";

export namespace DIRECTORY_EVENT_TYPE {
    export interface DIRECTORY_EVENT_TYPE extends EVENT_TYPE.EVENT_TYPE {}
    export interface LOAD_DIRECTORIES extends DIRECTORY_EVENT_TYPE {

    }
    export interface DIRECTORIES_DOWNLOADED extends DIRECTORY_EVENT_TYPE {
        imageDirectory: Directory;
        locationDirectory: Directory;
    }
    export interface MOVE_DIRECTORY extends DIRECTORY_EVENT_TYPE {
        // rootDirectoryID: string;
        // rootName: ROOT_NAME,
        moveDirectoryID: string;
        targetDirectoryID: string;
    }
    export interface DIRECTORY_MOVED extends DIRECTORY_EVENT_TYPE {
        // rootName: ROOT_NAME;
        moveDirectoryID: string;
        targetDirectoryID: string;
    }
    export interface CREATE_DIRECTORY extends DIRECTORY_EVENT_TYPE {
        // rootName: ROOT_NAME,
        parentID: string;
        name: string;
        itemID?: string;
    }
    export interface DIRECTORY_CREATED extends DIRECTORY_EVENT_TYPE {
        // rootName: ROOT_NAME,
        directory: Directory,
        targetDirectoryID: string,
    }
}