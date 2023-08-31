import {instance} from "api/instance";
import {AuthResponseType} from "types/types";



export const AuthApi = {
loginUser(email:string,password:string){
return instance.post<AuthResponseType>('/auth/login',{email,password})
}
}



