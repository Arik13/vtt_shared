/*
    The list of socket event names
*/

export enum EVENT_NAME {
    JOIN = "Join",
    LOAD_CAMPAIGN = "LoadCampaign",

    // IMAGES //
    // To server
    UPLOAD_IMAGE = "UploadImage",
    DELETE_IMAGE = "DeleteImage",

    // From server
    IMAGE_DOWNLOADED = "ImageDownloaded",
    IMAGE_DELETED = "ImageDeleted",


    // LOCATIONS //
    // To server
    CREATE_LOCATION = "CreateLocation",
    DELETE_LOCATION = "DeleteLocation",

    // To Client
    LOCATION_DOWNLOADED = "LocationDownloaded",
    LOCATION_DELETED = "LocationDeleted",

    // TOKENS //
    // To server
    CREATE_TOKEN = "CreateToken",
}