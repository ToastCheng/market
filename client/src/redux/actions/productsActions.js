import axios from 'axios';
import ActionTypes from '../constants/actionType';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  console.log(req.headers.Authorization);
  return req;
});

export const setPage = (page) => ({
  type: ActionTypes.SET_PAGE,
  payload: page,
});

export const setProducts = (product) => ({
  type: ActionTypes.SET_PRODUCTS, // type is required
  payload: product,
});

export const createProduct = (product) => async (dispatch) => {
  console.log(product);
  try {
    const { data } = await API
      .post('/api/products', product)
      .catch((err) => {
        console.log(err);
      });

    // console.log(data)

    dispatch({ type: ActionTypes.CREATE_PRODUCT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchProducts = () => async (dispatch, getState) => {
  const { page, limit } = getState().productsReducer.filters;
  const response = await axios
    .get('http://localhost:5000/api/products', { params: { page, limit } })
    .catch((err) => {
      console.log(err);
    });
  dispatch(setProducts(response.data.products));
};

export const setPageAndFetch = (page) => (dispatch) => {
  dispatch(setPage(page));
  dispatch(fetchProducts());
};
