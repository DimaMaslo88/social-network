import React, { useState } from 'react';
import { Button } from 'ui/components/universal/button/Button';
import { useSelector } from 'react-redux';
import { selectTotalCounts } from 'bll/selectors/Selectors';
import style from 'styles/usersPage.module.scss';

type PaginationType={
  elementOnPage:number
  currentPage:number
  changeCurrentPageNext:()=>void
  changeCurrentPagePrevious:()=>void
}
export const Pagination = ({elementOnPage,currentPage,changeCurrentPageNext,changeCurrentPagePrevious}:PaginationType) => {
  const totalCount = useSelector(selectTotalCounts);

  const totalCountChanged = totalCount / 250;
   const totalPages = totalCountChanged / elementOnPage;
  const pages = [];
  for (let i = 1; i <= totalPages; i += 1) {
    pages.push(i);
  }



  return (
    <div>
      <Button onClick={changeCurrentPagePrevious}>Назад</Button>

      {pages.map(page => (
        <span
          key={page}
          className={currentPage === page ? style.pageNumberActive : style.pageNumber}
        >
          {page}
        </span>
      ))}

      <Button onClick={changeCurrentPageNext}>Вперед</Button>
    </div>
  );
};
