import React from 'react';
import './pagination.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = [];

    pageNumbers.push(1);

    if (currentPage > 4) {
        pageNumbers.push("...");
    }

    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 2); i++) {
        pageNumbers.push(i);
    }

    if (currentPage < totalPages - 3) {
        pageNumbers.push("...");
    }

    if (totalPages > 1) {
        pageNumbers.push(totalPages);
    }

    return (
        <div className="pagination">
        <button
            className="pagination-btn"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
        >
            &lt;
        </button>

        {pageNumbers.map((page, index) => (
            <button
            key={index}
            className={`pagination-btn ${page === currentPage ? 'active' : ''}`}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            disabled={typeof page !== 'number'}
            >
            {page}
            </button>
        ))}

        <button
            className="pagination-btn"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
        >
            &gt;
        </button>
        </div>
    );
}

export default Pagination;
