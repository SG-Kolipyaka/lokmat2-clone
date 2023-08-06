const {InfoModel1}=require("../Models/info.model")
const {Router}=require("express")

const info1Router=Router()

info1Router.post("/add",async(req,res)=>{
    try{
        const info1=new InfoModel1(req.body)
        await info1.save()
res.send("Data Added to info1 successfully")
    }catch(er){
res.send(er.message)
    }
})

info1Router.get("/",async(req,res)=>{
    const {id}=req.params
    try{
const info1=await InfoModel1.find()
res.send(info1)
    }catch(er){
res.send(er.message)
    }
})


info1Router.get("/a",async(req,res)=>{
    let {id}=req.query
    try{
const info1=await InfoModel1.findOne({_id:id})
res.send(info1)
    }catch(er){
res.send(er.message)
    }
})



info1Router.patch("/update/:id",async(req,res)=>{
    const {id}=req.params

    try{
        const info=  await InfoModel1.find({_id:id})
   
      await InfoModel1.findByIdAndUpdate({_id:id},req.body)
   res.send({msg:"Data Updated Successfully",data:info})

    }catch(er){
res.send(er.message)
    }
})

info1Router.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    try{
   
        await InfoModel1.findByIdAndDelete({_id:id},req)
   res.send("Data Deleted Successfully")

    }catch(er){
res.send(er.message)
    }
})

module.exports={
    info1Router
}