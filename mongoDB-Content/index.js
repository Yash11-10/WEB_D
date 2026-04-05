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
//api request se data fatch or upr vala form se data fetch kr rha hai jo vdo 50 mei hai

// import express from "express";
// import { Collection, MongoClient } from "mongodb";
// import { format } from "morgan";
// const app = express()
// app.set('view engine', 'ejs')
// const dbName = "school"
// const url = "mongodb://localhost:27017"
// app.use(express.urlencoded({extended:true}))
// app.use(express.json())
// const client = new MongoClient(url)
// client.connect().then((connection)=>{
//     const db = connection.db(dbName);
//     app.get("/ui",async(req,res)=>{
//         const collection = db.collection('students')
//         const result = await collection.find().toArray();
//         res.render('students',{result})
//     })
//     app.get("/api",async(req,res)=>{
//         const collection = db.collection('students')
//         const result = await collection.find().toArray();
//         res.send(result)
//     })
//     app.get("/add",async(req,res)=>{
//     res.render('addStudent')
//     })
//     app.post("/add-student",async(req,res)=>{
//     const collection = db.collection('students')
//     const result = await collection.insertOne(req.body)
//     console.log(result)
//     console.log(req.body)
//     res.send("Data saved")
//     })
//     app.post("/add-student-api",async(req,res)=>{
//     console.log(req.body)
//     const collection = db.collection('students')
//     const result = await collection.insertOne(req.body)
//     res.send({"message":result})
//     })
// })
// app.listen(3400);

// vdo 52
// ab dlt krnge data mongodb se or ui se bhi

// import express from "express";
// import { Collection, MongoClient, ObjectId } from "mongodb";
// import { format } from "morgan";
// const app = express();
// app.set("view engine", "ejs");
// const dbName = "school";
// const url = "mongodb://localhost:27017";
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// const client = new MongoClient(url);
// client.connect().then((connection) => {
//   const db = connection.db(dbName);
//   app.get("/ui", async (req, res) => {
//     const collection = db.collection("students");
//     const result = await collection.find().toArray();
//     res.render("students", { result });
//   });
//   app.get("/api", async (req, res) => {
//     const collection = db.collection("students");
//     const result = await collection.find().toArray();
//     res.send(result);
//   });
//   app.get("/add", async (req, res) => {
//     res.render("addStudent");
//   });
//   app.post("/add-student", async (req, res) => {
//     const collection = db.collection("students");
//     const result = await collection.insertOne(req.body);
//     console.log(result);
//     console.log(req.body);
//     res.send("Data saved");
//   });
//   app.post("/add-student-api", async (req, res) => {
//     console.log(req.body);
//     const collection = db.collection("students");
//     const result = await collection.insertOne(req.body);
//     res.send({ message: result });
//   });
//   app.delete("/delete/:id", async (req, res) => {
//     const collection = db.collection("students");
//     const result = await collection.deleteOne({
//       _id: new ObjectId(req.params.id),
//     });
//     if (result) {
//       res.send({
//         message: "Student data deleted",
//         success: true,
//       });
//     } else {
//       res.send({
//         message: "Student data not deleted",
//         success: false,
//       });
//     }
//   });
//   app.get("/ui/delete/:id", async (req, res) => {
//     const collection = db.collection("students");
//     const result = await collection.deleteOne({
//       _id: new ObjectId(req.params.id),
//     });
//     if (result) {
//       res.send("Student data deleted");
//     } else {
//       res.send("student data not deleted");
//     }
//   });
// });
// app.listen(3400);

// vdo 53 and 54
// form mei data dlnge api ki mdad se (update k btn denge uspe click krke update kr skte hai )

// import express from "express";
// import { Collection, MongoClient, ObjectId } from "mongodb";
// import { format } from "morgan";
// const app = express();
// app.set("view engine", "ejs");
// const dbName = "school";
// const url = "mongodb://localhost:27017";
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// const client = new MongoClient(url);
// client.connect().then((connection) => {
//   const db = connection.db(dbName);
//   app.get("/ui", async (req, res) => {
//     const collection = db.collection("students");
//     const result = await collection.find().toArray();
//     res.render("students", { result });
//   });
//   app.get("/api", async (req, res) => {
//     const collection = db.collection("students");
//     const result = await collection.find().toArray();
//     res.send(result);
//   });
//   app.get("/add", async (req, res) => {
//     res.render("addStudent");
//   });
//   app.post("/add-student", async (req, res) => {
//     const collection = db.collection("students");
//     const result = await collection.insertOne(req.body);
//     console.log(result);
//     console.log(req.body);
//     res.send("Data saved");
//   });
//   app.post("/add-student-api", async (req, res) => {
//     console.log(req.body);
//     const collection = db.collection("students");
//     const result = await collection.insertOne(req.body);
//     res.send({ message: result });
//   });
//   app.delete("/delete/:id", async (req, res) => {
//     const collection = db.collection("students");
//     const result = await collection.deleteOne({
//       _id: new ObjectId(req.params.id),
//     });
//     if (result) {
//       res.send({
//         message: "Student data deleted",
//         success: true,
//       });
//     } else {
//       res.send({
//         message: "Student data not deleted",
//         success: false,
//       });
//     }
//   });
//   app.get("/ui/delete/:id", async (req, res) => {
//     const collection = db.collection("students");
//     const result = await collection.deleteOne({
//       _id: new ObjectId(req.params.id),
//     });
//     if (result) {
//       res.send("Student data deleted");
//     } else {
//       res.send("student data not deleted");
//     }
//   });
//   app.get("/ui/student/:id", async (req, res) => {
//     const collection = db.collection("students");
//     const result = await collection.findOne({
//       _id: new ObjectId(req.params.id),
//     });
//     res.render("updateStudent",{result});
//   });
//   app.get("/student/:id", async (req, res) => {
//     const collection = db.collection("students");
//     const result = await collection.findOne({
//       _id: new ObjectId(req.params.id),
//     });
//     res.send({
//         message:"Data detched",
//         success:true,
//         result:result
//     })
//   });
//   app.post("/ui/update/:id",(req,res)=>{
//     const collection = db.collection("students");
//     const filter =  {_id: new ObjectId(req.params.id)}
//     const update = {$set: req.body}
//     const result = collection.updateOne(filter,update)
//     if (result) {
//       res.send("Student data updated");
//     } else {
//       res.send("student data not updated");
//     }
//   })
// //   using api
//   app.put("/update/:id",async(req,res)=>{
//     const collection = db.collection("students");
//     const filter =  {_id: new ObjectId(req.params.id)}
//     const update = {$set: req.body};
//     const result =await collection.updateOne(filter,update);
//     if (result) {
//     res.send({
//         message:"Data updated",
//         success:true,
//         result:req.body
//     })
//     } else {
//      res.send({
//         message:"Data not uptdated",
//         success:false,
//         result:null
//     })
//     }
//   })
// });
// app.listen(3400);

