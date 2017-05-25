let cluster = require('cluster');
let http = require('http');
let port = 1337;
let cpus = require('os').cpus().length;     //get the count of computers cores by os environment

if(cluster.isMaster){
    for(let i = 0; i < cpus; i ++){
        cluster.fork();
    }
}else{
    http.createServer((req, res) => {
        res.write('Hi :) !');
        res.end();
    })
    .listen(port);
}


//TO REMEMBER: MUST START INDEX.JS FROM TERMINAL NOT THROUGH VISUAL STUDIO CODE
//ON TERMINAL SERVER WILL START WIT COMMAND - node index.js