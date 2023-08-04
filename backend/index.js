const express=require("express")
require('dotenv').config()
const cors =require("cors")
const {connection}=require("./db")





const app=express()


app.use(express.json()) // inbuild middleware
app.use(cors())   //community Middelware




app.get("/",(req,res)=>{
    res.send("HOME ROUTE")
})




app.listen(process.env.PORT,async()=>{
    try{
await connection
console.log("Connected to DB")
    }catch(er){
console.log(er)
    }
console.log(`server is running at ${process.env.PORT}`)
})