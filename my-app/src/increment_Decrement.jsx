import React,{useState} from 'react'
const App = ()=> {
const[ num,  setNum] = useState(10)
return(
<div>
<h1> Number is {num} </h1>
<button onClick={ ()=> setNum(num
    +10)}>  </button>
<button onClick={()=> setNum(num-10)}></button>



</div>
)
}
export default App

