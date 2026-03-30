// 👉 Middleware ek function hota hai jo request aur response ke beech me run hota hai

// 👉 Middleware is a function in Express.js that has access to the request object (req), response object (res), and the next function, and it is used to process requests before sending a response.

//Next() - next k mltb middleware se aage bd jaay route k upr 

// eg - ek user ek website visit krna cha rha hai ab us website mei ye hai ki usmei phle login krna hoga tb hi age visit hogi aage pages khulnge.ab hum middleware mei check kr lnge page load krwane se phle ki user logged in hai y nhi hai..


// import express from 'express'
// const app = express()

// // function checkRoute(req,res,next){
// //     console.log(req.url); ///to check user knsa page cha rha hai.
// //     next();
// // }

// or we can write like below 

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



// import express from 'express'
// const app = express()
// function ageChecker(req,res,next){
//     if(!req.query.age || req.query.age<=18){
//         res.send("Alert ! You Can Not Visit this Page")
//     }
//     else{
//         next();
//     }
// }
// app.use(ageChecker);
// app.get("/",(req,res)=>{
//     res.send("Home Page");
// })
// app.get("/user",(req,res)=>{
//     res.send("Users Page");
// })
// app.get("/products",(req,res)=>{
//     res.send("Products Page");
// })
// app.listen(3200);/



// route middleware🔽
// 👉 Route middleware is a middleware function that is applied to a specific route in an Express application and runs only when that particular route is requested.(jo specific route pe apply kia jaa ske.)


// import express from 'express';
// const app = express();

// function checkAge(req,res,next){
//     if(!req.query.age || req.query.age<=18){
//         res.send("You are not allowed to visit this website")
//     }
//     next();
// }

// app.get("",(req,res)=>{
//     res.send("Home Page");
// })
// app.get("/login",(req,res)=>{
//     res.send("Login Page");
// })
// app.get("/user", checkAge,(req,res)=>{
//     res.send("Users Page"); 
// })
// app.get("/products",(req,res)=>{
//     res.send("Products Page");
// })
// app.listen(3200);



// 🔥 Built-in Middleware
// 👉 Built-in middleware are the functions that come pre-defined in Express.js and are used to handle common tasks like parsing request data and serving static files.
// Use:
// JSON data ko parse karta hai
// Mostly API me use hota hai


// import express from 'express'
// import path from 'path';
// const app=express()
// app.use(express.urlencoded({extended:false}));  //builtin middleware in express->urlencoded (req.body chlane k liye hai ye)
// app.get("", (req,res)=>{
//     res.send("Home Page")
// })

// app.use(express.static('public')); //builtin middleware
// app.get("/login", (req,res)=>{
//     const abspath = path.resolve("public/builtin_middlewaare.html")
//     res.sendFile(abspath)
// })
// app.post("/submit", (req,res)=>{
//     console.log(req.body);
//     res.send("Login Successfully")
// })
// app.get("/user", (req,res)=>{
//     res.send("user Page")
// })
// app.listen(3400);





// 👉 External middleware are middleware functions that are not built into Express and need to be installed separately using npm.


// 🔥 Logs kya hote hain🔽
// 👉 Logs wo records hote hain jo server ya application me hone wali activities ko store karte hain.


// import express from 'express';
// import morgan from 'morgan';// eke ye hai or cors hai jo backend ko connect krne k kaam ata hai frontent se.
// const app = express();
// app.use(morgan("dev"))//logs ko show krne k liye
// app.get("/",(req,res)=>{
//     res.send("Home Page");
// })
// app.get("/user",(req,res)=>{
//     res.send("Users Page"); 
// })
// app.get("/wait",(req,res)=>{
//     setTimeout(()=>{
//         res.send("Result after 1 sec")
//     }, 1000);
// })
// app.listen(3200);



// error handling middlewaren🔽
// 👉 Error handling middleware is a special type of middleware in Express that is used to handle errors of routes in the application.


import express from "express";
const app = express()
app.get("", (req,res)=>{
    res.send("Home Page");
})
app.get("/users", (req,res)=>{
    res.send1("Users Page");
})
app.get("/error", (req,res)=>{
    res.send("Error Page");
    // forcefully error generate 
    const error = new Error("")
    error.status=404;
    next(error); 
})
app.use((err, req, res, next)=>{
    res.status(err.status || 500).send("Try after some time");
})
app.listen(3200)