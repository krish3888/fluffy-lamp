import {put, call, fork, select} from 'redux-saga/effects';
import {User as UserServices} from '../APIServices/user';
import {takeLatest} from 'redux-saga/effects';
import _ from 'lodash';
import {NavigationActions} from 'react-navigation';
import {LoginTypes} from '../redux/LoginRedux';
import LoginActions from '../redux/LoginRedux';
import {navigate} from '../components/NavigationServices';

function* requestRegisterData(action) {
    try {
      const user = yield call(UserServices.register, action.email, action.password, action.userType);
      yield put(LoginActions.registerComplete());
    } catch(err) {
      alert(err.toString());
    }
}

function* authStatusChanged(action) {
  yield call(UserServices.subscribeListeners);
}

function* requestLogoutData(action) {

}

function* requestLoginData(action) {
  try {
    const user = yield call(UserServices.login, action.email, action.password);
    yield put(LoginActions.registerComplete());
  } catch(err) {
    alert(err.toString());
  }
}

function* loginRequestListener() {
  yield takeLatest(LoginTypes.REQUEST_LOGIN, requestLoginData);
}

function* registerRequestListener() {
  yield takeLatest(LoginTypes.REQUEST_REGISTER, requestRegisterData);
}
function* authStatusListener() {
  yield takeLatest(LoginTypes.AUTH_STATE_CHANGED, authStatusChanged);
}
function* logoutRequestListener() {
  yield takeLatest(LoginTypes.REQUEST_LOGOUT, requestLogoutData);
}

export default function* loginSaga() {
  // yield fork(loginRequestListener);
  yield fork(registerRequestListener);
  yield fork(authStatusListener);
  yield fork(logoutRequestListener);
}
