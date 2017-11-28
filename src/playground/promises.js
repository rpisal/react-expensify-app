const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Rahul',
        //     age: 41
        // });
        reject('Something went wrong');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log(error);
});

console.log('after');