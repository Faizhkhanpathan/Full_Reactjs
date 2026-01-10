import React from 'react'
import Section1 from './components/Section1/Section1.jsx'
import Navbar  from './components/Section1/Navbar.jsx'
import Section2 from './components/Section2/Section2.jsx'
import Page1content from './components/Section1/Page1content.jsx'

const App = () => {
const users = [
  {
    img: 'https://images.pexels.com/photos/5717050/pexels-photo-5717050.jpeg',
    color: 'green',
    intro: 'Everything works smoothly and meets expectations with a pleasant experience.',
    tag: 'Satisfied',
    Arrow: 'green',
  },
  {
    img: 'https://images.pexels.com/photos/7255372/pexels-photo-7255372.jpeg',
    color: 'yellow',
    intro: 'The service met some needs, but key areas still feel incomplete.',
    tag: 'Underserved',
    Arrow: 'red',

  },
  {
    img: 'https://images.pexels.com/photos/5922204/pexels-photo-5922204.jpeg',
    color: 'orange',
    intro: 'The idea is there, but it needs more refinement and execution.',
    tag: 'Underbaked',
    Arrow: 'yellow',

  },
  {
    img: 'https://images.pexels.com/photos/7988115/pexels-photo-7988115.jpeg',
    color: 'red',
    intro: 'An experience that lacks clarity and leaves room for improvement.',
    tag: 'Underdelivered',
    Arrow: 'purple',

  },
]


  return (
    <div>
      
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
