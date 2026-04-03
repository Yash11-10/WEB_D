// vdo 47
// import express from "express";
// import { MongoClient } from "mongodb"; //to connect from mongoDB.

// const dbName = "school";
// const url = "mongodb://localhost:27017"
// const client = new MongoClient(url)

// async function dbConnections(){
//     await client.connect() //connnect kia hai
//     const db = client.db(dbName) //select db
//     const collection = db.collection('students');
//     const result = await collection.find().toArray();
//     console.log(result);
// }
// dbConnections();
// const app = express()
// app.listen(3200);




// vdo 48 //mongodb k data fetch krke browser pe display kraya hai
// import express from "express";
// import { MongoClient } from "mongodb";
// const dbName = "school";
// const url = "mongodb://localhost:27017"
// const client = new MongoClient(url);
// const app = express();
// app.set('view engine','ejs');
// app.get("/",async (req,res)=>{
//     await client.connect();
//     const db = client.db(dbName);
//     const collection = db.collection('students');
//     const result = await collection.find().toArray();
//     console.log(result);
//     res.render('students',{result});
// })
// app.listen(3400);




// vdo 49
// import express from "express";
// import { MongoClient } from "mongodb";
// const dbName = "school"
// const url = "mongodb://localhost:27017"
// const client = new MongoClient(url)
// const app = express();
// app.set('view engine','ejs');
// client.connect().then((connection)=>{
//     const db = connection.db(dbName);
//     app.get("/api",async(req,res)=>{
//         const collection = db.collection('students');
//         const result = await collection.find().toArray();
//         res.send(result)
//     })
//     app.get("/ui",async(req,res)=>{
//         const collection = db.collection('students');
//         const result = await collection.find().toArray();
//         res.render('students',{result});
//     })
// })
// app.listen(3400);







// vdo 50  submit form data on mongoDB (form ko jb submit krnge submit btn pe click krke tb data sara mongoDB database pe save krna sekhnge).

// import express from "express";
// import { Collection, MongoClient } from "mongodb";
// import { format } from "morgan";
// const app = express()
// app.set('view engine', 'ejs')
// const dbName = "school"
// const url = "mongodb://localhost:27017"
// app.use(express.urlencoded({extended:true}))
// const client = new MongoClient(url)
// client.connect().then((connection)=>{
//     const db = connection.db(dbName);
//     app.get("/ui",async(req,res)=>{
//         const collection = db.collection('students')
//         const result = await collection.find().toArray();
//         res.render('students',{result})
//     })
//     // app.get("/api",async(req,res)=>{
//     //     const collection = db.collection('students')
//     //     const result = await collection.find().toArray();
//     //     res.send(result)
//     // })
//     // app.get("/add",async(req,res)=>{
//     // res.render('addStudent')
//     // })
//     app.get("/add",async(req,res)=>{
//     res.send(`<form action="add-student" method="post">
//         <input type="text" placeholder="Enter your name" name="name" />
//         <br></br>
//         <input type="number" placeholder="Enter your age" name="age" />
//         <br></br>
//         <input type="text" placeholder="Enter your email" name="email" />
//         <br></br>
//         <button>Add new Student</button>
//     </form>`)
//     })
//     app.post("/add-student",async(req,res)=>{
//     const collection = db.collection('students')
//     const result = await collection.insertOne(req.body)
//     console.log(result)
//     console.log(req.body)
//     res.send("Data saved")
//     })
// })
// app.listen(3400);





// vdo 51
//api request se data fatch

import express from "express";
import { Collection, MongoClient } from "mongodb";
import { format } from "morgan";
const app = express()
app.set('view engine', 'ejs')
const dbName = "school"
const url = "mongodb://localhost:27017"
app.use(express.urlencoded({extended:true}))
const client = new MongoClient(url)
client.connect().then((connection)=>{
    const db = connection.db(dbName);
    app.get("/ui",async(req,res)=>{
        const collection = db.collection('students')
        const result = await collection.find().toArray();
        res.render('students',{result})
    })
    app.get("/api",async(req,res)=>{
        const collection = db.collection('students')
        const result = await collection.find().toArray();
        res.send(result)
    })
    app.get("/add",async(req,res)=>{
    res.render('addStudent')
    })
    app.post("/add-student",async(req,res)=>{
    const collection = db.collection('students')
    const result = await collection.insertOne(req.body)
    console.log(result)
    console.log(req.body)
    res.send("Data saved")
    })
})
app.listen(3400);

