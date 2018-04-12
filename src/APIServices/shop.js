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

    static getScannedProduct(shopId, barcodeNum) {
        console.log(barcodeNum+'');
        return new Promise((resolve, reject) => {
            firebaseApp.database().ref(`products/${shopId}`).orderByChild('barcodeNum').equalTo(parseInt(barcodeNum)).once('value').then((snapshot)=>{
                // console.log(snapshot.numChildren());
                // console.log(snapshot.val());
                // let shopList=[]
                if (snapshot.val() instanceof Array){
                    if(snapshot.val()[0]) {
                        resolve(snapshot.val()[0]);
                    } else if(snapshot.val()[1]){
                        resolve(snapshot.val()[1]);                        
                    }
                } else if (snapshot.val() instanceof Object){
                    const key = Object.keys(snapshot.val())[0];
                    resolve(snapshot.val()[key]);
                }
                 else {
                    reject('Product not found');
                }
            }).catch((err)=>{
                reject(err);
            });
        });
    }
}