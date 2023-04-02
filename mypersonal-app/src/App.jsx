import React from 'react'
import { useState } from 'react'


function App() {
  const [search,setsearch]=useState("")
  const SubmitHandler=(e)=>{
  e.preventDefault();
  // const appid="kjfjsfoshfd";
  // const appkey="jiwehf498yruh2urw";
  fetch(` https://api.edamam.com/api/recipes/v2${search}`).then(
    response=>response.json()
  ).then(
    data=>console.log(data)
  )
  
  console.log(search);
  }

  return (
    <center>
      <div>
      <h1>Naresh project</h1>
    </div>
    <form onSubmit={SubmitHandler}>
      <input type="text"  value={search} onChange={(e)=>setsearch(e.target.value)}/><br />
      <input type="submit" value="search" />
    </form>
    </center>
  )
}

export default App