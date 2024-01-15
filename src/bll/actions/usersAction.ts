import {UsersResponseType} from "types/types";

export type SetOtherUsers = ReturnType<typeof setOtherUsers>
export const setOtherUsers =(value:UsersResponseType)=>{
    return {
        type:'users/SET-OTHER-USERS',
        value
    }
}

