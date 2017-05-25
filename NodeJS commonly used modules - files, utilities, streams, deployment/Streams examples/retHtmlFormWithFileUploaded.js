const http = require('http');
const query = require('querystring');
const formidable = require('formidable');
const fs = require('fs');
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
            let form  = new formidable.IncomingForm();

            form.parse(req, (err, fields, files) => {
                if(err){
                    console.log(err);
                    return;
                }

                console.log(fields);
               let uploadFiles = files.upload;
               fs.rename(uploadFiles.path, './'  + uploadFiles.name, (err) => {
                   if(err){
                       console.log(err);
                       return;
                   }

                   console.log('Saved');

                   res.write('Thank you :) ');
                   res.end();
               });

            });

        }
     })
     .listen(port);

     console.log("Server listening on port " + port);