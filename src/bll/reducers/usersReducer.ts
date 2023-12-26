import {ItemsType, UsersResponseType} from "types/types";
import {setOtherUsers, SetOtherUsers} from "bll/actions/usersAction";
import {AppThunkType} from "bll/store";
import {setAppStatus} from "bll/actions/appActions";
import {UsersApi} from "api/users-api/users-api";

export const usersStateValue = {
  items: [] ,
  totalCount: 0,
};
export type UsersReducerType = {
  items: ItemsType[],
  totalCount:number
}
export type UsersReducerGeneralType = SetOtherUsers
export const UsersReducer = (state: UsersReducerType=usersStateValue, action: UsersReducerGeneralType):UsersReducerType => {
  switch (action.type) {
    case 'users/SET-OTHER-USERS':{
      return {...state,...action.value}
    }
    default:
      return state;
  }
};


export const GetUsers = ():AppThunkType=>async(dispatch)=>{
  dispatch(setAppStatus(true))
  try{
    const res = await UsersApi.getUsers()
    console.log(res)
    dispatch(setOtherUsers(res.data))
  }catch (error){
    console.log(error)
  }finally{
    dispatch(setAppStatus(false))
  }
}
