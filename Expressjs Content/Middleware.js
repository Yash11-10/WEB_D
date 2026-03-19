// 👉 Middleware ek function hota hai jo request aur response ke beech me run hota hai

// 👉 Middleware is a function in Express.js that has access to the request object (req), response object (res), and the next function, and it is used to process requests before sending a response.

// eg - ek user ek website visit krna cha rha hai ab us website mei mei ye hai ki usmei phle login krna hoga tb hi age visit hogi aagr pages khulnge.ab hum middleware mei check kr lnge page load krwane se phle ki user logged in hai y nhi hai..


// import express from 'express'
// const app = express()

// // function checkRoute(req,res,next){
// //     console.log(req.url); ///to check user knsa page cha rha hai.
// //     next();
// // }

// app.use((req,res,next)=>{
//     console.log(req.url); ///to check user knsa page cha rha hai.
//     next();
// });

// app.get("/",(req,res)=>{
//     res.send("Home Page");
// })
// app.get("/user",(req,res)=>{
//     res.send("Users Page");
// })
// app.get("/products",(req,res)=>{
//     res.send("Products Page");
// })
// app.listen(3200);



import express from 'express'
const app = express()
function ageChecker(req,res,next){
    if(!req.query.age || req.query.age<=18){
        res.send("Alert ! You Can Not Visit this Page")
    }
    else{
        next();
    }
}
app.use(ageChecker);
app.get("/",(req,res)=>{
    res.send("Home Page");
})
app.get("/user",(req,res)=>{
    res.send("Users Page");
})
app.get("/products",(req,res)=>{
    res.send("Products Page");
})
app.listen(3200);