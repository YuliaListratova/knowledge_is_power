import React, { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './Pagination.module.scss';

interface IProps {
  limit: number;
  itemsAmount: number;
  pagesCount?: number;
}

const Pagination: FC<IProps> = ({ limit, itemsAmount, pagesCount }) => {
  const pagesAmount = pagesCount || Math.ceil(itemsAmount / limit);
  const pagesArray: number[] = [];

  const { search } = useLocation();

  const navigate = useNavigate();

  const currentPageNumber = new URLSearchParams(search).get('page');

  for (let i = 1; i <= pagesAmount; i++) {
    pagesArray.push(i);
  }

  const isPageActive = (page: number) => {
    return page === Number(currentPageNumber) ? style.active : '';
  };
  return (
    <div className={style.pagination_wrapper}>
      {pagesArray.map((page) => (
        <button
          key={`key${page}`}
          type="button"
          className={`${style.page_button} ${isPageActive(page)}`}
          onClick={() => {
            navigate(`?page=${page}`);
          }}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
