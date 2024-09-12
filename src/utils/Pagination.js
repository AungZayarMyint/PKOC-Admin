import React from 'react';
import ReactPaginate from 'react-paginate';
import classes from '../assets/css/Pagination.module.css';

const Pagination = ({ setPage, setIsLoading, totalPage}) => {
    const handlePageClick = async (pag) => {
      setIsLoading(true);
        setPage(pag.selected + 1);
      };
      
  return (
    <>
      <ReactPaginate
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={totalPage}
        previousLabel="prev"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName={`pagination ${classes['pagi-container']}`}
        activeClassName={classes.active}
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Pagination