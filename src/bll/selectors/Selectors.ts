import {StateType} from "bll/store";

export const selectMessage =(state:StateType):string[]=>state.messages.messages
