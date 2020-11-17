"use strict";
/*
    The list of socket event names
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_NAME = void 0;
var EVENT_NAME;
(function (EVENT_NAME) {
    EVENT_NAME["JOIN"] = "Join";
    EVENT_NAME["LOAD_CAMPAIGN"] = "LoadCampaign";
    // IMAGES //
    // To server
    EVENT_NAME["UPLOAD_IMAGE"] = "UploadImage";
    EVENT_NAME["DELETE_IMAGE"] = "DeleteImage";
    // From server
    EVENT_NAME["IMAGE_DOWNLOADED"] = "ImageDownloaded";
    EVENT_NAME["IMAGE_DELETED"] = "ImageDeleted";
    // LOCATIONS //
    // To server
    EVENT_NAME["CREATE_LOCATION"] = "CreateLocation";
    EVENT_NAME["DELETE_LOCATION"] = "DeleteLocation";
    // To Client
    EVENT_NAME["LOCATION_DOWNLOADED"] = "LocationDownloaded";
    EVENT_NAME["LOCATION_DELETED"] = "LocationDeleted";
    EVENT_NAME["LOCATION_UPDATED_NEW_TOKEN"] = "LocationUpdatedNewToken";
    EVENT_NAME["ACTIVE_LOCATION_UPDATED"] = "ActiveLocationUpdated";
    EVENT_NAME["UPDATE_ACTIVE_LOCATION"] = "UpdateActiveLocation";
    // TOKENS //
    // To server
    EVENT_NAME["CREATE_TOKEN"] = "CreateToken";
    EVENT_NAME["DELETE_TOKEN"] = "DeleteToken";
    // To Client
    EVENT_NAME["TOKEN_DOWNLOADED"] = "TokenDownloaded";
    EVENT_NAME["TOKEN_DELETED"] = "TokenDeleted";
    // GAME //
    // To Server
    EVENT_NAME["SEND_GAME_EVENT"] = "SendGameEvent";
    EVENT_NAME["DO_ACTION"] = "DoAction";
    // To Client
    EVENT_NAME["GAME_EVENT_RECEIVED"] = "GameEventReceived";
    // SCRIPT //
    // To Server
    EVENT_NAME["CREATE_SCRIPT"] = "CreateScript";
    EVENT_NAME["UPDATE_SCRIPT"] = "UpdateScript";
    EVENT_NAME["DELETE_SCRIPT"] = "DeleteScript";
    // To Client
    EVENT_NAME["DOWNLOAD_SCRIPT"] = "DownloadScript";
    EVENT_NAME["SCRIPT_UPDATED"] = "ScriptUpdated";
    EVENT_NAME["SCRIPT_DELETED"] = "ScriptDeleted";
})(EVENT_NAME = exports.EVENT_NAME || (exports.EVENT_NAME = {}));
//# sourceMappingURL=Names.js.map