// 🔥 Template Engine kya hota hai?
// 👉 Template Engine ek tool hota hai jo HTML ko dynamically generate karta hai using data.
// 👉 “A template engine is used to generate dynamic HTML by combining templates with data.
// EJS - embdeded js (popular template engines)


// import express from "express";
// const app =  express()
// app.set('view engine', 'ejs') //use to register template Engine
// app.get("/", (req,res)=>{
//     res.render('home',{name:"Akshit", post:"Software developer"});
// })
// app.listen(3200);



import express from "express";
const app =  express();
app.use(express.urlencoded({extended:false}));
app.set("view engine", 'ejs');
app.get("/add-user", (req,res)=>{
    res.render('addUser');
});
app.post("/submit-user", (req,res)=>{
    console.log(req.body)
    res.render('submitUser',req.body)
});
app.listen(3200);