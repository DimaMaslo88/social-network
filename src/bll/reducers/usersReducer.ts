import {ItemsType} from "types/types";
import {
  SetCountType,
  setFollowedUser,
  SetFollowedUserType,
  setOtherUsers,
  SetOtherUsers, setUnFollowedUser, SetUnFollowedUserType
} from "bll/actions/usersAction";
import {AppThunkType} from "bll/store";
import {setAppStatus} from "bll/actions/appActions";
import {UsersApi} from "api/users-api/users-api";
import {FollowApi} from "api/follow-api/follow-api";

export const usersStateValue = {
  items: [] ,
  totalCount: 0,
  count:0,


};
export type UsersReducerType = {
  items: ItemsType[],
  totalCount:number,
  count:number,

}
export type UsersReducerGeneralType = SetOtherUsers
|SetCountType
|SetFollowedUserType
|SetUnFollowedUserType
export const UsersReducer = (state: UsersReducerType=usersStateValue, action: UsersReducerGeneralType):UsersReducerType => {
  switch (action.type) {
    case 'users/SET-OTHER-USERS': {
      return { ...state, ...action.value };
    }
    case 'users/SET-COUNT': {
      return { ...state, count: action.count };
    }
    case 'users/SET-FOLLOWED-USER': {
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.userId ? { ...item, followed: true } : item,
        ),
      };
    }
    case 'users/SET-UNFOLLOWED-USER':{
      return {
        ...state,items:state.items.map(item=>item.id === action.userId ? {...item,followed:false}:item)
      }
    }
    default:
      return state;
  }
};

// Thunks
export const GetUsers = ():AppThunkType=>async(dispatch)=>{
    dispatch(setAppStatus(true))
  const params={
      count:100
  }
  try{
    const res = await UsersApi.getUsers(params)
    console.log(res)
    dispatch(setOtherUsers(res.data))


  }catch (error){
    console.log(error)
  }finally{
    dispatch(setAppStatus(false))
  }
}

export const PostFollow =(userId:number):AppThunkType =>async (dispatch) =>{
  dispatch(setAppStatus(true))
  try{
    const res = await FollowApi.createFollow(userId)
    if(res.data.resultCode === 0){
      dispatch(setFollowedUser(userId))
    }

  }catch(error){
    console.log(error)
  }finally {
    dispatch(setAppStatus(false))
  }
}
export const DeleteFollow =(userId:number):AppThunkType=>async (dispatch)=>{
  dispatch(setAppStatus(true))
  try{
    const res = await FollowApi.deleteFollow(userId)
    if(res.data.resultCode === 0){
      dispatch(setUnFollowedUser(userId))
    }

  }catch (error){
    console.log(error)
  }finally {
    dispatch(setAppStatus(false))
  }
}
