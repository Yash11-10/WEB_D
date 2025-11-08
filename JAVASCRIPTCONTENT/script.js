// alert("Hello World");

// console.log("Code is running...")
// console.log("Code is also running...")
// console.log("Code is looking like a wow...")

// var a = prompt("Enter your number")
// var isTrue = confirm("Are you sure you want to leave this page and blast your computer ")

// if(isTrue){
//     console.log("Computer is blasting")
// }

// else{
//     console.log("Computer is not blasting")

// }
// console.log("Your number is " + a)

// document.title = "Hey I am good"

// document.body.style.backgroundColor = "red"







// varaibles



// console.log("hey this is akshit")
// var a = 3;
// a = a + 2;
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
// a1=a1+2;    this not aloowed



// primitive datatypes

// let x = "akhsit bhai";
// let y = 22;
// let z = 2.22;
// const p = true;
// let q = undefined;
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
//     console.log(index);

// }


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



// function sum(a,b) {
//     // console.log(a+b)
//     return a+b;
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
//  Index  0, 1, 2, 3, 4

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

// document.body.firstElementChild 
// document.body.firstElementChild.childNodes 
// document.body.firstElementChild.children




// console.log("dom id  classes selecters")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor="red"


// document.getElementById("red").style.backgroundColor="red"


// document.querySelector(".box").style.backgroundColor = "green";


// document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor="green"
// })







// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// let button = document.getElementById("btn")

// button.addEventListener("click",()=>{
//     // alert("I am clicked ! ")
//     // document.querySelector(".box").innerHTML="<b>Yay u have change ur content<b/>"

// })
// document.addEventListener("keydown",(e)=>{
//     console.log(e)
// })







// console.log("AKhsit is a hacker")
// console.log("Yash is a hacker")


// setTimeout(() => {
//     console.log("hey akshit !!")
// }, 5000);

// console.log("The End")

// const callback=(arg)=>{
//     console.log("arg")
// }
// const LoadScript = (src , callback) =>{
//     let sc = document.createElement("script")
//     sc.src = src;
//     sc.onload=callback("Akshit")
//     document.head.append(sc)
// }
// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )





// data ko wait krne k alg treeka smjhaya hai esne 
async function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3000);
    })
}
async function main() {
    
console.log('ascsczxd');
console.log('adadcf');
let data =await getData()
console.log(data);
console.log('yess1');
console.log('yess2');
}
main()

// data.then((v)=>{
//     console.log("hggvxda")
//     console.log('sfscfr');
    
// })





