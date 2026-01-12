  //ctrl shift p  for reload

// two-way-binding means 1 tir se 2 nishane 
import react, { useState } from 'react'
const App = () => {
  
  

  const [title, setTitle] = useState('');
const sumitHandler = (e) => {
e.preventDefault();
console.log("form submitted",title);
setTitle('');
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        sumitHandler(e);
      }}>
   <input type="text" placeholder='Enter your name' value={title} onChange={(e)=>{
    setTitle(e.target.value)
   }}/>
   <button>Summit</button>
    </form>

    </div>
  )
}

export default App
