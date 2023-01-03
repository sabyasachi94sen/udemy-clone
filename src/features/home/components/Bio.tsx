import moment from "moment";
import { FaStar } from "react-icons/fa";

import { PreviewModal } from "./PreviewModal";

interface HeadListType {
  headingList: {
    title: string,
    rating_reviews: object[],
    rating: string,
    rating_count: string,
    headline: string,
    language: string,
    keyboard_language: string,
    created_by: {
      name: string,
    }[],
    last_update: string
  };
  courseList: {
    course: object
  };
}

export function Bio({ headingList, courseList }: HeadListType): JSX.Element {
  return (
    <div className="w-full bg-[#1c1d1f] py-10 px-60 xsm:px-4 lg:px-28 xl:px-14 2xl:px-28 2xl:py-20 3xl:px-60">
      <PreviewModal
        courseList={courseList?.course}
        isCartAdded={false}
        wrapperClass="fixed right-16 w-[25%] border-[1px] border-white bg-white shadow-md xsm:hidden 3xl:block"
      />
      <div className="h-auto lg:w-full xl:w-[75%] 2xl:w-[65%]">
        <div className="flex justify-between text-[0.9rem] font-bold text-[#cec0fc] xsm:w-[60vw] lg:w-[35vw] 3xl:w-[25vw]">
          <a className="xsm:hidden sm:block" href="/">
            Development
          </a>
          <a className="xsm:hidden sm:block">{">"}</a>
          <a className="xsm:w-[40%] sm:w-auto" href="">
            Programming Languages
          </a>
          <a>{">"}</a>
          <a href="">Python</a>
        </div>
        <div>
          <div className="mt-2 block text-[2rem] font-bold text-white xsm:text-[1.5rem]">
            {headingList?.title}
          </div>
          <div className="mt-2 block text-[1.2rem] text-white xsm:text-[1rem]">
            {headingList?.headline}
          </div>
          <div className="mt-2 flex">
            <a className="text-[#f3ca8c]" href="">
              {headingList?.rating}
            </a>

            {headingList &&
              headingList?.rating_reviews?.map((item, i) => (
                <a key={i} href="">
                  <FaStar className="mt-1 ml-1 text-[#f3ca8c]" />
                </a>
              ))}

            <a
              className="ml-2 text-[#cec0fc] underline xsm:text-[0.9rem]"
              href=""
            >
              ({headingList?.rating_count} ratings)
            </a>
            <span className="ml-2 text-white xsm:text-[0.9rem]">
              24,411 students
            </span>
          </div>
          <div className="mt-2 xsm:text-[0.8rem]">
            <div className="text-white">
              Created by{" "}
              {headingList?.created_by?.map((item, i, created_by) => (
                <a key={i} className="text-[#cec0fc] underline" href="">
                  {`${item?.name}${i < created_by?.length - 1 ? ", " : ""}`}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-3 flex w-[55%] justify-between text-[0.9rem] xsm:h-[15vh] xsm:flex-col lg:h-[15vh] lg:flex-col xl:h-auto xl:flex-row 2xl:w-[70%]">
            <div className="flex items-center">
              <img
                alt="last-update-icon"
                className="xsm:w-[6vw] xsm:w-[4vw] md:w-[4vw] lg:w-[2vw] xl:h-[3.5vh] 3xl:h-[2.5vh] 3xl:w-[1.5vw]"
                src="https://media.istockphoto.com/id/1206217921/vector/notice-event-icon-vector-isolated-contour-symbol-illustration.jpg?b=1&s=612x612&w=0&k=20&c=XuED_Df3d9Ml8OwYcp9-VUzknRAd3HyWClyDe1leaDw="
              />
              <span className="ml-2 block text-white xl:text-[1rem]">
                Last updated{" "}
                {`${moment(headingList?.last_update).format("M")}/${moment(
                  headingList?.last_update,
                ).format("YYYY")}`}
              </span>
            </div>
            <div className="flex items-center">
              <img
                alt="language-icon"
                className="h-[2.5vh] w-[1.3vw] xsm:w-[5vw] xsm:w-[4vw]  md:w-[4vw] lg:w-[1.8vw]  xl:h-[3.5vh]"
                src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=globe"
              />
              <span className="ml-2 block text-white xl:text-[1rem]">
                {headingList?.language}
              </span>
            </div>
            <div className="flex items-center">
              <img
                alt="keyboard-icon"
                className="h-[3vh] w-[1.5vw] xsm:w-[6vw] xsm:w-[4vw]  md:w-[4vw] lg:w-[2vw]  xl:h-[3.5vh]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1p2cEIXyGE_12pMDQ_4CHMROINVLqEqoCw&usqp=CAU"
              />
              <span className="ml-2 block text-white xl:text-[1rem]">
                {headingList?.keyboard_language}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
