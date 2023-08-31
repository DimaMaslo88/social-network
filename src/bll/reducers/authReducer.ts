import {AppThunkType} from "bll/store";
import {AuthApi} from "api/auth-api/auth-api";
import {SetAuthUser} from "bll/actions/authActions";

const authReducerState = {
    isAuth: false,
    email: '',
    password: ''
}
export type AuthReducerType={
    isAuth:boolean
    email:string
    password:string
}
export type AuthReducerActions = SetAuthUser
export const AuthReducer = (state: AuthReducerType = authReducerState, action: any):AuthReducerType => {
    switch (action.type) {
        default:
            return state
    }
}


export const LoginUser = (email:string, password:string): AppThunkType => async (dispatch) => {
    try {
        const res = await AuthApi.loginUser(email, password)
        console.log(res.data)
    }catch (error){
        console.log(error)
    }
}
