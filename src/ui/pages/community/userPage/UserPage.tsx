import React from 'react';
import { Avatar } from 'images/avatars/avatar';
import style from 'styles/settings.module.scss';
import s from 'styles/usersPage.module.scss'

type UserPageType = {
  name: string;
  followed: boolean;
  status: null | string;
  photo: null | string;
};
export const UserPage = ({ name, followed, status, photo }: UserPageType) => {
  return (
    <div>
      <div>
        {photo === null ? (
          <Avatar className={style.ava} width={120} height={120} />
        ) : (
          <div>{photo}</div>
        )}
      </div>
        <div className={s.textStyle}>
      {name}
        </div>
      {followed}
    </div>
  );
};

