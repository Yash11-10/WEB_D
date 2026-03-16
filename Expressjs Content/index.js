// const express = require('express');
// const app = express();
// app.get("", (req, res) => {
//   res.send("<h1>Basic nodejs example</h1>");
// });
// app.get("/about", (req, res) => {
//   res.send("<h1>This is about page</h1>");
// });
// app.get("/contact", (req, res) => {
//   res.send("<h1>This is contact page</h1>");
// });
// app.listen(3400);



// const express = require('express');
// const app = express();
// app.get("", (req,res)=>{
//     res.send("<h1>This is khud ki trial<h1>");
// })
// app.listen(3200);

// we cam write either in above way or bellow way
// const express = require('express')()



// server🔽
// app k andr sb hota hai server sare put patch dlt .
// app.get("path", callbback funtion with req and res param )
// const express = require('express');
// const app = express();
// app.get("/", (req,res)=>{
// res.send("Home page")
// })
// app.get("/about", (req,res)=>{
// res.send("About page")
// })
// // ab jaise yhn 2 same hai to phle vala browser ppe show hoga ye neeche vala show nhi hoga
// app.get("/", (req,res)=>{
// res.send("Home page 2")
// })
// app.listen(3200);



// const express = require('express'); //this is vanilla js k syntax and this is old way to use
// yhn hum dusri file se connect kr rhe hai, function vobhi
// ecma script k use esliye nhi kr skte kyki package json mei type common js hota hai vo use krne k ;iye module krna pdega type 
import express from "express"; // this is Ecmascript syntax. or ye tb chlega jb package json mei tume type mei module kroge commmon js ki jgy
import home from "./pages/home.js";
import about from "./pages/about.js";
const app = express();
app.get("", (req, res) => {
  res.send(home());
});
app.get("/about", (req, res) => {
  res.send(about());
});
app.listen(3400);