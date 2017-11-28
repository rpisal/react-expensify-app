import * as firebase from 'firebase';
import { setTimeout } from 'timers';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBpIAqT5hfE3tq5mwO8yBvQi-eaC3blB4g",
    authDomain: "expensify-341d1.firebaseapp.com",
    databaseURL: "https://expensify-341d1.firebaseio.com",
    projectId: "expensify-341d1",
    storageBucket: "expensify-341d1.appspot.com",
    messagingSenderId: "1073946829318"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };