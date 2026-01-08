import React from 'react'

const Card = (props) => {
  return (
console.log(props.companyName),
    <div className="card">
      <img src={props.img}
      />

      <div className="card-content">
        <h3>{props.companyName}</h3>
        <p>{props.post}</p>
        <button>Read More</button>
      </div>
    </div>
  )
}

export default Card
