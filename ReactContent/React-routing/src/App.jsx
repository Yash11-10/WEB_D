// 🚦 React Routing = Webpage ke andar bina page reload kiye different pages dikhana

// Jaise normal websites me jab aap Home → About → Contact par click karte ho to page reload hota hai.

// React Routing me:

// Page reload nahi hota

// Content screen par change ho jata hai

// Website feel hoti hai fast & smooth (Single Page App)

// 📍 Real-Life Example

// Imagine Instagram:

// Home Feed

// Explore

// Messages

// Profile

// Aap jab kisi tab par click karte ho, page reload nahi hota, bas view change hota hai.
// Bas same cheese React Router karta hai.



// react routing - page k content change bhi ho jaay or page reload bhi n ho
// React Routing = Ek hi React app me multiple pages create karke unke beech bina reload ke switch karna. 

// routerprovider - React Provider ka main kaam hota hai data ko global banana — yani poore component tree ke andar koi bhi component us data ko access kar sakta hai without props drilling.
// Child components ko data pass karta hai,Har component me props bhejne ki zarurat nahi hoti,Global state provide karta hai

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/Login",
      element:<><Navbar/><Login/></>
    },
    {
      path:"/About",
      element:<><Navbar/><About/></>
    },
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
