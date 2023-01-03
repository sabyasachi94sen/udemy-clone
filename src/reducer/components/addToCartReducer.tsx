const initialState = { productList: [] };

export const addToCartReducer = (state = initialState, action) => {
  if (state.productList === undefined) return state;

  switch (action.type) {
    case "ADD_TO_CART":
      return {productList: [...state.productList, action.payload]};

    default:
      return state;
  }
};
