import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  requestLogin: ['email', 'password'],
  requestRegister: ['email','password', 'userType'],
  registerComplete:[],
  requestLogout: null,
  fetchedCurrentUser:['userObj'],
  authStateChanged: ['userObj'], 
  setLoginError:['error']
});

export const LoginTypes = Types;
export default Creators;


/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  currentUser: null,
  loading: false,
  loginError:null
});

/* ------------- Reducers ------------- */

export const requestLogin = (state = INITIAL_STATE, action) =>  {
  return {...state, loading: true};
};

export const requestRegister = (state = INITIAL_STATE, action) =>  {
  return {...state, loading: true};
};

export const registerComplete = (state = INITIAL_STATE, action) =>  {
  return {...state, loading: false};
};

export const setLoginError = (state = INITIAL_STATE, action) => {
  return { ...state, loginError:action.error };
};

export const fetchedCurrentUser = (state = INITIAL_STATE, action) => {
  return { ...state, currentUser:action.userObj };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST_LOGIN]: requestLogin,
  [Types.REQUEST_REGISTER]: requestRegister,
  [Types.SET_LOGIN_ERROR]: setLoginError,
  [Types.REGISTER_COMPLETE]: registerComplete,
  [Types.FETCHED_CURRENT_USER]: fetchedCurrentUser
});
