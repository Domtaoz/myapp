import React, { useState} from "react"
import { useEffect } from "react"
import { useRef } from "react"
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
function About(){
    return (<h1>This is About page</h1>)
}
const Counter5=()=>{
    const inputRef=useRef(null)
    function handleClick(){
        alert(inputRef.current.value)
    }
    return(
        <>
        <BrowserRouter>
        <Link to="/about">About</Link>
        <Routes>
            <Route path="/about" element={<About/>}/>
        </Routes>
        </BrowserRouter>
        <input ref={inputRef}></input>
        <button onClick={()=>handleClick}>
            Click me
        </button>
        </>
    )
}
export default Counter5