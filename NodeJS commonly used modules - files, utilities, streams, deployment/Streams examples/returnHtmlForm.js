const http = require('http');
const query = require('querystring');
const port = 1337;

//How to return a regular html form with readable stream. 


http
     .createServer((req, res) => {
        if(req.method === 'GET'){

            res.writeHead(200, {
                'Content-Type':  'text/html'
            });

            res.write(`
                <form method="POST">
                    <input type="text" name="username" /><br />
                    <input type="password" name="password" /><br />
                    <input type="submit" value="Send" />
                </form>
            `);

            res.end();
        } else if(req.method === "POST"){
            let result = '  ';
            req.on('data', data => {result += data;});
            req.on('end', () => {
                let parsedResult = query.parse(result);
                console.log(parsedResult.username);
                console.log(parsedResult.password);
            });

            res.write('Thank you :) ');
            res.end();
        }
     })
     .listen(port);

     console.log("Server listening on port " + port);