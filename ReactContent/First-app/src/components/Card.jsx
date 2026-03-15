import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className="Card">
        <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=652&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={100} 
        style={{border:"2px solid black"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card
