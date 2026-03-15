const http = require("http");
const userForm = require('./userForm');
const userDataSubmit = require('./userDataSubmit');

http.createServer((req, res) => {
    if(req.url=='/' && req.method === 'GET'){
        res.writeHead(200, {'content-type' : 'text/html'})
        userForm(req,res);
        res.end();
    }
    else if(req.url=='/submit' && req.method === 'POST'){
        userDataSubmit(req,res);
    }
  }).listen(3200);

