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
export type SetFollowedUserType = ReturnType<typeof setFollowedUser>
export const setFollowedUser = (userId:number)=>{
    return {
        type:'users/SET-FOLLOWED-USER',
        userId
    }as const
}
export type SetUnFollowedUserType = ReturnType<typeof setUnFollowedUser>
export const setUnFollowedUser = (userId:number)=>{
    return {
        type:'users/SET-UNFOLLOWED-USER',
        userId
    }as const
}
