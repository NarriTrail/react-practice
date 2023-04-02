import React from 'react'
import { useState,useEffect } from 'react'
const URL="https://fakestoreapi.com/products"
const Fakeapi = () => {
    const[input,setInput]=useState("")
    const [cart,setCart]=useState([])
    const addtoCart=(each)=>{
      cart.push(each)
      console.log(cart);
    }
    const [products,setProducts]=useState([])
    const fetchProduct=async(apiUrl)=>{
        const response=await fetch(apiUrl)
        const data=await response.json()
        setProducts(data)
        console.log(data);
    }
    useEffect(()=>{
        fetchProduct(URL)
    },[input])
  return (
    <div>
        <h1>welcome to store</h1>
        <input type="text" placeholder='enter product name' value={input} onChange={(e)=>{
            setInput(e.target.value)
        }}  />
        <button type='button' onClick={()=>fetchProduct}>search</button>
        <ul className='proparent'>
            {
                products.map((each)=>{
                    const{id,description,image,category,price}=each
                  return(
                    <li key={id} className="products">
                        <div><img src={image} alt="" /></div>
                        <h1>{category}</h1>
                        <p>{description}</p>
                        <h2>{price}</h2>
                        <button onClick={()=>addtoCart(each)}>add to cart</button>
                    </li>
                  )
                })
            }
        </ul>
    </div>
  )
}

export default Fakeapi