const {InfoModel2}=require("../Models/info2.model")
const {Router}=require("express")

const info2Router=Router()

info2Router.post("/add",async(req,res)=>{
    try{
        const info1=new InfoModel2(req.body)
        await info1.save()
res.send("Data Added to info1 successfully")
    }catch(er){
res.send(er.message)
    }
})

info2Router.get("/",async(req,res)=>{
    try{
const info1=await InfoModel2.find()
res.send(info1)
    }catch(er){
res.send(er.message)
    }
})


info2Router.patch("/update/:id",async(req,res)=>{
    const {id}=req.params
    try{
   
        await InfoModel2.findByIdAndUpdate({_id:id},req.body)
   res.send("Data Updated Successfully")

    }catch(er){
res.send(er.message)
    }
})

info2Router.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    try{
   
        await InfoModel2.findByIdAndDelete({_id:id},req)
   res.send("Data Deleted Successfully")

    }catch(er){
res.send(er.message)
    }
})

module.exports={
    info2Router
}