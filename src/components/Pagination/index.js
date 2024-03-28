// Pagination.js
import React from 'react';
import ReactPaginate from 'react-paginate';
import style from './index.module.scss'

function Pagination({ pageCount, onPageChange }) {
    return (
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={onPageChange}
            containerClassName={style.pagination}
            previousClassName={style.prev}
            nextClassName={style.next}
            previousLinkClassName={style.prev_link}
            nextLinkClassName={style.next_link}
            disabledClassName={style.disabled}
            breakClassName={style.break_me}
            breakLinkClassName={style.break_link}
            pageClassName={style.page_item}
            pageLinkClassName={style.page_link}
            activeClassName={style.active}
        />
    );
}

export default Pagination;
