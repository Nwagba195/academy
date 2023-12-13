import React from "react";
import Section from "./components/Section";
import Books from "./components/Books";
import TopCourses from "./components/TopCourses";
import NewsLetter from "./components/NewsLetter";

const HomePage = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-12 ">
      <div className="flex flex-col lg:flex-row items-center lg:gap-32 justify-between xl:px-[204px] px-8">
        <div className="flex flex-col font-roboto md-8 lg:mb-0">
          <div className="text-black max-w-[601px] text-sm lg:text-[38px] font-black leading-[40px] lg:leading-[68px]">
            🙌 Hello Friends <br /> I Am Sofia And We Want To Start A{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FAC1F1] to-[#B176F2] ">
              Web Design{" "}
            </span>
            Course Together. Do You Like It Too 😍 ?
          </div>
          <div className="flex flex-row items-center justify-start gap-8">
            <div>
              <button className="bg-black flex rounded-md py-2 lg:py-4 text-white px-4 text-sm lg:text-[14px] items-center justify-center">
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
            className="mt-4 h-[240px] lg:mt-36 items-center lg:h-[640px] justify-center"
            src="/thumb-up.svg"
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Section />
      </div>
      {/* books */}
      <div className=" my-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-4 lg:mb-0">NEW COURSES(BOOKS)</div>
          <div className="flex items-center justify-center lg:gap-4 text-sm lg:text-sm">
            <div className="px-2 lg:px-4 py-1 lg:py-2 rounded-xl bg-[#FAFAFA] ">
              All Course
            </div>
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
