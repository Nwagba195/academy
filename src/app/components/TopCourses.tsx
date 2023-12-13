"use client";

import React, { useEffect, useState } from "react";
import Book from "./Book";
import { fetchBooks } from "../feature/book/bookSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Pagination from "./Pagination";

export interface IBook {
  id: number;
  title: string;
  cover_image: string;
  author: string;
}
const TopCourses = () => {
  const itemsPerPage = 4;

  const { books } = useAppSelector((state) => state.books);
  const { loading } = useAppSelector((state) => state.books);

  const [currentPage, setCurrentPage] = useState<IBook[]>([]);

  useEffect(() => {
    setCurrentPage(books && books.slice(0, itemsPerPage));
  }, [books]);

  const handlePageChange = (page: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentPage(books.slice(startIndex, endIndex));
  };

  return (
    <div className="xl:px-[204px] px-8">
      <div className="flex items-center justify-between">
        <h1>.TOP COURSES</h1>
        {/* <Pagination
          data={books}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        /> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {loading && <p>Loadin....</p>}
        {currentPage &&
          currentPage.map((book: IBook) => {
            return <Book key={book.id} book={book} />;
          })}
      </div>
    </div>
  );
};

export default TopCourses;
