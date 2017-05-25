const http = require('http');
const query = require('querystring');
const port = 1337;

http
     .createServer((req, res) => {
        if(req.method === 'GET'){

            res.writeHead(200, {
                'Content-Type':  'text/html'
            });

            res.write(`
                <form method="POST" enctype="multipart/form-data">
                    <input type="text" name="username" /><br />
                    <input type="password" name="password" /><br />
                    <input type="file" name="upload" /><br />
                    <input type="submit" value="Send" />
                </form>
            `);

            res.end();
        } else if(req.method === "POST"){
            let result = '  ';
            req.on('data', data => {result += data;});
            req.on('end', () => {
               console.log(result);
            });

            res.write('Thank you :) ');
            res.end();
        }
     })
     .listen(port);

     console.log("Server listening on port " + port);