const fs = require('fs');
const dataFile = 'storage.dat';


let data = {};

//Helping methods
let validateKey = (key) => {
    if(typeof key !== 'string'){
        throw new Error('Key must be a string');
    }
};

let checkForRepeatedKey = (key) => {
    if(data.hasOwnProperty(key)){
        throw new Error('This key already exists.');
    }
};

let checkIfKeyExists = (key) => {
    if(!data.hasOwnProperty(key)){
        throw new Error('The key doesn`t exists');
    }
};


let clearAll = () => {
    data = {};
};


//Async with promises
// let save = (callback) => {
//     let dataString = JSON.stringify(data);

//     fs.writeFile(dataFile, dataString, (err) => {
//         if(err){
//             console.log(err);
//             return;
//         }

//         callback();
//     });
// };

let save = () => {

    return new Promise((resolve, reject) => {
        let dataString = JSON.stringify(data);
        
        fs.writeFile(dataFile, dataString, (err) => {
            if(err){
                reject(err);
                return;
            }

           resolve();
        });


    });

};




let load = () => {
    
    return new Promise((resolve, reject) => {
    fs.readFile(dataFile, 'utf8', (err, dataJSON) => {
        if(err){
            reject(err);
            return;
        }

        data = JSON.parse(dataJSON);
        resolve();
    });
    
       
    });

};




//Main methods
let put = (key, value) => {
    validateKey(key);
    checkForRepeatedKey(key);

    data[key] = value;
    console.log(data);
};


let get = (key) => {
    validateKey(key);
    checkIfKeyExists(key);

    return data[key];
};


let update = (key, value) => {
    validateKey(key);
    checkIfKeyExists(key);
    
    data[key] = value;
};


let deleteItem = (key) => {
    validateKey(key);
    checkIfKeyExists(key);

    delete data[key];
};









//Exports main methods
module.exports = {
    put: put,
    get: get,
    update: update,
    delete: deleteItem,
    clear: clearAll,
    save: save,
    load: load

};

