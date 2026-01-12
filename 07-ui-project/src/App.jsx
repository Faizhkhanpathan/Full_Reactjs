import React from 'react'
import Section1 from './components/Section1/Section1.jsx'
import Navbar  from './components/Section1/Navbar.jsx'
import Section2 from './components/Section2/Section2.jsx'
import Page1content from './components/Section1/Page1content.jsx'

const App = () => {
const users = [
  {
    img: 'https://images.pexels.com/photos/5717050/pexels-photo-5717050.jpeg',
    intro: 'Everything works smoothly and meets expectations with a pleasant experience.',
    tag: 'Satisfied',
    color: '#2a2c2b',     // Green (Satisfied)
    Arrow: '#686c69',     // Green arrow
  },
  {
    img: 'https://images.pexels.com/photos/7255372/pexels-photo-7255372.jpeg',
    intro: 'The service met some needs, but key areas still feel incomplete.',
    tag: 'Underserved',
    color: '#272520',     // Yellow
    Arrow: '#292626',     // Red arrow
  },
  {
    img: 'https://images.pexels.com/photos/5922204/pexels-photo-5922204.jpeg',
    intro: 'The idea is there, but it needs more refinement and execution.',
    tag: 'Underbaked',
    color: '#8d8c8c',     // Orange
    Arrow: '#050505',     // Yellow arrow
  },
  {
    img: 'https://images.pexels.com/photos/7988115/pexels-photo-7988115.jpeg',
    intro: 'An experience that lacks clarity and leaves room for improvement.',
    tag: 'Underdelivered',
    color: '#0d0c0c',     // Red
    Arrow: '#474649',     // Purple arrow
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
