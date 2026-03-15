// // const http=require("http");
// // const myServer=http.createServer((req,res)=>{
// //     console.log("new Request Recieved");
// //     res.end("Hello From Server");
// //     Console.log(req.headers);
// // });
// // myServer.listen(8000,()=>console.log("Server Started"));



// // const http = require("http");
// // const fs = require("fs");

// // const myServer = http.createServer((req, res) => {
// //     const log = `${Date.now()} : ${req.url} New Request Rec.\n`;
// //     console.log(log,data);

// //     fs.appendFile("log.txt", log, (err,data) => {
// //         if (err) {
// //             console.error("Error writing to log file:", err);
// //         }
// //     });

// //     switch (req.url) {
// //         case "/":
// //             res.end("homepage");
// //             break;
// //         case "/about":
// //             res.end("about page");
// //             break;
// //         case "/contact":
// //             res.end("contact page");
// //             break;
// //         default:
// //             res.end("error 404");
// //             break;
// //     }
// // });

// // myServer.listen(8000, () => console.log("server started on port 8000"));




// const http = require("http");
// const fs = require("fs");

// const myServer = http.createServer((req, res) => {
//     const log = `${Date.now()} : ${req.url} New Request Rec.\n`;
//     console.log(log,data);

//     fs.appendFile("log.txt", log, (err,data) => {
//         if (err) {
//             console.error("Error writing to log file:", err);
//         }
//     });

//     switch (req.url) {
//         case "/":
//             res.end("homepage");
//             break;
//         case "/about":
//             res.end("about page");
//             break;
//         case "/contact":
//             res.end("contact page");
//             break;
//         default:
//             res.end("error 404");
//             break;
//     }
// });

// myServer.listen(8000, () => console.log("server started on port 8000"));






















// create directory 
const fs = require("fs");

fs.mkdirSync("./New Folder");

