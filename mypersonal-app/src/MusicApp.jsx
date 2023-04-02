import React ,{useState,useEffect}from 'react'
//const URL="telugu-skillhub-own-music-api-default-rtdb.firebaseio.com/music-api/-MdCU2vPsoSsuIYD2akz.json"
const URL="https://fakestoreapi.com/products/category/electronics"
function MusicApp() {
    const[items,setItems]=useState([])
    const[search,setSearch]=useState("")

    const submitHandler=async(apiUrl)=>{

      const response= await fetch(apiUrl)
      const data=await response.json()
      console.log(data);
      setItems(data)
    }
    useEffect(()=>{
      submitHandler(URL)
    },[])
    if (!search.length===0) {
      alert("input empty")
    }
    
  return (
    
    <div>
        <input type="text" value={search} onChange={(e)=>{
          setSearch(e.target.value)
        }} />
        <input type="button" value="search" onClick={submitHandler}/>

        <ul className='productContainer'>
          {
            items.map((eachItem)=>{
              const{id,title,price,image,description}=eachItem

              return(
                <li key={id} className='productItem'>
                  
                  <img src={image} alt="" />
                    <h2>{title}</h2>
                    <h4>{price}</h4>
                    <p>{description}</p>
                  
                </li>
              )
            })
          }
        </ul>
    </div>

    
  )
}

export default MusicApp