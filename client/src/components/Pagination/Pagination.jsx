import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './Pagination.scss';

const Pagination = props => {
  const [currentPage, setCurrentPage] = useState(0);
  const { totalRecords, pageLimit, handlePageClick } = props;
  const totalPages = Math.ceil(totalRecords / pageLimit);
  const totalPagesList = [...Array(totalPages)];

  const handleClick = index => {
    if (index !== currentPage) {
      handlePageClick(pageLimit, index * pageLimit);
      setCurrentPage(index);
    }
  };

  const handleNext = () => {
    handlePageClick(pageLimit, (currentPage + 1) * pageLimit);
    setCurrentPage(currentPage + 1);
  };
  const handlePrevious = () => {
    handlePageClick(pageLimit, (currentPage - 1) * pageLimit);
    setCurrentPage(currentPage - 1);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
          <p
            role="presentation"
            onClick={handlePrevious}
            className="page-link"
            aria-label="Previous"
            tabIndex="-1"
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </p>
        </li>
        {totalPagesList.map((item, index) => (
          <li
            key={index}
            role="presentation"
            onClick={() => handleClick(index)}
            className={`page-item ${currentPage === index ? 'active' : ''}`}
          >
            <p className="page-link">{index + 1}</p>
          </li>
        ))}
        <li
          tabIndex="-1"
          className={`page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}`}
        >
          <p role="presentation" onClick={handleNext} className="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </p>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  totalRecords: PropTypes.number,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func,
  handlePageClick: PropTypes.func
};

export default CSSModules(Pagination, styles);
