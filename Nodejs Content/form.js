// const http = require('http')
// http.createServer((req,res)=>{
//     res.writeHead(200, {'content-type':'text/html'})
//     if(req.url == '/') {
//     res.write(`
//             <form action="/submit" method="post">
//             <input type="text" placeholder="Enter Your Name" name="name" />
//             <input type="text" placeholder="Enter Your Email" name="Email" />
//             <button>Submit</button>
//             </form>
//         `)}
//         else if (req.url == '/submit'){
//             res.write('<h1>Data Saved Successfully !!</h1>');
//         }
//     res.end();
// }).listen(3200)

//get the data of form (form.html) here (js file).

// const http = require('http')
// const fs = require('fs')
// http.createServer((req,res)=>{
//     fs.readFile('html/form.html', 'utf-8', (err,data)=>{
//         if(err){
//             res.writeHead(500, {"content-type":'text/plain'})
//             res.write('Internal Server Error');
//             return;
//         }
//         res.writeHead(200, {"content-type":'text/html'})
//         if (req.url == '/'){
//             res.write(data)
//         }
//         else if(req.url=='/submit'){
//             res.write('<h1>Data saved successfully</h1>')
//         }
//         res.end();
//     })
// }).listen(3400)



const http = require("http");
const fs = require("fs");
const query = require('querystring')

http.createServer((req, res) => {
    if (req.url == "/") {
      fs.readFile("html/form.html", "utf-8", (err, data) => {
        if (err) {
          res.writeHead(500, { "content-type": "text/plain" });
          res.write("Internal Server Error");
          return;
        }
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      });
    }else if (req.url == '/submit' && req.method =="POST"){

        let dataBody = [];
        req.on('data', (chunk)=>{
            dataBody.push(chunk);
        })
        req.on('end', ()=>{
            let rawData = Buffer.concat(dataBody).toString();
            let readableData = query.parse(rawData)
            console.log(readableData)

            res.writeHead(200, { "content-type": "text/html" });
            res.write(`<h1>Name : ${readableData.name}</h1>`)
            res.write(`<h1>Email : ${readableData.Email}</h1>`)
            res.end();
        })
    }
  }).listen(3500);

// const http = require("http");
// const fs = require("fs");
// const query = require("querystring");

// http
//   .createServer((req, res) => {
//     if (req.url === "/favicon.ico") {
//       res.writeHead(204);
//       return res.end();
//     }
//     if (req.url == "/") {
//       fs.readFile("html/form.html", "utf8", (err, data) => {
//         if (err) {
//           res.writeHead(500, { "content-type": "text/plain" });
//           res.write("Internal Server Error");
//           return;
//         }
//         res.writeHead(200, { "content-type": "text/html" });
//         res.end(data);
//       });
//     } else if (req.url == "/submit") {
//       let dataBody = [];
//       req.on("data", (chunk) => {
//         dataBody.push(chunk);
//       });
//       req.on("end", () => {
//         let rawData = Buffer.concat(dataBody).toString();
//         let readableData = query.parse(rawData);
//         console.log(readableData);

        // res.write(`<h1>Name : ${readableData.name}</h1>`)
        // res.write(`<h1>Email : ${readableData.Email}</h1>`)
        // res.write(`<h1>Age : ${readableData.age}</h1>`)

        // by syncronus way

        // let dataString =
        //   "My name is " +
        //   readableData.name +
        //   " and my email is " +
        //   readableData.Email;
        // res.end(dataString);
        // fs.writeFileSync("text/" + readableData.name + ".txt", dataString);
        // console.log("File Created");

        // // by asynncronous way
        // let dataString =
        //   "My name is " +
        //   readableData.name +
        //   " and my email is " +
        //   readableData.Email;
        //   res.writeHead(200, { "content-type": "text/html" });
        //   res.write(dataString)
        // fs.writeFile(
        //   "text/" + readableData.name + ".txt",
        //   dataString,
        //   "utf-8",
        //   (err) => {
        //     if (err) {
        //       res.end("Internal Server Error");
        //       return;
        //     } else {
        //       console.log("File Created");
        //     }
            // res.end("<h1>Data saved</h1>");
        //   },
        // );
  //     });
  //   }
  // })
  // .listen(3600);
