import React from 'react'
import styles from "../../styles/Imagescroll.module.css"

const Imagescroll = ({data}) => {
  return (
    <div className={styles.item1}>
                                <img src={data["featured_image"]} alt=""  className={styles.item}  />
                                <div style={{marginLeft:"10px",width:"100%"}}>
                                <h2 style={{color:"red",display:"inline"}}>{data?.category}  :</h2>
                                
                                <h2 style={{display:"inline",marginLeft:"2px"}}>{data?.title}</h2>
                            </div >
                           
                            </div>
                            
  )
}

export default Imagescroll