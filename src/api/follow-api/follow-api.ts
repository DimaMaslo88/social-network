import {instance} from "api/instance";

export const FollowApi={
    createFollow(userId:number){
        return instance.post(`follow/${userId}`)
    }
}