// vdo 55  connect ongodb to mongoose (npm package)

// import mongoose, { mongo } from "mongoose";
// async function dbConnection(){
//     await mongoose.connect("mongodb://localhost:27017/school");
//     const schema = new mongoose.Schema({
//         name:String,
//         age:String,
//         Email:String
//     })
//     const model = mongoose.model("students", schema)
//     const result = await model.find();
//     console.log(result);
// }
// dbConnection()

// vdo 56 mongodb se data fetch kaise kr skte hai api bnakr

// import mongoose from "mongoose";
// import express from "express";
// import studentModel from "./model/studentModel.js";
// const app = express();
// await mongoose.connect("mongodb://localhost:27017/school").then(()=>{
//     console.log("MongoDB connected Connected")
// });

// app.get("/",async (req,res)=>{
//     const studentData = await studentModel.find()
//     res.send({studentData});
// })
// app.listen(3400)

// vdo 57  making post api and storing data in monogoDB.

// import mongoose from "mongoose";
// import express from "express";
// import studentModel from "./model/studentModel.js";
// const app = express();
// app.use(express.json())
// await mongoose.connect("mongodb://localhost:27017/school").then(()=>{
//     console.log("MongoDB connected Connected")
// });
// // app.get("/",async (req,res)=>{
// //     const studentData = await studentModel.find()
// //     res.send({studentData});
// // })
// app.post("/save",async (req,res)=>{
//     console.log(req.body)
//     const {name,age,email}=req.body
//     if(!req.body || name || age || email){
//         res.send({
//         message:"data not stored",
//         success:false,
//         storedInfo: null
//     });
//     return false;
//     }
//     const studentData = await studentModel.create(req.body)
//     res.send({
//         message:"data stored",
//         success:true,
//         storedInfo: studentData
//     });
// })
// app.listen(3400)

// vdo 58 put or dlt api kaise bna skte hai mongoose package ki vjy se

// import mongoose from "mongoose";
// import express from "express";
// import studentModel from "./model/studentModel.js";
// const app = express();
// app.use(express.json())
// await mongoose.connect("mongodb://localhost:27017/school").then(()=>{
//     console.log("MongoDB connected Connected")
// });
// // app.get("/",async (req,res)=>{
// //     const studentData = await studentModel.find()
// //     res.send({studentData});
// // })
// app.post("/save",async (req,res)=>{
//     console.log(req.body)
//     const {name,age,email}=req.body
//     if(!req.body || name || age || email){
//         res.send({
//         message:"data not stored",
//         success:false,
//         storedInfo: null
//     });
//     return false;
//     }
//     const studentData = await studentModel.create(req.body)
//     res.send({
//         message:"data stored",
//         success:true,
//         storedInfo: studentData
//     });
// })
// app.put("/update/:id",async(req,res)=>{
//     const id = req.params.id
//     console.log(req.params.id)
//     const studentData = await studentModel.findByIdAndUpdate(id,{ ...req.body})
//         res.send({
//         message:"data updated",
//         success:true,
//         info:studentData
//     });
// })
// app.delete ("/delete/:id",async(req,res)=>{
//     const id = req.params.id
//     console.log(req.params.id)
//     const studentData = await studentModel.findByIdAndDelete(id)
//         res.send({
//         message:"data deleted",
//         success:true,
//         info:studentData
//     });
// })
// app.listen(3400)

// vdo 59 cors issues-browser k security feature
// import express from "express";
// import cors from 'cors'
// const app = express()
// app.use(cors());
// app.get("",(req,res)=>{
//     res.send({
//         name:"manush",
//         age:21,
//         emai:"manush@!23.com"
//     })
// })
// app.listen(3400)

// vdo 60 upload file in nodejs
// nodejs mei file ko upload krane k liye ek package ki zrurt hoti hai uska naam hai---{multer}
// import express from "express";
// import multer from "multer";

// const app = express();
// const storage = multer.diskStorage({
//   destination:function(req,file,cb){
//     cb(null,'upload')
//   },
//   filename:function(req,file,cb){
//     cb(null,file.originalname)
//   },
// })
// const upload = multer({storage})
// app.get("", (req, res) => {
//   res.send(`<form action="upload" method="post" enctype="multipart/form-data">
//                  <input type="file" name="myFile" />
//                  <button>Upload File</button>
//                  </form>`
//                 );
// });
// app.post("/upload",upload.single('myFile'),(req,res)=>{
//       res.send({
//         message:"File Uploaded",
//         info:req.file
//       })
// })
// app.listen(3000);
