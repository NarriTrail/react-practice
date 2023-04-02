import React ,{useState,useEffect}from "react";

const URL="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const UeEgpractice2=()=>{
    const [drinksData,setdrinksData]=useState([])
    const [inputValue,setinputValue]=useState("")
    const[loading,setLoading]=useState(false)
    const[isError,setError]=useState({status:false,msg:""})

    const fetchDrinks= async(apiUrl)=>{
        setLoading(false)
        setError({status:false,msg:""})
       try {
        const response= await fetch(apiUrl)
        const {drinks}= await response.json()
        setdrinksData(drinks)
       // console.log(drinks);
       setLoading(false)
       setError({status:false,msg:""})
       if (!drinks) {
        throw new Error("no drink found")
        
       }
        
       } catch (error) {
        setLoading(false)
        setError({status:true, msg:"something went wrong"})
        
       }
    }
    useEffect(()=>{
        const correctUrl=`${URL}${inputValue}`
        fetchDrinks(correctUrl)
    },[inputValue])

    if (loading) {
        return(
            <div>
                <h1>please wait data is loading</h1>
            </div>
        )
    }
    if (isError.status) {
        return(
            <div>
                <h1 style={{color:"red"}}>please check the link address</h1>
            </div>
        )
    }


    return(
        <div>
           <h1>hi0</h1>
           <form>
            <input type="text" name="search" id="search" placeholder="enter your fav drink.."
            value={inputValue}
            onChange={(e)=>{
                setinputValue(e.target.value)
            }} />
           </form>
           <ul className="cockDrinks">
            {
                drinksData.map((eachdrink)=>{
                    const{idDrink,strCategory,strDrinkThumb}=eachdrink
                    return(
                        <li key={idDrink}>
                            <div className="card">
                                <div className="imageCock">
                                    <img src={strDrinkThumb} alt="" />
                                </div>
                                <div>
                                    {strCategory}
                                </div>

                            </div>
                        </li>
                    )
                })
                
            }
           </ul>

        </div>
    )
}



export default UeEgpractice2