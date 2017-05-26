const mongodb = require('mongodb');

let connection = 'mongodb://localhost:27017/mycustomexpressdb';

mongodb.MongoClient.connect(connection, (err, db) => {
    if(err){
        console.log(err);
        return;
    }

    let cats = db.collection('cats');

    // cats
    //     .insertMany([
    //         {'name': 'Vankata', 'age':15},
    //         {'name': 'Pesho', 'age':5},
    //         {'name': 'Plamen', 'age':1},
    //         {'name': 'Dichoni', 'age':25, 'color': 'yellow'}
    //     ], (err, result) => {
    //         if(err){
    //             console.log(err);
    //             return;
    //         }

    //         console.log(result);
    //     });


    cats
        .find({'name':'Vankata'})
        .toArray((err, data) => {
               if(err){
                console.log(err);
                return;
            }
            console.log(data);
        });


});