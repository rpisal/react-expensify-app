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

database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 34647656687667
});

database.ref('expenses').push({
    description: 'Phone Bill',
    note: '',
    amount: 5900,
    createdAt: 34647656687634
});

database.ref('expenses').push({
    description: 'Food',
    note: '',
    amount: 1200,
    createdAt: 34647656687609
});

// database.ref('notes').push({
//     body: 'This is my note',
//     title: 'First note'
// });

// const firebaseNotes = {
//     notes:  {

//     }
// }

// const notes = [
//     {
//         id: 12,
//         body: 'This is my note',
//         title: 'First note'
//     },
//     {
//         id: 61,
//         body: 'This is my note',
//         title: 'Second note'
//     }
// ];

//database.ref('notes').set(notes);

// database.ref().set({
//     name: 'Rahul Pisal',
//     age: 42,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Dubai',
//         country: 'UAE'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('error:', e);
// });

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//         console.log(snapshot.val());
// }, (e) => {
//     console.log('Error: ' + e);
// });

// setTimeout(() => {
//     database.ref('age').set(43);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(45);
// }, 10500);

// database.ref().set('This is my data');

// database.ref('age').set(42);
// database.ref('location/city').set('Abu Dhabi');

// database.ref('attributes').set({
//     height: 73,
//     weight: 170
// }).then(() => {
//     console.log('Second set worked!');
// }).catch((e) => {
//     console.log('error:', e);
// });

// database.ref('isSingle').remove().then(() => {
//     console.log('data removed successfully');
// }). catch((e) => {
//     console.log('Something went wrong, ', e);
// });

// database.ref()
//     .update({
//        stressLevel: 9,
//        'job/company': 'Amazon',
//        'location/city': 'Sharjah'
//     }).then(() => {
//         console.log('successfully updated');
//     }).catch((e) => {
//         console.log('error: ', e);
//     });