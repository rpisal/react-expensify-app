import * as firebase from 'firebase';

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

database.ref().set({
    name: 'Rahul Pisal',
    age: 41,
    isSingle: false,
    location: {
        city: 'Dubai',
        country: 'UAE'
    }
});

// database.ref().set('This is my data');

database.ref('age').set(42);
database.ref('location/city').set('Abu Dhabi');

database.ref('attributes').set({
    height: 73,
    weight: 170
});