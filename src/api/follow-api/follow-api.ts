import {instance} from "api/instance";
import {FollowedResponseType} from "types/types";

export const FollowApi={
    createFollow(userId:number){
        return instance.post<FollowedResponseType>(`follow/${userId}`)
    },
    deleteFollow(userId:number){
        return instance.delete<FollowedResponseType>(`follow/${userId}`)
    }
}
