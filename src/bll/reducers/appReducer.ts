import {SetAppErrorType, SetAppStatusType} from "bll/actions/appActions";

export const appState = {
    status: false,
    error: null as null | ''
}
export type AppStateType = {
    status: boolean
    error: null | string
}
export type appStateActionsType = SetAppStatusType
    | SetAppErrorType

export const AppReducer = (state: AppStateType = appState, action: appStateActionsType): AppStateType => {
    switch (action.type) {
        case "SET-APP-STATUS": {
            return {...state, status: action.status}
        }
        case "SET-APP-ERROR":{
            return {...state,error:action.error}
        }
        default:
            return state
    }
}
