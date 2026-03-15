import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// form handle⬇️⬇️  




function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("harry")
  const [form, setForm] = useState({})
  const handclicked = () => {
    alert("hey  i m clicked once")
  }
  // const dragcliked = () => {
  //   alert("hey the curson comes under blue box draged")
  // }
  const changecliked = (e) => {
    // setName(e.target.value)


    // form object to haihi or e.target.name ki jgy nyi value rkh do⬇️


    setForm({...form,[e.target.name]:e.target.value})
  }

  return (
    <>
      <div className="btn">
        <button onClick={handclicked}>tap me</button>
      </div>
      {/* <div className="Blue" onMouseOver={dragcliked}>
        i m a Blue box
      </div> */}
      <input type="email" name='email' value={form.email?form.email:""} onChange={changecliked} />
      <input type="number" name='phn' value={form.phn?form.phn:""} onChange={changecliked} />

    </>
  )
}

export default App
