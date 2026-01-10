import React from 'react'
import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
    <div>
       <div className="absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between">
        <h2 className='bg-white text-xl font-bold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>

        <div>
          <p className='text-lg leading-relaxed text-white mb-14'>{props.user.intro}</p>

          <div>
           <button style={{ backgroundColor: props.color }} className="text-white font-medium px-8 py-2 rounded-full">
  {props.user.tag}
</button>

<button  style={{ backgroundColor:props.user.Arrow }} className=" text-white flex items-center justify-center w-10 h-10 rounded-full">
  <ArrowRight className="w-5 h-5" />
</button>


          </div>
        </div>

      </div>
    </div>
  )
}

export default RightCardContent
