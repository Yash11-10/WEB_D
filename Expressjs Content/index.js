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
// import express from "express"; // this is Ecmascript syntax. or ye tb chlega jb package json mei tume type mei module kroge commmon js ki jgy
// import home from "./pages/home.js";
// import about from "./pages/about.js";
// const app = express();
// app.get("", (req, res) => {
//   res.send(home());
// });
// app.get("/about", (req, res) => {
//   res.send(about());
// });
// app.listen(3400);

// connect html elements and forms 🔽

// import express from 'express'
// import home from './pages/home.js'
// import login from './pages/login.js'
// import submit from './pages/submit.js'
// const app = express()
// app.get("", (req,res)=>{
//     res.send(home());
// })
// app.get("/login", (req,res)=>{
//     res.send(login());
// })
// app.post("/submit", (req,res)=>{
//     res.send(submit());
// })
// app.listen(3400);

// vdo 29

// connect html file

// import express from 'express'
// import path from 'path'
// const app = express()
// app.get("/",(req,res)=>{
//     const abspath = path.resolve('html/home.html')
//     res.sendFile(abspath)
// })
// app.listen(3200);

// after MVC ARCHITECTURE -------------------------------------------
// vdo Number 42

// dynamic routes
// 👉 “Dynamic routes are routes that accept parameters and generate responses based on those parameters.”

// import express from "express";
// const app = express();
// app.get("/", (req, res) => {
//   const users = ["harsh", "yash", "raj", "shivam"];
//   let data = "<ul>";
//   for (let i = 0; i < users.length; i++) {
//     data += `<li><a href="user/${users[i]}">Hey! open ${users[i]} profile</a></li>`;
//     // console.log(users[i]);
//   }
//   data += "</ul>";
//   res.send(data);
// });
// app.get("/user/:name", (req, res) => {
//   console.log(req.params.name);
//   const userName = req.params.name;
//   const capitalName = userName.charAt(0).toUpperCase() + userName.slice(1);
//   res.send(`This is ${capitalName}'s Profile`);
// });
// app.listen(3400);



// vdo43
import express from 'express';
import userData from "./user.json" with {type:'json'}
const app = express();
app.get("",(req,res)=>{
  console.log(userData)
  res.send(userData);
})
app.get("/user/:id", (req,res)=>{
  const id = req.params.id
  console.log(id)
  let filterData = userData.filter((user)=>user.id==id)
  res.send(filterData)
})
app.get("/username/:name", (req,res)=>{
  const name = req.params.name
  console.log(name)
  let filterData = userData.filter((user)=>user.name.toLowerCase()==name.toLowerCase())
  res.send(filterData)
})
app.listen(3400);