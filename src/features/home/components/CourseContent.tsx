import { useState } from "react";

import { Lectures } from "./Lectures";

interface CourseListPropsType{
    courseList:{
      sections:string,
      lectures:string,
      course_length:string,
      content_list:{
        lecture_list:[],
        lectures:string,
        time:string,
        title:string
      }[]

    }
}

export function CourseContent({ courseList }:CourseListPropsType):JSX.Element {
  const [storeCourseIndex, setStoreCourseIndex] = useState({
    index: null,
    isCurrentDivOpen: false,
  });

  const [allDivOpen, setAllDivOpen] = useState(false);
  const [showAllResult, setShowAllResult] = useState(false);

  return (
    <div className="mt-5 py-5 xsm:px-3 md:px-6 xl:w-[70%] 2xl:w-[65%] 3xl:w-[68%]">
      <h2 className="font-sans font-bold xsm:text-[1.2rem] 3xl:text-[1.8rem]">
        Course Content
      </h2>
      <div className="mt-4 mb-6">
        <div className="flex items-center justify-between xsm:h-[10vh] xsm:w-[95%] xsm:flex-col xsm:items-start xsm:text-[0.8rem] md:h-auto lg:w-[35vw] 2xl:w-[30vw] 3xl:w-[24vw]">
          <div>
            <span>
              {courseList?.sections} section {" • "}{" "}
            </span>
            <span>
              {courseList?.lectures} lectures {" • "}
            </span>
            <span>{courseList?.course_length} total length</span>
          </div>
        </div>
        <div
          className="-my-6 mr-3 cursor-pointer font-bold text-[#5624d0] xsm:mb-1 xsm:px-1 md:float-right 3xl:float-right"
          onClick={() => {
            setAllDivOpen(!allDivOpen);
            setStoreCourseIndex({
              index: null,
              isCurrentDivOpen: !storeCourseIndex.isCurrentDivOpen,
            });
          }}
        >
          {!allDivOpen ? "Expand all sections" : "Collapse all section"}
        </div>
      </div>
      {courseList?.content_list?.map((item, i) => (
        <div key={i}>
          {(!showAllResult && !allDivOpen
            ? i < 11
            : i < courseList?.content_list?.length) && (
            <div
              onClick={() => {
                setStoreCourseIndex({
                  index: i,
                  isCurrentDivOpen: !storeCourseIndex.isCurrentDivOpen,
                });
              }}
            >
              <div className="w-full cursor-pointer border-[1px] bg-gray-100 px-3 py-3 pl-6 font-sans font-bold">
                <span className="relative -top-[2px] text-[1.5rem]">
                  &#8964;
                </span>
                <span className="ml-3">{item?.title}</span>
                <div className="mt-2 flex items-center justify-between font-normal xsm:hidden md:float-right md:block 3xl:float-right 3xl:text-[0.9rem] ">
                  <span>
                    {item?.lectures} lectures {" • "}
                  </span>
                  <span>{item?.time} min</span>
                </div>
              </div>
              <Lectures
                lectureList={item?.lecture_list}
                showDiv={
                  (storeCourseIndex?.index === i &&
                    storeCourseIndex?.isCurrentDivOpen) ||
                  (allDivOpen && storeCourseIndex?.index !== i)
                }
              />
            </div>
          )}
        </div>
      ))}

      {!showAllResult && !allDivOpen && (
        <button
          className="mt-3 w-full border-[1px] border-black px-4 py-3 text-center text-center font-bold hover:bg-gray-200"
          type="button"
          onClick={() => setShowAllResult(true)}
        >
          {(courseList?.content_list?.length || 0) - 11} more sections
        </button>
      )}
    </div>
  );
}
