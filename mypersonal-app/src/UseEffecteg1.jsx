import React,{useState, useEffect} from "react";
const URL="https://jsonplaceholder.typicode.com/users";
const UseEffecteg1 =()=> {
    const [userData,setUsersData]=useState([]);
    const [loading,setloading]=useState(false)
    
    const fetchUserData=async(apiurl)=>{
        setloading(true)
       
       try {
        const response=await fetch(apiurl);
        const data= await response.json();
        setUsersData(data);
        setloading(false)
       
       } catch (error) {
        setloading(false)
        
       }

    };
    useEffect(()=>{
        fetchUserData(URL)
    },[]);
    if (loading) {
        return (
            <div>
                please wait loading...
            </div>
        )
    }
    return(
        <div>
           <h1>its users data</h1>
           <ul>
            { 
            userData.map((eachuser)=>{
                const{name,id,email}=eachuser;
                return(
                    <li key={id}>
                        <div>{name}</div>
                        <div>{email}</div>
                    </li>
                )
            })
            }
           </ul>
            
        </div>
    )
}

export default  UseEffecteg1