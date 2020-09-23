import {EVENT_TYPE} from "../Events/Events"
import { Chat } from "./Chat";


export namespace CHAT_EVENT_TYPE {
    export interface CHAT_EVENT_TYPE extends EVENT_TYPE.EVENT_TYPE {}
    export interface SEND_MESSAGE extends CHAT_EVENT_TYPE {
        content: string;
    }
    export interface MESSAGE_RECIEVED extends CHAT_EVENT_TYPE {
        message: Chat.Message
    }
    export interface LOAD_CHAT extends CHAT_EVENT_TYPE {

    }
}
