import firebase from 'firebase';
import _ from 'lodash';

const firebaseConfig = {
    apiKey: "AIzaSyD0Lzg8R9OO7BmjNA3hXH_aHZ03XCfayqk",
    authDomain: "fluffy-lamp.firebaseapp.com",
    databaseURL: "https://fluffy-lamp.firebaseio.com",
    projectId: "fluffy-lamp",
    storageBucket: "fluffy-lamp.appspot.com",
    messagingSenderId: "623431164433"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const getCurrentUser = function() {
    if (_.isFunction(_.get(firebaseApp.auth(), 'currentUser.toJSON'))) { // logged in user
        return firebaseApp.auth().currentUser.toJSON();
    } else { // user is not logged in.
        return firebaseApp.auth().currentUser;
    }
}

export {
    firebaseApp,
    getCurrentUser
};
