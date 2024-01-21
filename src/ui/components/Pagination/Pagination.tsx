import React from 'react';
import { Button } from 'ui/components/universal/button/Button';
import { useSelector } from 'react-redux';
import { selectTotalCounts } from 'bll/selectors/Selectors';

export const Pagination = () => {
  const totalCount = useSelector(selectTotalCounts);
  const elementOnPage = 5;
  const totalPages = totalCount / elementOnPage;
  const pages = [];
  for (let i = 0; i <= 25; i += 1) {
    pages.push(i);
  }
  return (
    <div>
      <Button>Назад</Button>
      {pages.map(page => (
        <span key={page}>{page}</span>
      ))}
      <Button>Вперед</Button>
    </div>
  );
};

