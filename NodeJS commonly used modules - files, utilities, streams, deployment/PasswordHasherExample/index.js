let crypto = require('crypto');

let generateSalt = () => {
    return crypto.randomBytes(128).toString('base64');
};

let generatedHashedPassword = (salt, pwd) => {
    let hmac = crypto.createHmac('sha256', salt);
    return hmac.update(pwd).digest('hex');
};


let salt = generateSalt();
console.log("Salt: ");
console.log(salt);

let pass = 'pas123';
let hashedPass = generatedHashedPassword(salt, pass);

console.log("Hashed pass: ");
console.log(hashedPass);