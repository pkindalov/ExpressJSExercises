let fs = require('fs');

fs.readFile('index.js', 'utf8', (err, data) => {
    console.log(data);
});