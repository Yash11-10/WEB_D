import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [shwBtn, setshwBtn] = useState(true)
  const [todos, settodos] = useState([{
    title: "Hey",
    desc: "I M A TODO"
  },
  {
    title: "HEY YES",
    desc: "I M ANOTHER TODO"
  },
  {
    title: "HEY YES",
    desc: "I M BRO ANOTHER TODO"
  }
  ],

  )


  const Todo = ({ todo }) => {
    return (<>
      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
    </>)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {todos.map((todo, index) => {
        return <Todo key={index} todo={todo} />
      })}

      {/* conditional rendering ⬇️*/}

      {/* {shwBtn?<button>shwBtn is true</button>: <button>shwBtn is false</button>} */}

      {shwBtn && <button>Appeared</button>}



      <div className="card">
        <button onClick={() => setshwBtn(!shwBtn)}>
          tap here to toggle the button
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
