import { firebaseApp } from ".";
import {navigate} from '../components/NavigationServices';
import LoginActions from '../redux/LoginRedux';
import {store} from '../redux/createStore';
export class User {
    static register(email, password, type) {
        return new Promise((resolve, reject) => {
        firebaseApp.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
            let userObj = {email, userType:type, key: user.uid }
            if (type === 'user') {
                userObj = {...userObj, walletBalance: 0}
            }
            firebaseApp.database().ref(`users/${user.uid}`)
            .update(userObj).then(()=>{
                resolve(user.toJSON());
            });
        }).catch((error) => {
            reject(error);
        });
        });
    }

    static subscribeListeners(token = '') {
        firebaseApp.auth().onAuthStateChanged(function(user) {
            let userObj = user;
            if (_.isFunction(_.get(userObj, 'toJSON'))) {
                userObj = user.toJSON();
            }
            // Fetch userName for the current user
            //
            if (userObj){
                firebaseApp.database().ref(`users/${userObj.uid}`).once('value').then((snapshot)=>{
                    store.dispatch(LoginActions.fetchedCurrentUser(snapshot.val()));
                    if (snapshot.val().userType === 'user') {
                        navigate('Home');
                    } else {
                        navigate('RetailerHome');
                    }
                });
            } else {
                navigate('Register');
            }
        });
    }

    static login(email, password) {
        return new Promise((resolve, reject) => {
            firebaseApp.auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                resolve(user.toJSON());
            }).catch((error) => {
                reject(error);
            });
        });
    }


}