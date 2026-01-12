// import React from 'react'
// // java is synchorance but at api calling that will perform asnchronase operation
// const App = () => {
//   async function getData() {
//    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   console.log(response);
//   }
//   return (
//     <div>
//       <button onClick={getData}>Get Data</button>
//     </div>
//   )    
// }

// export default App

// ================================================================================================


// import React from 'react'
// import axios from 'axios'
// // java is synchorance but at api calling that will perform asnchronase operation
// const App = () => {
//    async function getData() {
//    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
//   console.log(response.data);

//   }
//   return (
//     <div>
//       <button onClick={getData}>Get Data</button>
//     </div>
//   )    
// }

// export default App


// ====================================================================================================

import React, { useState } from 'react'
import axios from 'axios' //is use to call api //transfer data between frontend to backend
const App = () => {
    const [data, setdata] =  useState([]);
  const getdata = async () => {
const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
setdata(response.data);
  }
  return (
    <div>
      <button onClick={getdata}>Get Data</button>
      <div>
      {data.map(function(elem, idx){
        return <h3>hello,{idx},{elem.title}</h3>
      })}
      </div>
     
    </div>
  )
}

export default App
