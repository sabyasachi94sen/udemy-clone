import { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";

import { courseListAction, headingListAction } from "@/action";
import {
  Bio,
  CourseContent,
  CourseDescription,
  CourseIndex,
  Footer,
  Navbar,
  PopularCourses,
} from "@/features/home";

export function Udemy() {
  const dispatch = useDispatch();
  const { courseList, loading } = useSelector((state) => state.courseList);
  const { headingList } = useSelector((state) => state.headingList);
 

  useEffect(() => {
    dispatch(headingListAction());
    dispatch(courseListAction());
  }, []);

  return (
    <div>
      {!loading ? (
        <div>
          <Navbar />
          <Bio headingList={headingList} courseList={courseList} />

          <div className="lg:px-28 xl:px-14 2xl:px-28 3xl:py-10 3xl:px-60">
            <div>
              <CourseIndex courseList={courseList} />
              <CourseContent courseList={courseList} />
              <CourseDescription />
              <PopularCourses courseList={courseList} />
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="mx-[45%] my-[20%]">
          <TailSpin height={50} width={50} color="cyan" />
        </div>
      )}
    </div>
  );
}
