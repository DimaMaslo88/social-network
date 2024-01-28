import {instance} from "api/instance";
import {QueryParamsType} from "types/types";

export const UsersApi={
    getUsers(params:QueryParamsType){
        return instance.get('/users',{params})
    }

}
