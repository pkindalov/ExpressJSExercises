const fs = require('fs');

let readStream = fs.createReadStream('index.js');
let writeStream = fs.createWriteStream('index.copy.js');


readStream
        .pipe(writeStream);