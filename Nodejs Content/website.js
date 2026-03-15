const http = require("http");
const fs = require("fs");
// header  file
let collecHeaderData=fs.readFileSync("html/header.html", "utf-8");
http.createServer((req, res) => {
      if (req.url === "/favicon.ico") {
      res.writeHead(204);
      return res.end();
    }


    let file = "/home";
    if(req.url!='/'){
      file=req.url;
    } 


    if (req.url != "/style.css") {
      fs.readFile("html"+file+".html", "utf-8", (err, data) => {
        if (err) {
          res.writeHead(500, { "content-type": "text/plain" });
          res.end("Internal Server Error");
          return false;
        } else {
          res.writeHead(200, { "conetent-type": "text/html" });
          res.write(collecHeaderData+""+data);
          res.end();
        }
      });
    } else if (req.url == "/style.css") {
      fs.readFile("html/style.css", "utf-8", (err, data) => {
        if (err) {
          res.writeHead(500, { "content-type": "text/plain" });
          res.write("Css not Found");
          res.end();
          return false;
        } else {
          res.writeHead(200, { "conetent-type": "text/css" });
          res.write(data);
          res.end();
        }
      });
    } 
  }).listen(3200);
