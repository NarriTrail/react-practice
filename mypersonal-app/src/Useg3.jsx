import React,{useState} from 'react'

function Useg3() {
    const[firstname,setfirstName]=useState("")
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault()
        let data={
            sirname:firstname,
            gmail:email,
            passcode:password
        }
        console.log(data);
    }
  return (
    <div>
        <form>
            <div>
                <input type="text"  value={firstname} placeholder='enter firstname' onChange={(e)=>setfirstName(e.target.value)}/>
            </div>
<div>
<input type="email" value={email} placeholder='enter email' onChange={(e)=>setemail (e.target.value)} />
 </div> 

<div>
    <input type="password" value={password} placeholder='enter password' onChange={(e)=>setpassword(e.target.value)}/>
    </div>
        </form>
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Useg3