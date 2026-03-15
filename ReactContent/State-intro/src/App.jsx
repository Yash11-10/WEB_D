// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(10)

//   return (
//     <>
//       <div>The count is {count}</div>
//       <button onClick={()=>{setCount(count+1)}}>Updated Count</button>
//     </>
//   )
// }

// export default App




// hooks - Hooks are functions in React that let you use state, lifecycle features, and other React features without writing a class.
// useEffect - side effect deta hai, data render hone pe kuch ho khin fetch ho y database mei se nikl jaay
// StrictMode - ye do baar run krta hai development mei ek baar check krne k loye or ek baar asli mei run krne k liye thk hai..


// import { useEffect, useState } from 'react'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './components/Navbar'


// function App() {
//   const [count, setCount] = useState(10)
//   const [first, setfirst] = useState(0)
//   const [color, setcolor] = useState(0)


//   useEffect(() => {
//     alert("Count was changed")
//     setcolor(color+1)
//   }, [count])


//   return (
//     <>
//       <Navbar color={"red"+color} />
//       <div>The count is {count}</div>
//       <button onClick={() => { setCount(count - 1) }}>Updated count</button>
//       <div>The count is {first}</div>
//       <button onClick={() => { setfirst(first - 1) }}>Updated First</button>
//     </>
//   )
// }

// export default App






// useRef - DOM references handle karna
// useRef() hook se tum kisi DOM element ko directly access kar sakte ho ya ek mutable variable create kar sakte ho jo re-render nahi karata.
// state ko change krne se component rerender ho jata hai but ref ko change krne se component rerender nhi hota



// usecase1: ⬇️
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { useRef,useEffect, useState } from 'react'

// function App() {
//   const [count,setCount] = useState(0)
//   const a = useRef(0);
//   useEffect(() => {
//     a.current = a.current+1
//     console.log(`rerendering and the value is ${a.current}`)
//   })
  
//   return (
//     <>
//     <h2>HEY this is Akshit Saxena</h2>
//     <div>The count is {count}</div>
//     <button onClick={()=>{setCount(count+1)}}>Click Here</button>
//     </>
//   )
// }

// export default App



// usecase2:⬇️ 
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { useRef,useEffect, useState } from 'react'

// function App() {
//   const [count,setCount] = useState(0)
//   const btnRef = useRef();
//   useEffect(() => {
//     console.log("first rendering")
//     btnRef.current.style.backgroundColor="red"
//   },[]);
  
//   return (
//     <>
//     <h2>HEY this is Akshit Saxena</h2>
//     <div>The count is {count}</div>
//     <button ref = {btnRef} onClick={()=>{setCount(count+1)}}>Click Here</button>

//     </>
//   )
// }

// export default App




