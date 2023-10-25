import {instance} from "api/instance";
import {UserResponseType} from "types/types";

export const UserApi={
    getUser(userId:number){
        return instance.get<UserResponseType>('profile/{userId}')
    }

}
