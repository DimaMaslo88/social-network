import {instance} from "api/instance";
import {AuthResponseType} from "types/types";
import {AppThunkType} from "bll/store";


export const AuthApi = {
loginUser(email:string,password:string){
return instance.post<AuthResponseType>('/auth/login',{email,password})
}
}


export const LoginUser=(email,password):AppThunkType=>async (dispatch) =>{
    try{
        let res = await AuthApi.loginUser(email,password)
    }
}
