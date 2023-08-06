
import { useSelector,useDispatch } from 'react-redux'
import { useState,useEffect } from 'react'
import { getfirstData,deletefirstData ,postfirstData} from '../Redux/homeReducer/action'
import styles from ".././styles/admin.module.css"
import Link from 'next/link'
import PrivateRoute from './PrivateRoute'

const ttstyle={
    border: '2px solid brown',
    borderCollapse: 'collapse',
    width: '100%',
  };

  const ddstyle={
    padding: '8px',
    textAlign: 'left',
    borderBottom: '1px solid brown',
  };

  const but1 = {
    backgroundColor: 'brown',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

const initialData={
    title:"",
    category:"",
    featured_image:"",
    link:""
}

const admin = () => {
    const [data,setData]=useState(initialData)
    
  const dispatch=useDispatch()

  const state=useSelector((store)=>store.postReducer)

  const handleDelete=(id)=>{
    dispatch(deletefirstData(id))
    alert("data Deleted Successfully")
    dispatch(getfirstData)
  }

  const handelSubmit=(e)=>{
e.preventDefault()
dispatch(postfirstData(data))
alert("Data Posted Successfully")
dispatch(getfirstData)
setData(initialData)

  }

  const handelChange=(e)=>{
const {name,value}=e.target
setData({...data,[name]:value})
  }
  useEffect(()=>{
    dispatch(getfirstData)
    console.log(state)
  },[])
  return (
    <PrivateRoute>
<div>
    <h1 style={{textAlign:"center"}}>ADMIN SIDE</h1>
    <br/>

    <form className={styles.form22} onSubmit={handelSubmit}>
        <h3 style={{textAlign:"center",color:"brown"}}>POST THE FIRST BATCH NEWS</h3>
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


<br/>
    <br/>
    <h2 style={{color:"brown",textAlign:"center"}}>First Batch Data Table</h2>
<table className="admin22" style={ttstyle}>
        
        <thead>
          <tr>
            <th style={ddstyle}>Title</th >
            <th style={ddstyle}>Category</th>
            <th style={ddstyle}>Image</th>
            <th style={ddstyle}>Edit</th >
            <th style={ddstyle}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {state.first.map((el,i) => (
            <tr key={el.id}>
              <td style={ddstyle}>{el.title}</td>
              <td style={ddstyle}>{el.category}</td>
              <td style={ddstyle}>
                <img src={el.featured_image} alt={el.title} style={{ width: '100px', height: 'auto' }} />
              </td>
              <td style={ddstyle}>
                <button style={but1} ><Link href={`/news/${el._id}`} >EDIT</Link></button>
              </td>
              <td style={ddstyle}>
                <button style={but1} onClick={() => handleDelete(el._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
</div>
</PrivateRoute>
  );
};

export default admin;
