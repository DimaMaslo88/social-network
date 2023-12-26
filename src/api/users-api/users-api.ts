import {instance} from "api/instance";

export const UsersApi={
    getUsers(){
        return instance.get('/users')
    }

}
