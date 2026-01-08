import React from 'react'
import Card from './components/card.jsx'
import User from './components/user.jsx'
const App = () => {
    const arr = [1,2,3,4,5];

  return (
    <div>
      <Card user = "Faiz" age={22} img="https://static.wikia.nocookie.net/doraemon/images/4/4c/Nobita_567c.jpg/revision/latest?cb=20190730015053&path-prefix=en"/>
      <Card user = "Atif" age={23}/>
      <User name={arr}/>
      <User name="sohail"/>

      <User name="sohail"/>

    </div>
  )
}

export default App
