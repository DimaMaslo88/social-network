import {instance} from "api/instance";
import {UserDataType, UserResponseType} from "types/types";

export const UserApi={
    getUser(userId:number){
        return instance.get<UserResponseType>(`/profile/${userId}`)
    },
    updateUser( data:UserDataType){
        return instance.put('/profile',data)
    }

}
