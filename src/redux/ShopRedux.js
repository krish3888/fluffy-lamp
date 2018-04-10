import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  getProductList: ['shopId'],
  updateProductList: ['shopId','productList'],
  updatedProductList:[],
  requestLogout: null,
  fetchedProductList:['prodList'],
  authStateChanged: ['userObj'], 
  setLoginError:['error']
});

export const ShopTypes = Types;
export default Creators;


/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  prodList: [],
  loading: false,
});

/* ------------- Reducers ------------- */

export const getProductList = (state = INITIAL_STATE, action) =>  {
  return {...state, loading: true};
};

export const updateProductList = (state = INITIAL_STATE, action) =>  {
  return {...state, loading: true};
};

export const updatedProductList = (state = INITIAL_STATE, action) =>  {
  return {...state, loading: false};
};

export const setLoginError = (state = INITIAL_STATE, action) => {
  return { ...state, loginError:action.error };
};

export const fetchedProductList = (state = INITIAL_STATE, action) => {
  return { ...state, prodList:action.prodList, loading:false };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PRODUCT_LIST]: getProductList,
  [Types.UPDATE_PRODUCT_LIST]: updateProductList,
  [Types.SET_LOGIN_ERROR]: setLoginError,
  [Types.UPDATED_PRODUCT_LIST]: updatedProductList,
  [Types.FETCHED_PRODUCT_LIST]: fetchedProductList
});
