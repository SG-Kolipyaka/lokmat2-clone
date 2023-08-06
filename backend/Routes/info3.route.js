const {InfoModel3}=require("../Models/info3.model")
const {Router}=require("express")

const info3Router=Router()

info3Router.post("/add",async(req,res)=>{
    try{
        const info1=new InfoModel3(req.body)
        await info1.save()
res.send("Data Added to info1 successfully")
    }catch(er){
res.send(er.message)
    }
})

info3Router.get("/",async(req,res)=>{
    try{
const info1=await InfoModel3.find()
res.send(info1)
    }catch(er){
res.send(er.message)
    }
})


info3Router.patch("/update/:id",async(req,res)=>{
    const {id}=req.params
    try{
   
        await InfoModel3.findByIdAndUpdate({_id:id},req.body)
   res.send("Data Updated Successfully")

    }catch(er){
res.send(er.message)
    }
})

info3Router.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    try{
   
        await InfoModel3.findByIdAndDelete({_id:id},req)
   res.send("Data Deleted Successfully")

    }catch(er){
res.send(er.message)
    }
})

module.exports={
    info3Router
}