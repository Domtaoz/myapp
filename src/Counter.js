import React, { useState} from "react";
const Counter=()=>{
    const [count, setCount] = useState(0);
    return(
        <>
        <button onClick={()=>setCount(count+1)}>
            Click me
        </button>
        <button onClick={()=>setCount(0)}>
            Reset
        </button>
        <p>You clicked {count} times</p>
        </>
    )
}
export default Counter