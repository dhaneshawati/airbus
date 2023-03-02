import React from "react";
import "./Pagination.css";

const Pagination = ({
  flightsPerPage,
  totalFlights,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFlights / flightsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(number)}
            className={number === currentPage ? "active" : ""}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
