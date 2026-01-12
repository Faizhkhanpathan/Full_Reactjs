// import React from 'react'

// const App = () => {
//   function btnClicked(){
//     console.log("Hello, sohail");
//   }
//   function mouseEnter(){
//     console.log("Mouse Entered");
//   }
//   return (
//     <div>
//       <h1>Hello, Faiz</h1>
//       <button onMouseEnter={mouseEnter} onClick={btnClicked}>Change user</button>
//       {/* <button onDoubleClick={btnClicked}>Change user</button> */}
       
//     </div>
//   )
// }

// export default App
//=====================================================================================================


// import React from 'react'

// const App = () => {
//   // function btnClicked(){
//   //   console.log("Hello, sohail");
//   // }
//   // function mouseEnter(){
//   //   console.log("Mouse Entered");
//   // }
//   return (
//     <div>
//       <h1>Hello, Faiz</h1>
//       <button onClick={function(){
//         console.log("hey Faiz ");
//       }}>Change user</button>
//       {/* <button onDoubleClick={btnClicked}>Change user</button> */}
       
//     </div>
//   )
// }

// export default App


// ============================================================================================

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <input  onChange={(elem) => console.log(elem.target.value)} type="text" placeholder='Enter your name' />
//       {/* onChange ,onclick,   this type of functions is there */}
//     </div>
//   )
// }

// export default App


// ==============================================================================================================

// import React from 'react'

// const App = () => {
  
//     function inputchanging(val){
//       console.log(val);
//     }
//     return (
//     <div>
//       <input  onChange={(elem) => inputchanging(elem.target.value)} type="text" placeholder='Enter your name' />
//     </div>
//   )
// }

// export default App

// =================================================================================================================================

// onclick on chang on mousemove 
import React from 'react'

const App = () => {
  const pageScorilling = () => {
    console.log("scrolled");
  }
  return (
    <div onWheel={(elem)=>{
      console.log(elem);
    }}>
      <div className='Page1'></div>
      <div className='Page2'></div>
      <div className='Page3'></div>
    </div>
  )
}

export default App
