import React from 'react'
let game="subman gill"
let urll="https://th.bing.com/th?id=ORMS.ea4eff931d78fdd8df374da7d934e35d&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0"
const  Props=(props)=>{
    const result=props.result;
    if (result) {
        return <Pass/>
    }
    return(
        // <div>
        //     <h2>hello kack</h2>
        //     <Operation name={game}/>
        //     <Operation image={urll}/>
        // </div>
        <Fail/>
    )
}
function Fail() {
    return <h2>intiki dengei raa pooka</h2>
}
function Pass() {
    return <h2>hurray you got selected</h2>
}
const Operation=(props)=> {
    console.log(props);
    return(
        <div>
            <h5>normal {props.name} image</h5>
            <img src={props.image} alt="" />
            
        </div>

    )
}
export default Props