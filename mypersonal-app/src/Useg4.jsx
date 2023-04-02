import React, { useState } from 'react'

function Useg4() {
    
    const[show, setShow]=useState([])
    const [text,setText]=useState({
        name:"",
        id:"",
    })
   
    const handleText=(e)=>{
    setText({
        ...text,
        name:e.target.value
    });
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        let newtoDo={
            name:text.name,
            id:new Date().getHours().toString()
        }
        setShow([...show,newtoDo])
        console.log(newtoDo);
    }
    const handleDelete=(id)=>{
        let listdel=show.filter((eachobj)=>{
            return eachobj.id !==id;
        })
        console.log(listdel);
        setShow(listdel)
    }
   
  return (
    <div>
        <h1>todo list</h1>
       <form>
       <input type="text" value={text.name} placeholder='enter the text' onChange={handleText} />
        <button type='submit' onClick={handleSubmit}> add</button>
       </form>
       {
        show.length===0 && <h3>no iten in list</h3>
       }
       <ul>
        {
            show.map((eachText)=>{
                const{name,id}=eachText;
                return(
                    <li key={id}>
                        <span>{name}</span>
                        <button onClick={()=>handleDelete(id)}>delete</button>
                    </li>
                )
            })
        }
       </ul>
    </div>
   
  )
}

export default Useg4
