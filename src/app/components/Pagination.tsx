"use client";
import { useState } from "react";
import { IBook } from "./Books";

const Pagination = ({
  data,
  itemsPerPage,
  onPageChange,
}: {
  data: IBook[];
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPagination = () => {
    const displayCount = 5; // Number of pages to display before showing ellipsis
    const middlePage = Math.ceil(displayCount / 2);

    if (totalPages <= displayCount) {
      // Display all pages if there are less than or equal to displayCount
      return Array.from({ length: totalPages }).map((_, index) => (
        <li
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`hover:bg-[#fafafa] rounded-md shadow-md text-lg py-2 px-4 cursor-pointer ${
            currentPage === index + 1 ? "bg-[#fafafa] font-bold" : ""
          }`}
        >
          {index + 1}
        </li>
      ));
    } else {
      // Display ellipsis and show a subset of pages around the current page
      const currentPos = currentPage;
      const start =
        currentPos <= middlePage
          ? 0
          : currentPos >= totalPages - middlePage
          ? totalPages - displayCount
          : currentPos - middlePage;
      const end = start + displayCount;

      return (
        <>
          {Array.from({ length: displayCount }).map((_, index) => (
            <li
              key={index + start}
              onClick={() => handlePageChange(index + start + 1)}
              className={`hover:bg-[#fafafa] rounded-md shadow-md text-lg py-2 px-4 cursor-pointer ${
                currentPage === index + start + 1
                  ? "bg-[#fafafa] font-bold"
                  : ""
              }`}
            >
              {index + start + 1}
            </li>
          ))}
          {end !== totalPages && <li>...</li>}
          <li
            onClick={() => handlePageChange(totalPages)}
            className={`hover:bg-[#fafafa] rounded-md shadow-md text-lg py-2 px-4 cursor-pointer ${
              currentPage === totalPages ? "bg-[#fafafa] font-bold" : ""
            }`}
          >
            {totalPages}
          </li>
        </>
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <ul className="flex flex-wrap items-center gap-8">
        {renderPagination()}
      </ul>
    </div>
  );
};

export default Pagination;
