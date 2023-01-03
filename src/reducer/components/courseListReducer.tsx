const initialState = { courseList: [] };

export const courseListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_LIST_REQUEST":
      return { loading: true, courseList: [] };
    case "PRODUCT_LIST_SUCCESS":
      return { loading: false, courseList: action.payload };
    case "PRODUCT_LIST_FAILS":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


