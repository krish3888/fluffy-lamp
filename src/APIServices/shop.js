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

    static getShopList() {
        return new Promise((resolve, reject) => {
            firebaseApp.database().ref(`users/`).orderByChild('userType').equalTo('store').once('value').then((snapshot)=>{
                // console.log(snapshot.numChildren());
                // console.log(snapshot.val());
                let shopList=[]
                snapshot.forEach((item)=>{
                    shopList.push(item.val());
                    if(shopList.length === snapshot.numChildren()) {
                        resolve(shopList);
                    }
                })
                //resolve(snapshot.val());
            }).catch((err)=>{
                reject(err);
            });
        });
    }
}