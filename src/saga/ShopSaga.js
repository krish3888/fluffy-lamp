import {put, call, fork, select} from 'redux-saga/effects';
import {Shop as ShopServices} from '../APIServices/shop';
import {takeLatest} from 'redux-saga/effects';
import _ from 'lodash';
import {NavigationActions} from 'react-navigation';
import {ShopTypes} from '../redux/ShopRedux';
import ShopActions from '../redux/ShopRedux';
import {navigate} from '../components/NavigationServices';

function* getProductList(action) {
    try {
      const list = yield call(ShopServices.getProductList, action.shopId);
      yield put(ShopActions.fetchedProductList(list));
    } catch(err) {
      alert(err.toString());
    }
}

function* updateProductList(action) {
    try {
      const list = yield call(ShopServices.updateProductList, action.shopId, action.productList);
      yield put(ShopActions.updatedProductList());
    } catch(err) {
      alert(err.toString());
    }
}

function* getShopList(action) {
  try {
    const list = yield call(ShopServices.getShopList);
    yield put(ShopActions.fetchedShopList(list));
  } catch(err) {
    alert(err.toString());
  }
}

function* updateProductListListener() {
  yield takeLatest(ShopTypes.UPDATE_PRODUCT_LIST, updateProductList);
}

function* getProductListListener() {
  yield takeLatest(ShopTypes.GET_PRODUCT_LIST, getProductList);
}

function* getShopListListener() {
  yield takeLatest(ShopTypes.GET_SHOP_LIST, getShopList);
}

export default function* shopSaga() {
  yield fork(getProductListListener);
  yield fork(getShopListListener);
  yield fork(updateProductListListener);
}
