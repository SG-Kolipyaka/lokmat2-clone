import {useState,useEffect} from 'react'

const admin = () => {
    const [data,setData]=useState([])

const getData=()=>{
    return fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json()).then((res)=>{
setData(res)
console.log(res)
    })
}
useEffect(()=>{
    getData()
},[])

  return (
    <div>
        {data.map((el)=>{
            return <h1>{el.title}</h1>
        })}
        
    </div>
  )
}

export default admin