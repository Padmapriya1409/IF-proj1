import React, { useState } from 'react';
import Axios from 'axios';

const Curd = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[dob,setDob]=useState("")
    const[native,setNative]=useState("")
    const[position,setPosition]=useState("")

const[list,setList]=useState([])

// const Displaylist=()=>{
//     console.log(name,email,dob,native,position)
// }

const addDetails=(data)=>{
    Axios.post({
        name:name,email:email,dob:dob,native:native,position:position
    }).then(()=>{
console.log("true")
    })    
}

const getDetails=()=>{
    Axios.get.then((res)=>{
        setList(res.data)
    })
}

  return (
    <div>Curd Operation Method
        <div className='details'>
    <label>Name:- </label>
    <input type="text" value={name} onChange={(e)=>{setName (e.target.value)}}/>
    <label>Email:- </label>
    <input type="email" onChange={(e)=>{setEmail (e.target.value)}}/>
    <label>DOB:- </label>
    <input type="dob" onChange={(e)=>{setDob (e.target.value)}}/>
    <label>Native:- </label>
    <input type="text" onChange={(e)=>{setNative (e.target.value)}}/>
    <label>Position:- </label>
    <input type="text" onChange={(e)=>{setPosition (e.target.value)}}/>
    <br/><br/>
    <button onClick={addDetails}>Add Details</button>
   {list.map((data,key)=>{
       <h1>{data.name}</h1>
       
   })}
    </div>
    </div>
  )
}

export default Curd