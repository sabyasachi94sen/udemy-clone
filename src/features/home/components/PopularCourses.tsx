import moment from "moment";
import Link from "next/link";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

export function PopularCourses({ courseList }) {
  return (
    <div className="px-2 xsm:px-6 mb-20">
      <h2 className="font-sans font-bold xsm:text-[1.5rem] md:text-[1.5rem] 3xl:text-[1.6rem]">
        Students also bought
      </h2>
      {courseList &&
        courseList?.popular_courses?.map((item, i, courseList) => (
          <Link key={i} href="/">
            <div className="mt-4 cursor-pointer 3xl:w-[75%]">
              <div className="flex justify-between 3xl:flex-row">
                <div className="mb-2 flex 3xl:w-[50%]">
                  <img
                    alt="course-img"
                    className="xsm:w-[15vw] 3xl:h-[8vh] 3xl:w-[4vw]"
                    src={item?.img_url}
                  />
                  <div className="xsm:ml-2 xsm:w-[55vw] md:ml-4 3xl:ml-5 3xl:w-auto">
                    <p className="font-bold xsm:text-[0.7rem] md:text-[1.3rem] 3xl:text-[0.9rem]">
                      {item?.course_name}
                    </p>
                    <p className="mt-1 xsm:text-[0.7rem] md:text-[1.2rem] 3xl:text-[0.85rem]">
                      <span className="font-bold text-green-900">
                        {item?.course_length} total hours .
                      </span>{" "}
                      Updated at{" "}
                      {`${moment(item?.time)?.format("M")}/${moment(
                        item?.time,
                      )?.format("YYYY")}`}
                    </p>
                  </div>
                </div>
                <div className="flex xsm:flex xsm:flex-col 3xl:w-[40%] 3xl:flex-row 3xl:justify-around">
                  <div className="flex font-bold text-yellow-500 xsm:text-[0.8rem] md:text-[1.5rem] 3xl:text-[1rem]">
                    <a>{item?.rating}</a>
                    <a className="mt-[3px] ml-1">
                      <FaStar className="text-[#f3ca8c]" />
                    </a>
                  </div>
                  <div className="flex xsm:text-[0.7rem] md:text-[1.5rem] 3xl:text-[1rem]">
                    <BsFillPeopleFill className="mt-1" />
                    <span className="ml-1">{item?.active_users}</span>
                  </div>
                  <div className="xsm:text-[0.7rem] md:text-[1.5rem] 3xl:text-[1rem]">
                    <p className="font-bold">₹{item?.discounted_price}</p>
                    <p className="text-gray-500 line-through md:text-[1.5rem] 3xl:text-[0.8rem]">
                      ₹{item?.actual_price}
                    </p>
                  </div>
                </div>
              </div>
              {i < courseList?.length - 1 && (
                <hr className="mt-2 h-[1.5px] bg-gray-300" />
              )}
            </div>
          </Link>
        ))}
    </div>
  );
}
