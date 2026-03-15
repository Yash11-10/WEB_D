// alert("Hello World");

// console.log("Code is running...")
// console.log("Code is also running...")
// console.log("Code is looking like a wow...")

// var a = prompt("Enter your number")
// console.log("Your number is " + a)

// var isTrue = confirm("Are you sure you want to blast your computer ")

// if(isTrue){
//     console.log("Computer is blasting")
// }

// else{
//     console.log("Computer is not blasting")

// }

// document.title = "Hey I am good"

// document.body.style.backgroundColor = "red"

// varaibles

// var are globally scoped and let and const are locally scoped.
// console.log("hey this is akshit")
// var a = 3;
// // a = a + 2;
// var b = 5;
// var c = "haarry";
// console.log(a+b+c)
// console.log(typeof c)
// {
//     let a = 44;
//     console.log(a)
// }
// console.log(a)

// const a1=4;
// a1=a1+2;    //this not aloowed

// primitive datatypes

// let x = "akhsit bhai";
// let y = 22;
// let z = 2.22;
// const p = true;
// let q = undefined;
// // imp point -type of null is object
// let r = null;
// console.log(x,y,z,p,q,r);
// console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

// objects-combination of key value pairs

// let o = {
//     "name" :  "akshit",
//     "job role" :5600,
//     "phn number":6397645969,
//     "marks":89
// }
// console.log(o);
// o.salary = "100cr";
// console.log(o);

// console.log("conditionals");

// let age = 15;
// let grace = 5;

// console.log(age+grace)
// if(age+grace>18){
//     console.log("You can drive");
// }
// else{
//     console.log("You can not drive");
// }

// let a = 3
// let b = 4
// let c = a>b?(a-b):(b-a)
// console.log(c)

// console.log("loops");
// let a = 1;
// for (let index = 0; index < 101; index++) {
//     console.log(a+index);
// }

// for in loop
// for of loop

// let obj = {
//     name:"akshit",
//     role:"programmer",
//     company:"google"
// }
// for (const key in obj) {
//         const element = obj[key];
//         console.log(key,element)
// }
// for (const c of "akshit") {
//     console.log(c)
// }

// let i = 1;
// while (i<=5) {
//     console.log(i);
//     i=i+1;
// }

// console.log("functions")

// function nice(names){
// console.log("Hey " + names  + " you r gud")
// console.log("Hey " + names  + " you r gud")
// console.log("Hey " + names  + " you r gud")
// console.log("Hey " + names  + " you r gud")
// console.log("Hey " + names  + " you r gud")
// }
// nice("yash")
// nice("akshit")

// function sum(a,b,c=2) {
//     // console.log(a+b+c)
//     return a+b+c;
// }
// result=sum(2,5)
// console.log("The sum is " + result)

// console.log("String");

// let a = "Akshit";
// let b = "Yash"
// console.log(a);
// console.log(a[1]);
// console.log(a.length);
// console.log(`His name is ${a} and ${b}`)
// console.log(a.toUpperCase())
// console.log(b.slice(1,4))
// console.log(a.concat(b, "Saxena"))

// strings are immutable means change nhi kr skte

// console.log("Arrays")

// let arr = [1, 2, 4, 5, 7]
// //  Index  0, 1, 2, 3, 4

// arr[0] = 5666;
// console.log(arr, typeof arr);
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

// console.log(arr.toString())
// console.log(arr.join(" and "))

// let numbers = [1, 2, 3, 4, 5]
// numbers.splice(1, 2)
// numbers.splice(1, 3)
// numbers.splice(1, 3, 222, 333)
// (4) [1, 222, 333, 5]

// dom

// console.log("Hello world")

// document.body.firstElementChild -phla child(container)
// document.body.firstElementChild.childNodes-sb cheezen dikhngi text se lekr element tk
// document.body.firstElementChild.children--html elements milne(boxes)
// document.body.firstElementChild.children[4].previousElementSibling
// document.body.firstElementChild.children[4].nextElementSibling
// document.body.firstElementChild.children[4].nextSibling

// console.log("dom id  classes selecters")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor="red"

// document.getElementById("red").style.backgroundColor="red"

// document.querySelector(".box").style.backgroundColor = "green";

// document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor="green"
// })

// list of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// let button = document.getElementById("btn")

// button.addEventListener("dblclick",()=>{
//     // alert("I am clicked ! ")
//     document.querySelector(".box").innerHTML="<b>Yay u have change ur content<b/>"

// })
// document.addEventListener("keydown",(e)=>{
//     console.log(e)
// })

// console.log("Akhsit is a hacker");
// console.log("Yash is a hacker");

// setTimeout(() => {
//   console.log("hey akshit !!");
// }, 5000);
// console.log("The End");

// const callback=(arg)=>{
//     console.log("arg")
// }
// const loadScript = (src , callback) =>{
//     let sc = document.createElement("script")
//     sc.src = src;
//     // sc.onload=callback("Akshit")
//         sc.onload = () => {
//         callback("Akshit")
//     }

//     document.head.append(sc)
// }
// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

// from chatgpt
// const callback = (arg) => {
//     console.log(arg)
// }

// const loadScript = (src, callback) => {
//     let sc = document.createElement("script")
//     sc.src = src;

