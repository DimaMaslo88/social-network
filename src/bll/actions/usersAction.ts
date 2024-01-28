import {UsersResponseType} from "types/types";
import {setAppError} from "bll/actions/appActions";

export type SetOtherUsers = ReturnType<typeof setOtherUsers>
export const setOtherUsers =(value:UsersResponseType)=>{
    return {
        type:'users/SET-OTHER-USERS',
        value
    }as const
}
export type SetCountType = ReturnType<typeof setCount>
export const setCount = (count:number)=>{
    return {
        type:'users/SET-COUNT',
        count
    }as const
}
