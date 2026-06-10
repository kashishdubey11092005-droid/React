import {useState} from "react";

const Counter=() => {
    const [count, setCount] = useState(0);
    const [rCounter , setRCounter] =useState(0);
    return (

    <div>
        <h1>Counter: {count}</h1>
    <button onClick={() => setCount(count +1)}> Update Counter </button>
    <button onClick={() => setRCounter(rCounter -1)}> Update Reverse Counter </button>
    <h1>Reverse Counter: {rCounter}</h1>
    </div>
)
}

export default Counter;