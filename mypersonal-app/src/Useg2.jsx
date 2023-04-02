import React,{useState} from 'react'

function Useg2() {
    const [display,setDisplay]=useState(true)
    const hideDta=()=>{
        setDisplay(!display)
    }
  return (
    <div>
        <button onClick={hideDta}>{display? "hide":"show"}</button>
        {/* {display &&
            <div id="container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, tenetur.</p>
        </div>
        } */}
        {
            display? <h1>chudshcus</h1>:<p>no data</p>
        }
    </div>
  )
}

export default Useg2