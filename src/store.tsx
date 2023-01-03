import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { addToCartReducer, courseListReducer ,headingListReducer } from "@/reducer";

const reducer = combineReducers({
  courseList: courseListReducer,
  headingList: headingListReducer,
  productList: addToCartReducer
});
const initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
