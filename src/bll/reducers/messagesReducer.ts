import {MessagesActionsType} from "bll/actions/messagesActions";
import {AppThunkType} from "bll/store";
import {AuthApi} from "api/auth-api/auth-api";

const messagesReducerState = {
    messages: []
}
type MessagesReducerType = {
    messages: string[]
}
export type MessagesReducerActions = MessagesActionsType
export const MessagesReducer = (state: MessagesReducerType = messagesReducerState, action: MessagesReducerActions):MessagesReducerType => {
    switch (action.type) {
        case "message/SET-MESSAGE":{
            return {...state,messages:[...state.messages,action.message]}
        }
        default:
            return state
    }
}


