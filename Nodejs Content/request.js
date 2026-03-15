const http = require('http');
http.createServer((req,res)=>{
    console.log(req.method) //yhn pe ye console.log brwoser k consolelog pe nhi server k pe chlega mtlb yhin terminal pe
    if(req.url=="/"){
        res.write("<h1>Home Page</h1>")
    }
    else if(req.url=="/login"){
        res.write("<h1>Login Page</h1>")
    }
    else{
        res.write("<h1>Other Page</h1>")
    }
    res.end()
}).listen(5600)