import express from 'express'
import path from 'path'
import home from './pages/home.js'
import login from './pages/login.js'
import submit from './pages/submit.js'
import about from './pages/about.js'
import notFund from './pages/notFound.js'
const app = express()


const publicPath = path.resolve('public') 

// " Ye neeche vali line Express ko bolti hai: public folder ke andar jo bhi files hain, unhe directly browser ko serve kar do"
app.use(express.static(publicPath)) //ye static esmei check kregi ki koi bhi static file y link hai to usko sbse phle public k path dena hai or uske baad aage k mei add krdena hai or uske baad file load ho jygi

app.get("", (req,res)=>{
    const abspath = path.resolve("html/home.html")
    res.sendFile(abspath);
})
app.get("/about", (req,res)=>{
    res.send(about());
})
app.get("/login", (req,res)=>{
    res.send(login());
})
app.post("/submit", (req,res)=>{
    res.send(submit());
})

// ek multiple purpose function hai or middleware function hai 
app.use((req, res) => {
    res.status(404).send(notFund());
});
app.listen(3400);