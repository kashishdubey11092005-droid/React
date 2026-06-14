import React, { useState } from 'react'
const App = () => {
 let a =" kashish "
  
 const changeUser = ()=> {
  console.log( a)
  const[ a, setA] = useState(10)
  
  const changeA = ()=> {
   console.log("chala gya")
   setA=(20)
  }
  return(
   <div> 
    <h1> value of a is {a}</h1>
    <button onClick={ changeA}> Change A </button>
    </div>
    )
}
}

export default App