import ActionTypes from '../constants/actionType';

const initialState = {
  products: [],
  filters: {
    page: 1,
    limit: 12,
  },
};
// dispatch action returned object -> goes into this
const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) { // determine type
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.CREATE_PRODUCT:
      return { ...state, products: [...state.products, payload] }; // put payload in redux
    case ActionTypes.SET_PAGE:
      return { ...state, filters: { ...state.filters, page: payload } };
    default:
      return state;
  }
};

// after dispatch an action of object
// state = { products: response.data.products } (new data = initial state + payload)

export default productsReducer;
