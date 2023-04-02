import React, { useEffect, useState } from 'react'
const URL=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
function Mocktail() {
    const[inputValue,setinputValue]=useState("")
    const[drinks,setDrinks]=useState([])
    const fetchDrinks= async(apiUrl)=>{
        const response=await fetch(apiUrl)
        const {drinks}= await response.json()
        setDrinks(drinks)
        console.log(drinks);
    }
    useEffect(()=>{
        const correctUrl=`${URL}${inputValue}`
        fetchDrinks(correctUrl)
    },[inputValue])
  return (
    <div>
        <h1>juice shop</h1>
        <input type="text" value={inputValue} onChange={(e)=>setinputValue(e.target.value)} />
        <ul>
            {
                drinks.map((eachDrink)=>{
                    const{idDrink,strDrink,strDrinkThumb}=eachDrink
                    return(
                        <li key={idDrink}>
                            <div>
                                <img src={strDrinkThumb} alt="" />
                               
                            </div>
                            <div>
                            <h2>{strDrink}</h2>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Mocktail