//     sc.onload = () => {
//         callback("Akshit")
//     }

//     document.head.append(sc)
// }

// loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
//   callback
// )

// data ko wait krne k alg treeka smjhaya hai esne
// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3000);
//   });
// }
// async function main() {
//   console.log("ascsczxd");

//   console.log("adadcf");

//   let data = await getData();

//   console.log(data);

//   console.log("yess1");

//   console.log("yess2");
// }
// main();

// data.then((v) => {
//   console.log("hggvxda");
//   console.log("sfscfr");
// });

//  try and catch

// let a = prompt("Enter first number");
// let b = prompt("Enter second number");
// if(isNaN(a) || isNaN(b)){
//     throw SyntaxError("Sorry this is not allowed")
// }
// let sum = parseInt(a) + parseInt(b)
// console.log("The sum is -",sum)

// // try catch syncronously kaam krta hai

// // finally k use - jaise return k baad k koi code chlta nhi hai agr conditon true ho jati hai,tb finally  k yeh kaam hai ki ek function k andr wrk krta hai sbse phle to or ye return statement k true hone k baad bhi run hota hai
// try {
//     console.log("The sum is -",sum*x)
// } catch (error) {
//     console.log("Error hai bhai")
// }

// oops
// prototype-ek object mei koi key add krni ho tb prototype kaam aata hai

// Advanced js

// here comes the logic of (IIFE) immediatly invoked function expression. ye turnt run kr deta hai function ko
// async function sleep() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("resolved")
//             resolve(45)
//         }, 3000);
//     })
// }
// // 🔹 IIFE kyun use karte hain?

// // ✔ await directly global scope me allowed nahi (old JS me)
// // Async IIFE = bina function call likhe, async code ko turant run karne ka tareeka
// (async function main(){
//     let a = await sleep();
//     console.log(a)
//     let b = await sleep();
//     console.log(b)

// Destructuring- Destructuring ka matlab hota hai:
// 👉 array ya object se values ko directly variables me nikaal lena

// let [a, b, c] = [10, 20, 30];

// console.log(a); // 10
// console.log(b); // 20

// let [x, , z] = [1, 2, 3];
// console.log(x, z); // 1 3

// let [a = 5, b = 10] = [2];
// console.log(a, b); // 2 10

// let [a,b,...rest] = [1,5,4,5,6,8,9]
// console.log(a,b,rest)

// ye kaam tb ata hai jb bda object ho
// let obj={
//     a:1,
//     b:2,
//     c:3
// }
// let {a,b}=obj;
// console.log(a,b)
// })()

// Spread syntax ka matlab hota hai:
// 👉 array, object, ya string ko “phaila dena” (individual values me)

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];
// console.log(arr2); // [1,2,3]

// let a = [1, 2];
// let b = [3, 4];

// let c = [...a, ...b];
// console.log(c); // [1,2,3,4]

// let nums = [10, 20, 30];
// let newNums = [5, ...nums, 40];

// console.log(newNums);

// Copy object
// let user = { name: "Akshit", age: 22 };
// let newUser = { ...user };
// console.log(newUser);

// function sum(a,b,c){
//     return a+b+c;
// }
// let arr = [2,4,6]
// console.log(sum(arr[0],arr[1],arr[2]))
// console.log(sum(...arr)) //spread syntax

// JavaScript code 2 phases me run hota hai:
// 1️⃣ Memory Creation Phase (Hoisting Phase)
// Variables & functions ke liye memory allocate hoti hai
// Values assign nahi hoti (except function declarations)

// 2️⃣ Execution Phase
// Code line by line execute hota hai
// Values assign hoti hain
// 👉 Hoisting ka magic phase 1 me hota hai

// Hoisting is JavaScript's default behavior where variable and function declarations are moved to the top of their scope during the memory creation phase. let and const are hoisted but stay in the Temporal Dead Zone until initialized.

// var a1;
// console.log(a1)
// var a1=6;
// ab esmei kya hoga ki var a1 upr jyga,a1=6 nhi jyga fir esi wjy se error nhi ata hai lkin type undefined hota hai. esmei const or let kaam nhi ate hai sirf var ata hai.

// greet("Akshit") // this will be valid here..
// function greet(name){
//     console.log("Hello " + name)
// }
// greet("Akshit")

// hoisting

// greet();
// function greet(){
//     console.log("Good Morning")
// }
// console.log(a)
// var a=9; //decalaration hoisted at the top but not value;
// console.log(a)

// function greet(){
//     console.log("hih");
// }
// function name(){
//     greet();
//     console.log("Akshit");
// }
// name();

// function outer() {
//   let x = 10;
//   return function inner() {
//     console.log(x);
//   };
// }
// const fn = outer();
// fn();





// let username = {
//     "firstname" : "Akshit", 
//     "lastname" : "saxena",
//     "rollno" : "08",
//     greet : function(){
//         console.log(`hey this is ${this.firstname}`);
//     }
// } 
// username.greet();



// function show(){
//     console.log(this);
// }
// show();



let userDetails={
    name:"Akshit saxena",
    age:"21",
    year:"3rd",
    printDetails: function(){
        console.log(this.age);
    }
}
userDetails.printDetails();


