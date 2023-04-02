import React,{useEffect,useState} from 'react'

function UseEffect1() {
    const[count,setCount]=useState(0)
    const[pageWidth,setpageWidth]=useState(window.innerWidth)
  useEffect(()=>{

  let change=  window.addEventListener('resize',()=>{
      setpageWidth(window.innerWidth)
    })
   console.log("callback");

   return ()=>{
    console.log("im removing");
   change= window.removeEventListener('resize',()=>{
      setpageWidth(window.innerWidth)
  })
    }
  })

  
  return (
    <div>
        <h1>hello use</h1>
        <h1>{pageWidth}</h1>
        <h2>{count}</h2>
        <button onClick={()=>{
           setCount(count+1)
        }}>+</button>

    </div>
  )
}

export default UseEffect1