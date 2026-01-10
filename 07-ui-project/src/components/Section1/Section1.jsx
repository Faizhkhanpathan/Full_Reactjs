import React from 'react'
import Navbar from './Navbar.jsx'
import Page1content from './Page1content.jsx'
const Section1 = (props) => {
  console.log(props.users.Arrow);
  return (
    <div>
      <Navbar />
      <Page1content users={props.users} />
    </div>
  )
}

export default Section1
