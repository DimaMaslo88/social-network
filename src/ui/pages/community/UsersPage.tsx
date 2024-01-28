import React, {useEffect, useState} from 'react';
import { useAppDispatch } from 'bll/store';
import { GetUsers } from 'bll/reducers/usersReducer';
import { useSelector } from 'react-redux';
import { selectUsers } from 'bll/selectors/Selectors';
import { ItemsType } from 'types/types';
import { UserPage } from 'ui/pages/community/userPage/UserPage';
import { Pagination } from 'ui/components/Pagination/Pagination';
import style from 'styles/usersPage.module.scss';

export const UsersPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
  const dispatch = useAppDispatch();
  const users = useSelector(selectUsers);
    const elementOnPage = 5;
  const lastUsersIndex =currentPage *   elementOnPage ;
  const firstUsersIndex = lastUsersIndex - elementOnPage
    const currentUsers = users.slice(firstUsersIndex,lastUsersIndex)
  const changeCurrentPageNext =()=>{
    setCurrentPage(currentPage+1)
  }
  const changeCurrentPagePrevious =()=>{
    setCurrentPage(currentPage -1)
  }

  useEffect(() => {
    dispatch(GetUsers());
  }, []);
  return (
    <div>
      {currentUsers.map((user: ItemsType) => (
        <div key={user.id}>
          <UserPage
            name={user.name}
            status={user.status}
            photo={user.photos.small}
            followed={user.followed}
          />
        </div>
      ))}
      <div className={style.pagination}>
        <Pagination elementOnPage={elementOnPage}
                    currentPage={currentPage}
                    changeCurrentPageNext = {changeCurrentPageNext}
                    changeCurrentPagePrevious = {changeCurrentPagePrevious} />
      </div>
    </div>
  );
};
