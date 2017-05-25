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


//Async with callbacks
let save = (callback) => {
    let dataString = JSON.stringify(data);

    fs.writeFile(dataFile, dataString, (err) => {
        if(err){
            console.log(err);
            return;
        }

        callback();
    });
};


let load = (callback) => {
    // let dataAsString = fs.readFileSync(dataFile, 'utf8');
    // let data = JSON.parse(dataAsString);

    fs.readFile(dataFile, 'utf8', (err, dataJSON) => {
        if(err){
            console.log(err);
            return;
        }

        data = JSON.parse(dataJSON);
        callback();
        // let loadedData = JSON.parse(dataJSON);
        // callback(loadedData);
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

