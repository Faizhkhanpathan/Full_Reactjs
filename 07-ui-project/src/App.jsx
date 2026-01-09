import React from 'react'
import Section1 from './components/Section1/Section1.jsx'
import Navbar  from './components/Section1/Navbar.jsx'
import Section2 from './components/Section2/Section2.jsx'
import Page1content from './components/Section1/Page1content.jsx'
import LeftContent from './components/Section1/LeftContent.jsx'
import Rightcontent from './components/Section1/Rightcontent.jsx'
const App = () => {
  return (
    <div >
      <Navbar />
      <Page1content/>
      <LeftContent />
      <Rightcontent />
      {/* <Section1 />
      <Section2 /> */}
    </div>
  )
}

export default App
