import React, { useState} from "react";
const Counter3=()=>{
    const [show,setShow]=useState(true)
    const books=["book1","book2","book3"]
    const listBooks=books.map(b=><li key={b}>{b}</li>)
    const filterBooks=books.filter(b=> b=="book1" || b=="book3")
    return(
        <>
        <ul>{listBooks}</ul>
        {filterBooks}
        {show? <h1>Hello world</h1>:<></>}
        <button onClick={()=>setShow(!show)}>
            Toggle
        </button>
        </>
    )
}
export default Counter3