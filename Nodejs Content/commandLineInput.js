// const arg = process.argv;
// console.log("---------",arg[3])


// dynamic port making
const http = require('http');
const arg = process.argv;
const port = arg[2];
http.createServer((req,res)=>{
    res.write("Testing input from CMD")
    res.end();
}).listen(port);