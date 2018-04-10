import { firebaseApp } from ".";
import {navigate} from '../components/NavigationServices';
import LoginActions from '../redux/LoginRedux';
import {store} from '../redux/createStore';

export class Shop {
    static getProductList(shopId) {
        return new Promise((resolve, reject) => {
            firebaseApp.database().ref(`products/${shopId}`).once('value').then((snapshot)=>{
                resolve(snapshot.val());
            }).catch((err)=>{
                reject(err);
            });
        });
    }

    static updateProductList(shopId, productList) {
        return new Promise((resolve, reject) => {
            firebaseApp.database().ref(`products/${shopId}`).set(productList).then(()=>{
                resolve();
            }).catch((err)=>{
                reject(err);
            });
        });
    }
}