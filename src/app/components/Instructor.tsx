import React from "react";

const Instructor = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:gap-32 justify-between xl:px-[204px] px-8">
      <div className="flex flex-col font-roboto md-8 lg:mb-0">
        <div className="bg-clip-text max-w-[601px] text-sm lg:text-[38px] font-black leading-[40px] lg:leading-[68px] text-transparent bg-gradient-to-r from-[#FAC1F1] to-[#B176F2]">
          Best <span className="text-black  ">Instructor </span>
        </div>
        <h3 className="font-roboto text-[14px] leading[20px] font-normal xl:max-w-[409px]">
          At the Academy, we strive To Bring Together The Best <br /> Professors
          For The Best Courses
        </h3>
        <div className="flex flex-row items-center mt-[83px]  justify-start gap-8">
          <div>
            <button className="bg-black flex rounded-md py-2 lg:py-4 text-white px-4 text-sm lg:text-[14px] items-center justify-center">
              All Instructors
            </button>
          </div>
          <div className="flex">
            <img className="h-[36px] w-[78px] mt-10" src="/arrows.png" alt="" />
            <img className="mb-10" src="/advertising.png" alt="" />
          </div>
        </div>
      </div>
      <div className="items-center my-7 justify-center">
        <img
          className=" xl:w-[744px] xl:h-[488px] items-center justify-center"
          src="/instructors.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Instructor;
