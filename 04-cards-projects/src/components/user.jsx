import React from 'react'

const user = (props) => {
    console.log(props);
  return (
    <div>
      <h1 style={{color: 'blue'}}>Faiz {props.name} {props.age}</h1>
    </div>
  )
}

export default user
