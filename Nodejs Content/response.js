const http = require('http');
const age = 21;
http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html") //server khta hai browser ko mai html bhj rha hun.
    res.write(`
        <html>
        <head>
        <title>Basic of Backend</title>
        </head>
        <body>
        <h3>Hello this is Akshit Saxena</h3>
        <h2>`+age+`</h2>
        <h2>`+new Date+`</h2>
        </body>
        </html>
        `)
    res.end();
    process.exit();
}).listen(4800);


