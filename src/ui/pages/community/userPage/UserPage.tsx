import React from 'react';
import { Avatar } from 'images/avatars/avatar';
import style from 'styles/settings.module.scss';
import s from 'styles/usersPage.module.scss'
import {Button} from "ui/components/universal/button/Button";
import {useAppDispatch} from "bll/store";
import {DeleteFollow, PostFollow} from "bll/reducers/usersReducer";

type UserPageType = {
  name: string;
  followed: boolean;
  status: null | string;
  photo: null | string;
  userId:number
};
export const UserPage = ({ name, followed, status, photo,userId }: UserPageType) => {
    const dispatch = useAppDispatch()
const subscribeHandler =()=>{
    dispatch(PostFollow(userId))
}
const deleteSubscribeHandler = ()=>{
        dispatch(DeleteFollow(userId))
}
  return (
    <div className={s.userPageContainer}>
      <div className={s.avatar}>
        {photo === null ? (
          <Avatar className={style.ava} width={120} height={120} />
        ) : (
          <div>{photo}</div>
        )}
      </div>
        <div className={s.textStyle}>
      {name}
        </div>
      <div className={s.buttons}>
          {followed ? <Button onClick={deleteSubscribeHandler} >Отписаться</Button> : <Button onClick={subscribeHandler}>Подписаться</Button> }


      </div>
    </div>
  );
};

