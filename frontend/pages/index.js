import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useSelector,useDispatch } from 'react-redux'
import { useState,useEffect } from 'react'
import { getfirstData } from '@/Redux/homeReducer/action'

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
   {state.first.map((el)=>{
    return <h1>{el.title}</h1>
   })}
  </div>
  )
}
