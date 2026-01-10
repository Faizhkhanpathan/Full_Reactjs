// import React from 'react'

// const RightCard = () => {
//   return (
//     <div className='h-full p-4 overflow-hidden w-80 rounded-4xl'>
//       <img className='h-full w-full object-cover ' "></img>
//       <div className='absolute top-0 left-0 h-full w-full bg-amber-300'>
//       <h1>1</h1>
//       <div>
//       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, mollitia itaque voluptates molestias quam quidem laboriosam numquam, eligendi aliquid vitae magni unde non illum eum. Iste corporis et doloremque excepturi!</p>
//   </div>
//   <button>Satisfied</button>
//   </div>
//     </div>
//   )
// }

// export default RightCard



import React from 'react'
import RightCardContent from './RightCardContent.jsx';
const RightCard = (props) => {
  return (
    <div className="h-full shrink-0  overflow-hidden relative w-80 rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src={props.user.img}
      />

     <RightCardContent  Arrow={props.Arrow} color={props.color} id={props.id} user={props.user}/>
    </div>
  )
}

export default RightCard
