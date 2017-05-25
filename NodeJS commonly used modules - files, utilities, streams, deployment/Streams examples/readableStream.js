const fs = require('fs');
const filename = 'index.js';

let readStream = fs.createReadStream(filename);
let result = [];
let resultWithString = '';

readStream.on('data', (data) => {
    result.push(data);
    resultWithString += data;
});

readStream.on('end', () => {
    console.log('with array: ');
    console.log(result);
    console.log('wiht string: ');
    console.log(resultWithString);
});


