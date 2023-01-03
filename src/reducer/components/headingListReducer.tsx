const initialState = { headingList: [] };

export const headingListReducer = (state = initialState, action) => {
    switch (action.type) {
      case "HEADING_LIST_REQUEST":
        return { loading: true, headingList: [] };
      case "HEADING_LIST_SUCCESS":
        return { loading: false, headingList: action.payload };
      case "HEADING_LIST_FAILS":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };