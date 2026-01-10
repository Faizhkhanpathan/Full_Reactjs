import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow.jsx'
const LeftContent = (props) => {
  console.log(props.users);
  return (
    
    <div className='h-full flex flex-col justify-between w-1/3 '>
      <HeroText />
       <Arrow />
    </div>
  )
}

export default LeftContent
