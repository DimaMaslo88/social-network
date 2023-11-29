import {instance} from "api/instance";
import {AuthResponseType, InitializeResponseType} from "types/types";



export const AuthApi = {
loginUser(params:{email:string,password:string}){
return instance.post<AuthResponseType>('/auth/login',params)
},
initializeUser(){
    return instance.get<InitializeResponseType>('/auth/me')
},
    logOut(){
    return instance.delete<AuthResponseType>('/auth/login')
    }
}



