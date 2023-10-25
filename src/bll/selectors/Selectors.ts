import {StateType} from "bll/store";

export const selectMessage =(state:StateType):string[]=>state.messages.messages
export const selectIsAuthUser =(state:StateType):boolean=>state.auth.isAuth
export const selectAppStatus = (state:StateType):boolean=>state.app.status
export const selectAppServerError = (state:StateType):null|string =>state.app.error
export const selectCaptcha = (state:StateType):string=>state.auth.captcha
