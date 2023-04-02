import React,{useEffect, useState} from "react"

 //import Ex from "./Ex"
 import 'bootstrap/dist/css/bootstrap.min.css';

 const Project=()=> {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[flag,setFlag]=useState(false)
    useEffect(()=>{
        console.log("registerd");
    },[flag])
    const handler=(e)=>{
       
      // e.preventDefault();
       if (!name||!email||!password) {
        alert("all fields are mandetory")
       }
       else{
        setFlag(true)

       }
    }
    
   return (
    <div>
        <h2>{(flag)? <p>fuckk {name} you have registered</p>:""}</h2>
        <h3>ydrtd</h3>
        <form onSubmit={handler}>
            <input type="text" placeholder="enter name" value={name} onChange={(e)=>{
                setName(e.target.value)
            }} /> <br />
            <input type="email" placeholder="enter email" value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }} /><br/>
            <input type="password" placeholder="enter password" value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }} /> <br />
           <button >submit</button>
        </form>
    </div>
       
   )
 }
 
 
 export default Project