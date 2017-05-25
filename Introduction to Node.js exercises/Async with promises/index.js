const storage = require('./storage');

storage.put('first', 'some value');
storage.put('second', true);
storage.put('third', 1);


let someValue = storage.get('first');
console.log(someValue);

storage.update('first', 'another value');

let anotherValue = storage.get('first');
console.log(anotherValue);

storage.delete('first');
// let deletedValue = storage.get('first');
// console.log(deletedValue);
storage.clear();
storage.put('second', true);
storage.put('third', 1);


// storage.save(() => {
//     storage.clear();
//     storage
//         .load()
//         .then(() => {
//             let afterLoadValue = storage.get('second');
//             console.log(afterLoadValue);

//         });

// });

storage
    .save()
    .then(() => {
        storage.clear();
        storage
            .load()
            .then(() => {
                let afterLoadValue = storage.get('second');
                console.log(afterLoadValue);
            });

    });