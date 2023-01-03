import { CourseListObj } from "@/features/api";
import {Dispatch} from "redux"

export const courseListAction = () =>
  function (dispatch:Dispatch) {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });
    const courseList = CourseListObj.course_list();

    courseList
      .then((item) => {
        dispatch({
          type: "PRODUCT_LIST_SUCCESS",
          payload: item?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "PRODUCT_LIST_FAILS",
          payload: "Failed to fetch products",
        });
      });
  };
