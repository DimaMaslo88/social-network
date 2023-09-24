import {SetAppStatusType} from "bll/actions/appActions";

export const  appState = {
    status:false
}
export type AppStateType= {
    status:boolean
}
export type appStateActionsType = SetAppStatusType

export const AppReducer =(state:AppStateType=appState,action:appStateActionsType):AppStateType=>{
    switch(action.type){
        case "SET-APP-STATUS":{
            return {...state,status:action.status}
        }
        default:return state
    }
}
