import React from "react";
import { IYBOOK } from "../interface/interface";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const YourCourses = () => {
  const yourBooks: IYBOOK[] = [
    {
      id: 1,
      title: "Google Ads Training 2021: Profit with Pay",
      author: " Jon Kantner",
      cover_image: "/indoor-shot-happy-student.png",
      student: 198,
      lesson: 6,
      days: 56,
      points: 75,
      teacher_image: "/10.png",
      role: "CEO",
      difficulty: "average",
    },
    {
      id: 2,
      title: "Google Ads Training 2021: Profit with Pay",
      author: " Jon Kantner",
      cover_image: "/unsplash.png",
      student: 198,
      lesson: 6,
      days: 56,
      points: 75,
      teacher_image: "/unsplash2.png",
      role: "CEO",
      difficulty: "average",
    },
    {
      id: 3,
      title: "Google Ads Training 2021: Profit with Pay",
      author: " Jon Kantner",
      cover_image: "/trend.png",
      student: 198,
      lesson: 6,
      days: 56,
      points: 75,
      teacher_image: "/trend1.png",
      role: "CEO",
      difficulty: "average",
    },
    {
      id: 4,
      title: "Google Ads Training 2021: Profit with Pay",
      author: " Jon Kantner",
      cover_image: "/portrait-beautiful-young-woman.png",
      student: 198,
      lesson: 6,
      days: 56,
      points: 75,
      teacher_image: "/unsplash3.png",
      role: "CEO",
      difficulty: "average",
    },
  ];

  return (
    <div className="space-y-8 xl:px-[204px] px-8">
      <div className="flex items-center justify-between">
        <h1>YOUR COURSES</h1>
        <div className="py-2 px-4 bg-[#FAFAFA] rounded-xl">See All</div>
      </div>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-8">
        {yourBooks.map((book: IYBOOK) => {
          return (
            <div key={book.id} className="bg-[#FAFAFA] rounded-2xl p-4">
              <div className="grid xl:grid-cols-3 grid-cols-1 xl:gap-8 space-y-2 xl:space-y-0">
                <img
                  src={book.cover_image}
                  alt={book.title}
                  className="w-full"
                />
                <div className=" flex flex-col col-span-2 space-y-4 xl:space-y-0 justify-between items-start">
                  <h1>{book.title}</h1>
                  <div className="flex items-center justify-between w-full">
                    <div>Lesson: {book.lesson}</div>
                    <div>Student: {book.student}</div>
                    <div>Average: {book.difficulty}</div>
                  </div>
                  <div className="w-full h-2 bg-[#FAFAFA] border-dashed border-2 rounded-full">
                    <div
                      className={`w-[75%] h-full text-center text-xs text-white bg-[#d98a55ca] rounded-full`}
                    ></div>
                  </div>
                  <div className="flex justify-between w-full">
                    <div>Points: {book.points}</div>
                    <div>Days: {book.days}</div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-center gap-4">
                      <img src={book.teacher_image} alt={book.teacher_image} />
                      <div>
                        <h2 className="font-medium">{book.author}</h2>
                        <h2>{book.role}</h2>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 justify-center bg-black text-white rounded-xl py-2 px-4">
                      <h1>Let&apos;s Go</h1>
                      <ArrowRightIcon className="w-5 h-5 shadow-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YourCourses;
