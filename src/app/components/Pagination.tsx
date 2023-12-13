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

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <ul className="flex items-center gap-8">
        {Array.from({ length: totalPages }).map((_, index) => (
          <li
            onClick={() => handlePageChange(index + 1)}
            className="hover:bg-[#fafafa] rounded-md shadow-md text-lg py-2 px-4 cursor-pointer"
            key={index}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
