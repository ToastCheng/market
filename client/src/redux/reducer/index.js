import { combineReducers } from 'redux';

import authReducer from './authReducer';
import productsReducer from './productsReducer';
import categoryReducer from './categoryReducer';

export const reducers = combineReducers({ authReducer, productsReducer, categoryReducer });
