import React,{useEffect,useState} from 'react'
const URL=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
const UeEg2=()=>{
    const[drinksdata,setDrinksdata]=useState([])
    const [inputValue,setInputvalue]=useState("")
    const[loading,setloading]=useState(false)
    const fetchDrinks=async(apiUrl)=>{
        setloading(true)
       try {
        const response= await fetch(apiUrl)
        const {drinks}=await response.json()
        setDrinksdata(drinks)
        setloading(false)

        if (!drinks) {
           throw new Error("data not found")
        }
       } catch (error) {
        
       }
    }

    useEffect(()=>{
        const correctURL=`${URL}${inputValue}`
       fetchDrinks(correctURL)
    },[inputValue])
    
    if (loading) {
        return(
            <h2>please wait loading....</h2>
        )
    }


    return(
        <div>
            
            <form>
                <input type="text" name="search" id="search" placeholder='enter your fav drink...'
                value={inputValue}
                onChange={(e)=>{
                    setInputvalue(e.target.value)
                }}/>
            </form>
            <ul className='cocktailData'>
                {
                    drinksdata.map((eachdrink)=>{
                        const{idDrink,strCategory,strDrinkThumb}=eachdrink
                        return(
                            <li key={idDrink}>
                                <div>
                                    <img src={strDrinkThumb} alt="" />
                                </div>
                                <div className="text">
                                    <h4>{strCategory}</h4>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}





export default UeEg2