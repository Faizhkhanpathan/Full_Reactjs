import React from 'react'
import Navbar from './Navbar.jsx'

import LeftContent from './LeftContent.jsx'
import Rightcontent from './Rightcontent.jsx'
const Page1content= (props) => {
  // console.log(props.users);
  return (
    <div  className='pb-16 pt-6 h-[90vh] flex justify-between gap-10 px-18'>
      <LeftContent />
      <Rightcontent users={props.users}/>
    </div>
  )
}

export default Page1content
