
 


import { useSelector,useDispatch } from 'react-redux'
import { useState,useEffect } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from "../../styles/admin.module.css"
import {patchfirstData} from "../../Redux/homeReducer/action"

const initialData={
    title:"",
    category:"",
    featured_image:"",
    link:""
}

const specnews = () => {
    const [data,setData]=useState(initialData)
   
    
  const dispatch=useDispatch()


    const router = useRouter();
    const { id } = router.query;

    const getData=(id)=>{
        return axios.get(`http://localhost:8089/info/a?id=${id}`).then((res)=>{
            setData(res.data)
          
        }).catch((er)=>console.log(er))
    }


    const handelSubmit=(e)=>{
        e.preventDefault()
       dispatch(patchfirstData(data,id))
        alert("Data Updated Successfully")
       setData(initialData)
     
        
          }
        
          const handelChange=(e)=>{
        const {name,value}=e.target
        setData({...data,[name]:value})
          }




    useEffect(() => {
        if (id) {
          getData(id);
          console.log(id);
        }
      }, [id]); 
  return (
    <div>
        <br/>
            <form className={styles.form22} onSubmit={handelSubmit}>
        <h3 style={{textAlign:"center",color:"brown"}}>Update THE FIRST BATCH NEWS</h3>
      <div className={styles.ddf}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
         value={data.title}
         onChange={handelChange}
          required
        />
      </div>
      <div className={styles.ddf}>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={data.category}
          onChange={handelChange}
          required
        />
      </div>
      <div className={styles.ddf}>
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="featured_image"
          value={data.featured_image}
          onChange={handelChange}
          required
        />
      </div>
      <div className={styles.ddf}>
        <label htmlFor="link">Link:</label>
        <input
          type="text"
          id="link"
          name="link"
          value={data.link}
          onChange={handelChange}
          
          required
        />
      </div>
      <div className={styles.ddf}>
        <input type="submit" value="Submit" />
      </div>
    </form>

    </div>
  )
}

export default specnews