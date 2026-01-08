import React from 'react'

const Card = (props) => {
  return (
console.log(props),
    <div className="card">
      <img src={props.img}
      />

      <div className="card-content">
        <h3>{props.user}</h3>
        <p>This is a simple card using HTML and CSS only.</p>
        <button>Read More</button>
      </div>
    </div>
  )
}

export default Card
