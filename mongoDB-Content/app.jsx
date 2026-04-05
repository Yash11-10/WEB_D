import React, { useEffect } from 'react'

function App() {
    useEffect(()=>{
        getUsers()
    })
    async function getUsers() {
    let data = await fetch("http://localhost:3400")
    data = await data.json()
    console.log(data)        
    }
    return (<h1>APi call</h1>)
    
}

export default app