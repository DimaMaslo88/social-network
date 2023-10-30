import {StateType} from "bll/store";

export const selectMessage =(state:StateType):string[]=>state.messages.messages
export const selectIsAuthUser =(state:StateType):boolean=>state.auth.isAuth
export const selectAppStatus = (state:StateType):boolean=>state.app.status
export const selectAppServerError = (state:StateType):null|string =>state.app.error
export const selectInitialize = (state:StateType):boolean=>state.auth.isInitialized
export const selectCaptcha = (state:StateType):string=>state.auth.captcha
export const selectUserId = (state:StateType):number | null=>state.user.userId
export const selectUserName = (state:StateType):string=>state.user.fullName
export const selectUserPhotoLarge =(state:StateType):string=>state.user.photos.large
export const selectUserPhotoSmall =(state:StateType):string=>state.user.photos.small
export const selectUserJob = (state:StateType):boolean=>state.user.lookingForAJob
