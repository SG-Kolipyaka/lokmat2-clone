import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '.././styles/Imagescroll.module.css'
import { useSelector,useDispatch } from 'react-redux'
import { useState,useEffect } from 'react'
import { getfirstData } from '@/Redux/homeReducer/action'
import NewsScroll1 from './comp/NewsScroll1'
import Imagescroll from './comp/Imagescroll'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const dispatch=useDispatch()

  const state=useSelector((store)=>store.postReducer)

  useEffect(()=>{
    dispatch(getfirstData)
    console.log(state)
  },[])
  return (
  <div>
   {state.first.map((el,i)=>{
    if(i==0){
      return <div style={{alignItems:"center",textAlign:"center"}}>
        <h1 style={{color:"red"}}>BREAKING NEWS</h1>
        <img style={{width:"50%"}} src={el.featured_image} alt="img"/><br/>
        
        <h1 style={{color:"red",display:"inline"}}>{el.category} :</h1>
        <h1 style={{display:"inline"}}>{el.title}</h1>
      </div>

    }
   })}
   <hr/>
   {state.first.map((el,i)=>{
    if(i>0 && i<4){
      return <NewsScroll1 key={i} data={el}/>
    }
   })}

<div className={styles.wrapper}>
{state.first.map((el,i)=>{
    if(i>3 && i<7){
      return <Imagescroll key={i} data={el}/>
    }
   })}
</div>



<div>
{state.first.map((el,i)=>{
    if(i>6){
      return <NewsScroll1 key={i} data={el}/>
    }
   })}
</div>
  </div>
  )
}
