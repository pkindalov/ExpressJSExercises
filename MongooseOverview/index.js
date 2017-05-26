const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mycustomexpressdb', (err) => {
    if(err){
        console.log(err);
        return;
    }

    let Cat = mongoose.model('Cat', {
        name: {type: String, required: true},
        age: {type: Number}
    });


    let cat = new Cat({
        name: 'Bai Ivan',
        age: 14
    });

    // cat
    //     .save()
    //     .then(cat => {
    //         console.log(cat);
    //     });

    // Cat
    //     .findById('5928b94908c2641658f294b6')
    //     .then(data => {console.log(data)});

    // Cat
    //     .find({})
    //     .then(data => {console.log(data);});


    Cat
        .find({})
        .exec()
        .then(cats => {
            console.log(cats);
        });


});