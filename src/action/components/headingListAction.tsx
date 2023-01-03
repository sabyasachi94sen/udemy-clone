import { HeadingListObj } from "@/features/api";
import {Dispatch} from "redux"

export const headingListAction = () =>
  function (dispatch:Dispatch) {
    dispatch({ type: "HEADING_LIST_REQUEST" });
    const headingList = HeadingListObj.heading_list();

    headingList
      .then((item) => {
        dispatch({
          type: "HEADING_LIST_SUCCESS",
          payload: item?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "HEADING_LIST_FAILS",
          payload: "Failed to fetch products",
        });
      });
  };
