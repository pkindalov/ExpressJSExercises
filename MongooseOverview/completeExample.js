const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let Cat = mongoose.model('Cat', {
    name: {type: String, default: ' '},
    age: {type: Number, default: 0}
});

let Owner = mongoose.model('Owner', {
    name: {type: String, required: true, index: true, unique: true},
    cats: [Cat.schema]
});


mongoose
            .connect('mongodb://localhost:27017/mycustomexpressdb' )
            .then(() => {
                let myrkins = new Cat({'name': 'Myrkins', 'age': 1});
                let malcho = new Cat({'name': 'Malcho', 'age': 1});
                new Owner({'name': 'IK',  cats: [myrkins, malcho]}).save().then((ik) => {
                    console.log(ik);
                });
            });