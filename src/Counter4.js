import React, { useState} from "react"
import { useEffect } from "react"
const Counter4=()=>{
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("useEffect setup")  
        return console.log("useEffect cleanup")  
    },[count])
    return(
        <>
        <button onClick={()=>setCount(count+1)}>
            Click me
        </button>
        <button onClick={()=>setCount(0)}>
            Reset
        </button>
        <p>You clicked {count} times</p>
        test useEffect
        </>
    )
}
export default Counter4