import React,{useState} from 'react'


function Useg1() {
    let total=[
        {
            username:"jambolia",
            mobile:872398562,
            id:1,
            emailid:"user1@gMIL.COM"
        },
        {
            username:"califoria",
            mobile:932338362,
            id:2,
            emailid:"user2@gMIL.COM"
        },
        {
            username:"hidimbai",
            mobile:772373462,
            id:3,
            emailid:"user3@gMIL.COM"
        }
    ]
    const[data,setdata]=useState(total)

    const clickDel=(del)=>{
       console.log(del);
       let deleteUser=data.filter((eachitem)=>{
        return eachitem.id !==del;
       })
       setdata(deleteUser)
    }
  return (
    <div>
        <h2>helo</h2>
        
       <ul id='parent'>
        {
            data.map((eachperson,index)=>{
                const{username,mobile,emailid,id}=eachperson;
                return(
                    <li key={index} id="component">
                        <p>username is: <b> {username}</b></p>
                        <p>mobile number is:{mobile}</p>
                        <p>email: <i> {emailid}</i></p>
                        <button onClick={()=>clickDel(id)}>delete </button>
                    </li>
                )
            })
        }
       </ul>
        
    </div>
  )
}


export default Useg1