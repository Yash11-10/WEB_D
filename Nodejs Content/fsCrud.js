const fs = require("fs");

// create file
// fs.writeFileSync("crudFiles/apple.txt", "This is a fruit");


// //read file
// const data = fs.readFileSync("crudFiles/apple.txt","utf-8");
// console.log(data);


// update file 
// fs.appendFileSync("crudFiles/apple.txt"," and this is gud for health")


// // delete file
// fs.unlinkSync("crudFiles/banana.txt");




// terminal se krna sb 
// phle file run krke uske aage lkikhna pdega thk hai uske baad run hoga terminal mei jaise = path k aage nodemon filename read apple. (nodemon fsCrud.js read apple)
const operation = process.argv[2];
if(operation=="write"){
    const name = process.argv[3]; 
    const content = process.argv[4];
    // console.log(operation,name,content);
    const fullName = "crudFiles/"+name+".txt"
    fs.writeFileSync(fullName,content)
}
else if(operation=="read"){
    const name = process.argv[3]; 
    // const content = process.argv[4];
    const fullName = "crudFiles/"+name+".txt"
    let data = fs.readFileSync(fullName,"utf-8")  
    console.log(data)
}
else if(operation=="update"){
    const name = process.argv[3]; 
    const content = process.argv[4];
    const fullName = "crudFiles/"+name+".txt"
    let data = fs.appendFileSync(fullName,content) 
    console.log(data)
 
}
else if(operation=="delete"){
    const name = process.argv[3]; 
    // const content = process.argv[4];
    const fullName = "crudFiles/"+name+".txt"
    fs.unlinkSync(fullName);  
}
else{
    console.log("Operation not found");
}


// UTF-8 (Unicode Transformation Format-8) is a character encoding standard that represents text using 8-bit units and supports almost all characters from all languages.