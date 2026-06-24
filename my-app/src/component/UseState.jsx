
import {useState} from 'react';
const UseState = () => {
    const [counter, setCounter] =useState(0)
const increase = () => {
    setCounter (counter+1)

}
 const decrease = () => {
    setCounter (counter-1)
 }
 return (
<>
    <h1>
        Counter={counter}</h1>
        
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
</>
 );
};
export default UseState;