import React from 'react'
import Card from './components/card.jsx'
import Navbar from './components/navbar.jsx'
const App = () => {
  const user="sohail";
  const age=22;
  return (
    <div>
      <h1>Hello guys i am  {user}
      </h1>
      <h1>Age: {age}</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <Navbar />
      
    </div>
  )
}

export default App
