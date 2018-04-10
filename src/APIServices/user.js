import { firebaseApp } from ".";

export class User {
    static register(email, password, type) {
        return new Promise((resolve, reject) => {
        firebaseApp.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
            firebaseApp.database().ref(`user/${user.uid}`)
            .update({email, type, walletBalance: 0}).then(()=>{
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
                
            }
        });
    }

}