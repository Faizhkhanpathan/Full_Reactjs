import React from 'react'

import RightCard from './RightCard.jsx'
const Rightcontent = (props) => {
  return (
    <div id="rightcontent" className='h-full flex flex-no-wrap rounded-4xl overflow-x-auto gap-10  p-6 w-2/3'>
      {props.users.map(function(elem,idx){
        return <RightCard color={elem.color} Arrow={elem.Arrow} key={idx} id={idx} user={elem}/>
      })}
{/* 
<RightCard user={props.users[0]}/>
<RightCard user={props.users[1]}/>
<RightCard user={props.users[2]}/>
<RightCard user={props.users[3]}/> */}

    </div>
  )
}

export default Rightcontent
