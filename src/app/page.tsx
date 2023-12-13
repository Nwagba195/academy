import React from "react";
import Section from "./components/Section";
import Books from "./components/Books";
import TopCourses from "./components/TopCourses";
import NewsLetter from "./components/NewsLetter";

const HomePage = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex items-center gap-32 justify-between px-[204px]">
        <div className="flex flex-col font-roboto ">
          <div className="text-black  max-w-[601px] text-[38px] font-black leading-[68px]">
            🙌 Hello Friends <br /> I Am Sofia And We Want To Start A{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FAC1F1] to-[#B176F2] ">
              Web Design{" "}
            </span>
            Course Together. Do You Like It Too 😍 ?
          </div>
          <div className="flex flex-row items-center justify-start gap-8">
            <div>
              <button className="bg-black flex rounded-md py-4 text-white px-4 text-[14px] items-center justify-center">
                Star Course Now
              </button>
            </div>
            <div className="flex">
              <img src="/booked.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="items-center justify-center">
          <img
            className="mt-36 items-center h-[640px] justify-center"
            src="/thumb-up.svg"
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Section />
      </div>
      {/* books */}
      <div className="px-[204px] my-16">
        <div className="flex items-center justify-between">
          <div>NEW COURSES(BOOKS)</div>
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="px-4 py-2 rounded-xl bg-[#FAFAFA] ">All Course</div>
            <div>Design</div>
            <div>Development</div>
            <div>Photography</div>
            <div>Music</div>
          </div>
        </div>
        <div className="my-8">
          <Books />
        </div>
      </div>
      {/* Newsletter */}
      <NewsLetter />
      {/* Top Courses */}
      <TopCourses />
    </div>
  );
};

export default HomePage;
