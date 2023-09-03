import {StateType} from "bll/store";

export const selectMessage =(state:StateType):string[]=>state.messages.messages
export const selectIsAuthUser =(state:StateType):boolean=>state.auth.isAuth
