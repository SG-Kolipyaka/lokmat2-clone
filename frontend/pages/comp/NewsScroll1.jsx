import React from 'react'


const NewsScroll1 = ({data}) => {
 
  return (
  
    <div className='side1'>
                                <br />
                                <div style={{display:"flex",justifyContent:"space-between",width:"100%",marginLeft:"10px"}}>
                                <div >
                                    <img src={data['featured_image']} alt="लोकमत" style={{borderRadius:"30px",width:"100%"}} />
                                </div>
                             <div>
                                
                             </div>
                            <div style={{marginLeft:"15px",width:"100%",textAlign:"left"}}>
                                <h2 style={{color:"red",display:"inline"}}>{data?.category}  :</h2>

                                <h2 style={{display:"inline",marginLeft:"1px"}}> {data?.title}</h2>
                            </div >
                            </div>
                          
                            </div> 
  )
}

export default NewsScroll1