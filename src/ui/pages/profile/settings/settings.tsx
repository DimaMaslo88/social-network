import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserPhotoLarge } from 'bll/selectors/Selectors';
import { Avatar } from 'images/avatars/avatar';
import s from 'styles/settings.module.scss';
import { Input } from 'ui/components/universal/input/Input';
import { UserData } from 'ui/pages/profile/settings/userData/userData';
import { AddIcon } from 'images/icons/addIcon';

export const Settings = () => {
  const photoLarge = useSelector(selectUserPhotoLarge);

  return (
    <div className={s.settingContainer}>
      <div className={s.settings}>
        {photoLarge === null ? (
          <Avatar className={s.ava} width={350} height={350} />
        ) : (
          <div>{photoLarge}</div>
        )}
          <div className={s.icon}>
        <AddIcon width={40} height={40} />
          </div>
      </div>
      <div className={s.inputContainer}>
        <UserData />
      </div>
    </div>
  );
};
