/*
    The list of socket event names
*/

export enum EVENT_NAME {
    //  //
    JOIN = "Join",
    LOAD_CAMPAIGN = "LoadCampaign",
    UPDATE_CLIENT_CONFIG = "UpdateClientConfig",
    CLIENT_CONFIG_UPDATED = "ClientConfigUpdated",

    // GAME //
    // To Server
    SEND_GAME_EVENT = "SendGameEvent",
    DO_ACTION = "DoAction",

    // To Client
    GAME_EVENT_RECEIVED = "GameEventReceived",

    // IMAGES //
    // To server
    CREATE_IMAGE = "CreateImage",
    DELETE_IMAGE = "DeleteImage",

    // From server
    IMAGE_CREATED = "ImageCreated",
    IMAGE_DELETED = "ImageDeleted",


    // LOCATIONS //
    // To server
    CREATE_LOCATION = "CreateLocation",
    DELETE_LOCATION = "DeleteLocation",
    UPDATE_ACTIVE_LOCATION = "UpdateActiveLocation",

    // To Client
    LOCATION_CREATED = "LocationCreated",
    LOCATION_DELETED = "LocationDeleted",
    ACTIVE_LOCATION_UPDATED = "ActiveLocationUpdated",

    // TOKENS //
    // To server
    CREATE_TOKEN = "CreateToken",
    UPDATE_TOKEN = "UpdateToken",
    DELETE_TOKEN = "DeleteToken",

    // To Client
    TOKEN_CREATED = "TokenCreated",
    TOKEN_UPDATED = "TokenUpdated",
    TOKEN_DELETED = "TokenDeleted",

    // SCRIPT //
    // To Server
    CREATE_SCRIPT = "CreateScript",
    UPDATE_SCRIPT = "UpdateScript",
    DELETE_SCRIPT = "DeleteScript",

    // To Client
    SCRIPT_CREATED = "DownloadScript",
    SCRIPT_UPDATED = "ScriptUpdated",
    SCRIPT_DELETED = "ScriptDeleted",

    // DYNAMIC COMPONENT //
    // To Server
    CREATE_DYNAMIC_COMPONENT = "CreateDynamicComponent",
    DELETE_DYNAMIC_COMPONENT = "DeleteDynamicComponent",
    UPDATE_DYNAMIC_COMPONENT = "UpdateDynamicComponent",

    // To Client
    DYNAMIC_COMPONENT_CREATED = "DynamicComponentCreated",
    DYNAMIC_COMPONENT_DELETED = "DynamicComponentDeleted",
    DYNAMIC_COMPONENT_UPDATED = "DynamicComponentUpdated",



    // STATE OBJECT //
    // To Server
    CREATE_STATE_OBJECT = "CreateStateObject",
    DELETE_STATE_OBJECT = "DeleteStateObject",
    UPDATE_STATE_OBJECT = "UpdateStateObject",

    // To Client
    STATE_OBJECT_CREATED = "StateObjectCreated",
    STATE_OBJECT_DELETED = "StateObjectDeleted",
    STATE_OBJECT_UPDATED = "StateObjectUpdated",
}