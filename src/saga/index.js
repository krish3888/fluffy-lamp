import loginSaga from './LoginSaga';
import shopSaga from './ShopSaga';
/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield [
    loginSaga(),
    shopSaga()
  ];
}
