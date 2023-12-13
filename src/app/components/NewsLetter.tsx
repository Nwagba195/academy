import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-purple-50 px-[204px] h-80 flex items-center justify-between my-16">
      <div className="flex items-center w-full justify-between">
        <h1 className="font-black text-4xl max-w-2xl leading-loose">
          Find Out About The Latest Courses With The
          <span className="text-purple-600"> Academy</span> Newsletter
        </h1>

        <div className="w-[744px] flex items-center justify-start bg-[#FAFAFA] py-2 px-4 rounded-xl gap-4">
          <input
            type="text"
            className="border-0 outline-none bg-[#FAFAFA] w-full focus:ring-0"
            placeholder="Email Address..."
          />
          <button className="bg-black flex rounded-md py-4 text-white px-8 text-[14px] items-center justify-center">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
