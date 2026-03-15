// useCallback() React ka hook hai jo functions ko memoize (yaad) karke rakhta hai.


// 🔥 Easy Language Explanation
// Jab component re-render hota hai, React har function ko dubara create kar deta hai.
// Agar aap chahte ho ki function baar-baar create na ho,
// to useCallback() use karte hain.


// 👍 Simple Definition
// useCallback = React ko bolna:
// “Ye function yaad rakh lo, jab tak dependency change na ho.”


// useMemo → RESULT (VALUE) store karta hai
// useCallback → FUNCTION store karta hai

// usecallback function ko freeze krta hai 

import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [adjective, setAdjective] = useState("good")

  
  
  const getAdjective = useCallback(() => {
    return "bad"       //ye function freeze ho gya hai 
},[])
  
  

  return (
    <>
      <div>
        <Navbar adjective={"good"} getAdjective={getAdjective}/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
