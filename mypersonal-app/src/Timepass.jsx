import "./Timepass.css"
import { useState } from "react";
function Timepass() {
const[count,setCount]=useState(0)
    function Change() {
        document.getElementById("input").style.background="black" 
    }
    let stock=10;
    function Plus() {
        if (count<stock) {
            setCount(count+1)
        }
        
    }
    function Minus() {
        if (count>0) {
            setCount(count-1)
        }
    }
    return(
        <div>
            <h1 style={{color:"white"}}>hello world</h1>
            <fieldset>
            <input type="text" placeholder="enter the name"  id="input"/>
            <br /><br />
            <input type="email" placeholder="enter the email" />
            <br /><br />
            <button onClick={Change}>submit</button>
            </fieldset>

            <div className="wrapper">
                <button onClick={Minus} disabled={count===0}>-</button>
                <h2>{count}</h2>
                <button onClick={Plus}disabled={count===stock}>+</button>
            </div>
        </div>
    )
}
export default Timepass