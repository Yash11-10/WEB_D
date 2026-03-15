import React, { useEffect } from 'react'

const Navbar = ({ color }) => {

  // case1:runs on every render
  useEffect(() => {
    alert("Hey I will run on every render!!")
  })

  // case2:runs only on first render
  useEffect(() => {
    alert("Welcome to this page,this is the first render!!")
  }, [])


  // case3:runs only when only certain value changed
  useEffect(() => {
    alert("hey i m running because color was changed!!")
  }, [color])


  // case4:example of cleanup function
  useEffect(() => {
    alert("Hey welcomme to this page,this is Akshit Saxena")
    return () => {
      alert("Component was unmounted")
    }
  },[])
  return (
    <div>
      I am a navbar  of {color} color 😂...
    </div>
  )
}

export default Navbar
