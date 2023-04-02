import React, { useState } from 'react'

function Useg4practice() {
    const userDetails={
        username:"",
        id:""
    }
    const[final,setFinal]=useState([])
    const[display,setDisplay]=useState(userDetails)

    const handleChange=(e)=>{
    setDisplay({
        ...display,
        username:e.target.value
    })
    
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        let newList={
            name:display.username,
            id:new Date().getDate().toString()
            
        }
        setFinal([...final,newList])
        console.log(newList);
       
    }
   
    
  return (
    <div>Useg4practice
        <form >
            <input type="text"  value={display.username} placeholder='enter the text' onChange={handleChange} />
            <button type='submit' onClick={handleSubmit}>add</button>
        </form>
{
    final.length===0 &&  <h4>no items</h4>
}

        <ul>
            {
                final.map((eachobj)=>{
                    const{username,id}=eachobj
                    return(
                        <li key={id}>
                            <span>{username}</span>
                            <button>del</button>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Useg4practice