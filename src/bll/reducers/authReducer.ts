import {AppThunkType, StateType} from "bll/store";
import {AuthApi} from "api/auth-api/auth-api";
import {
    setAuthUser,
    SetAuthUser, setCaptcha, SetCaptchaType,
    setInitialized,
    SetInitializedType,
    setIsAuth,
    SetIsAuthType
} from "bll/actions/authActions";
import {setAppStatus} from "bll/actions/appActions";
import {handleServerError} from "ui/error-util/error";
import {SecurityApi} from "api/security/captcha";
import {setUserId} from "bll/actions/userAction";
import {GetProfile} from "bll/reducers/userReducer";

const authReducerState = {
    isAuth: false,
    isInitialized:false,
    email: '',
    password: '',
    captcha:''
}
export type AuthReducerType={
    isAuth:boolean
    isInitialized:boolean
    email:string
    password:string
    captcha:string
}
export type authReducerActions = SetAuthUser
|SetIsAuthType
|SetInitializedType
|SetCaptchaType
export const AuthReducer = (state: AuthReducerType = authReducerState, action: authReducerActions):AuthReducerType => {
    switch (action.type) {
        case "auth/SET-AUTH-USER":{
            return {...state,email:action.email,password:action.password}
        }
        case "auth/SET-IS-AUTH":{
            return {...state,isAuth:action.isAuth}
        }
        case "auth/SET-INITIALIZED-AUTH":{
            return {...state,isInitialized:action.isInitialed}
        }
        case "SET-CAPTCHA":{
            return {...state,captcha:action.captcha}
        }
        default:
            return state
    }
}
export const GetCaptcha=():AppThunkType=>async(dispatch)=>{
    dispatch (setAppStatus(true))
    try{
        const res = await SecurityApi.getCaptcha()
        dispatch(setCaptcha(res.data))
    }catch(error){
        handleServerError(error,dispatch)
    }finally {
        dispatch(setAppStatus(false))
    }
}

export const LoginUser = (data:{email:string, password:string}): AppThunkType => async (dispatch) => {
   dispatch(setAppStatus(true))
    try {

        const res = await AuthApi.loginUser(data)
        console.log(res.data)
        if(res.data.resultCode === 0){
            dispatch(setIsAuth(true))
            dispatch(setUserId(res.data.data.userId))

        }
        if(res.data.resultCode === 10){
           dispatch( GetCaptcha ())
        }
    }catch (error){
       debugger
        handleServerError(error,dispatch)

    }finally {
        dispatch(setAppStatus(false))
    }
}
export const InitializeUser = ():AppThunkType =>
    async(dispatch)=>{
  dispatch(setAppStatus(true))
    try{
        const res = await AuthApi.initializeUser()
        if(res.data.resultCode === 0){
            dispatch(setIsAuth(true))
            dispatch(setInitialized(true))

        }
        console.log(res.data)
    }catch(error){
        console.log(error)
    }finally {
        dispatch(setAppStatus(false))
    }
}

export const LogOut =():AppThunkType=>async(dispatch)=>{
    dispatch(setAppStatus(true))
    try{
       const res = await AuthApi.logOut()
        if(res.data.resultCode === 0){
            dispatch(setIsAuth(false))
            dispatch(setInitialized(false))
        }
    }catch (error){
        console.log(error)
    }finally {
        dispatch(setAppStatus(false))
    }
}
