// let student = {
//     "name":"Akshit",
//     "phn_no":"6397645969",
//     "marks":"89"
// }
// student.salary = "15lpa";
// console.log(student);
// delete student.phn_no;
// console.log(student)



// let string = "Akshit";
// let a = 5;
// let b = string+a;
// console.log(b);


// console.log(1);
// console.log(2);
// console.log(3);

// // async function getNumber() {
// //     return 4;
// // }

// // async function run() {
// //     let a = await getNumber();
// //     console.log(a);
// // }
// setTimeout(() => {
//     console.log(4)
// }, 0);

 

// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)



// const fs = require("fs");

// fs.readFile("./alert.js", "utf-8", (err, data) => {
//     if (err) {
//         if (err.code === "ENOENT") {
//             console.log("File not found");
//         }
//         return;
//     }
//     console.log(data);
// });





//error handling using async and await
// const fsPromises=require("fs").promises;
// async function readFileSafe() {
//     try{
//         const data = await fsPromises.readFileSafe("./data.txt","utf-8");
//     }
// catch(err){
//     console.log("Error",err.code)
// }}


// Stream Error Handling
// const readStream= fs.createReadStream("./sample.txt");
// const writeStream= fs.createWriteStream("./source.txt");
// readStream.on("error",(err)=>{
//     console.log("Read error",err.message);
//     writeStream.destroy();
// });
// writeStream.on("error",(err)=>{
//     console.log("Write error",err.message);
//     readStream.destroy();
// });



// let students={
//     "name":"ahaan",
//     "id":1,
//     "Branch":"CSE"
// }


// students.age=11;
// console.log(students)
 


