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




// vdo 48 //mongodb k data fetch krke browser pe display kraya hai.
import express from "express";
import { MongoClient } from "mongodb";
const dbName = "school";
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);
const app = express();
app.set('view engine','ejs');
app.get("/",async (req,res)=>{
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('students');
    const result = await collection.find().toArray();
    console.log(result);
    res.render('students',{result});
})
app.listen(3400);