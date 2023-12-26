import {MessagesActionsType, setMessages} from "bll/actions/messagesActions";
import {AppThunkType} from "bll/store";
import {setAppStatus} from "bll/actions/appActions";
import {DialogsApi} from "api/dialogs-api/dialogs-api";

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
export const  CreatePost =(userId:number | null,value:string):AppThunkType=>async (dispatch )=>{
    dispatch(setAppStatus(true))
    try {
        debugger
        const res = await DialogsApi.createPost(userId,value)
        dispatch(setMessages(res.data))
    }catch (error){
        console.log(error)
    }finally {
        dispatch(setAppStatus(false))
    }
}


