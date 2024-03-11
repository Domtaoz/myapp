import React, { useState} from "react";
const Counter2=()=>{
    const [count, setCount] = useState(0)
    const [value,setValue] = useState("")
    const onTextChange=(event)=>{
        setvalue(event.target.value)
    }
    return(
        <>
        <button onClick={()=>setCount(count+1)}>
            Click me
        </button>
        <button onClick={()=>setCount(0)}>
            Reset
        </button>
        <p>You clicked {count} times</p>
        <input
           type="text"
           value={value}
           onChange={event=>onTextChange(event)}
        />
        <h3>Text Length {value.length}</h3>
        </>
    )
}
export default Counter2