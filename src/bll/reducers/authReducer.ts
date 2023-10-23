import {AppThunkType} from "bll/store";
import {AuthApi} from "api/auth-api/auth-api";
import {
    setAuthUser,
    SetAuthUser,
    setInitialized,
    SetInitializedType,
    setIsAuth,
    SetIsAuthType
} from "bll/actions/authActions";
import {setAppStatus} from "bll/actions/appActions";
import {handleServerError} from "ui/error-util/error";

const authReducerState = {
    isAuth: false,
    isInitialized:false,
    email: '',
    password: ''
}
export type AuthReducerType={
    isAuth:boolean
    isInitialized:boolean
    email:string
    password:string
}
export type AuthReducerActions = SetAuthUser
|SetIsAuthType
|SetInitializedType
export const AuthReducer = (state: AuthReducerType = authReducerState, action: AuthReducerActions):AuthReducerType => {
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
        default:
            return state
    }
}


export const LoginUser = (data:{email:string, password:string}): AppThunkType => async (dispatch) => {
   dispatch(setAppStatus(true))
    try {
        const res = await AuthApi.loginUser(data)
        console.log(res.data)
        if(res.data.resultCode === 0){
            dispatch(setIsAuth(true))

        }
    }catch (error){
        handleServerError(error,dispatch)

    }finally {
        dispatch(setAppStatus(false))
    }
}
export const InitializeUser = ():AppThunkType => async(dispatch)=>{
    try{
        const res = await AuthApi.initializeUser()
        if(res.data.resultCode === 0){
            dispatch(setIsAuth(true))
            dispatch(setInitialized(true))
        }
        console.log(res.data)
    }catch(error){
        console.log(error)
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
