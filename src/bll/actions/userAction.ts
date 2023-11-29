import {UserDataType} from "types/types";

export type SetUserIdType = ReturnType<typeof setUserId>
export const setUserId=(userId:number)=>{
    return {
        type:'SET-USER-ID',
        userId
    }as const
}
export type SetUserProfileDataType = ReturnType<typeof setUserProfileData>
export const setUserProfileData=(data:UserDataType)=>{
    return {
        type:"SET-USER",
        data
    }as const
}
