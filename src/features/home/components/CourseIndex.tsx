export function CourseIndex({ courseList }) {
  return (
    <div className="mt-3 border-2 py-5 px-5 xsm:mx-auto xsm:w-[95%] lg:mx-0 lg:w-[95%] xl:w-[68%] 2xl:w-[65%] 3xl:mx-0 3xl:w-[68%]">
      <h2 className="font-sans text-[1.8rem] font-bold xsm:text-[1.4rem]">
        What you'll learn
      </h2>
      <div className="flex flex-wrap items-start">
        {courseList &&
          courseList?.course_index?.map((item, i) => (
            <div key={i} className="mx-2 my-3 flex items-center justify-center">
              <img
                alt="tick-icon"
                className="h-[2vh] w-auto"
                src="https://www.freeiconspng.com/thumbs/check-tick-icon/black-check-tick-icon-4.png"
              />
              <span className="ml-5 text-sm">{item?.title}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
