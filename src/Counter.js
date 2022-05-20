import React, { useState } from "react";


export default function Counter ()  {

const[count,setCount]=useState(0)
const[pick,setPick]=useState("")

const handleClick1=()=>{
    setCount(count+1)
}

const handleClick2=()=>{
    setCount(count-1)
}

const handleChange=(e)=>{
    setPick(e.target.value)
}

    return(

        <div >
        <button  onClick={handleClick1}>Increment</button>
        <h1>{count}</h1>
        <button onClick={handleClick2}>Decrement</button>
        <br/><br/>
        <h1>Color Picker</h1>
        <form>
            <input type="color" style={{height:"50px",width:"100px"}} value={pick} onChange={handleChange} />
        </form>
        <div style={{background:`${pick}`,height:"40vh"}}></div>
        </div>

    )
}