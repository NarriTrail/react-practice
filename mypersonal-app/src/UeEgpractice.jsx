import React,{useEffect,useState} from 'react'
const URL="https://jsonplaceholder.typicode.com/posts";
const UeEgpractice=()=> {
    const[post,setPost]=useState([])
    const [loading,setloading]=useState(false)
    const[isError,setError]=useState({status:false,msg:""})
    const fetchpostDetails=async(apiUrl)=>{
        setloading(true)
        setError({status:false,msg:""})
       try {
        
        const response=await fetch(apiUrl);
        const data=await response.json()
        setPost(data)
        setloading(false)
        setError({status:false,msg:""})
       } catch (error) {
        setloading(false)
        setError({status: true,
            msg:  "something went wrong, pls try again!",})
       }
    }

    useEffect(()=>{
        fetchpostDetails(URL)
    },[]
    )

    if (loading) {
        return(
            <div>
                please wait loading...
            </div>
        )
    }
    if (isError?.status) {
        return (
            <div>
              <h3 style={{ color: "red" }}>{isError?.msg}</h3>
            </div>
          );
    }
  return (
    <div>UeEgpractice

        <ul className='parent'>
            {
                post.map((eachpost)=>{
                    const{id,title,body}=eachpost;
                    return(
                        <li key={id} className="child">
                            <div>
                                {title}
                            </div>
                            <div>
                                {body}
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
   
  )
}

export default UeEgpractice