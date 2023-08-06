const express=require("express")
require('dotenv').config()
const cors =require("cors")
const {connection}=require("./db")
const {userRouter}=require("./Routes/user.route")
const {info1Router}=require("./Routes/info.route")
const {info2Router}=require("./Routes/info2.route")
const {info3Router}=require("./Routes/info3.route")
const app=express()



app.use(express.json()) // inbuild middleware
app.use(cors())   //community Middelware


app.use("/admin",userRouter)
app.use("/info",info1Router)
app.use("/info2",info2Router)
app.use("/info3",info3Router)
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