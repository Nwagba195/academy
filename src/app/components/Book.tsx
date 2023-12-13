import React from "react";
import { IBook } from "./Books";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Book = ({ book }: { book: IBook }) => {
  const { title, author, cover_image } = book;

  return (
    <div className="bg-[#fafafa] rounded-md p-2">
      <div className="space-y-4">
        <img
          src={cover_image}
          alt={title}
          className="rounded-md w-[340px] h-[240px]"
        />
        <h2>{title}</h2>
        <p>{author}</p>
        <button className="bg-black gap-4 flex items-center justify-center rounded-md py-4 text-white px-8 text-[14px]">
          <p>Start Course</p>
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Book;
