import React, { useEffect } from 'react';
import { useAppDispatch } from 'bll/store';
import { GetUsers } from 'bll/reducers/usersReducer';
import { useSelector } from 'react-redux';
import { selectUsers } from 'bll/selectors/Selectors';
import { ItemsType } from 'types/types';
import { UserPage } from 'ui/pages/community/userPage/UserPage';
import {Pagination} from "ui/components/Pagination/Pagination";

export const UsersPage = () => {
  const dispatch = useAppDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(GetUsers());
  }, []);
  return (
    <div>
      {users.slice(0,5).map((user: ItemsType) => (
        <div key={user.id}>
          <UserPage
            name={user.name}
            status={user.status}
            photo={user.photos.small}
            followed={user.followed}
          />

        </div>
      ))}
      <Pagination/>
    </div>
  );
};
