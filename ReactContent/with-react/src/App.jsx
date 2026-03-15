// import logo from './logo.svg';
import { useState } from 'react';
import "./App.css"
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
  const [value,setValue] = useState(0)

  return (
    <div className="App">
      <Footer color={"yellow"} background={"black"}/>
      <Navbar logoText="CWH with Akshit Saxena"/>
      <div className='value'>{value}</div>
      <button onClick={() => setValue(value + 1)}>Click me</button>
      <Footer color = "orange" background="black"/>
      
     </div> 
  );
}

export default App;

