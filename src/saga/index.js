import loginSaga from './LoginSaga';
/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield [
    loginSaga(),
  ];
}
