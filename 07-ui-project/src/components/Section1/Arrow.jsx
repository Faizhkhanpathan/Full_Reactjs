import React from 'react'
import { ArrowUpRight } from 'lucide-react';
const Arrow = () => {
  return (
    <div className="w-14 h-14 
        flex items-center justify-center
        rounded-full 
        bg-blue-600 
        text-white
        transition-all duration-300
        hover:bg-blue-700 hover:scale-110
        active:scale-95
        shadow-lg
      ">
      <ArrowUpRight />
    </div>
  )
}

export default Arrow
