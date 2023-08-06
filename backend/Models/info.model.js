const mongoose=require("mongoose")

const Info1Schema=mongoose.Schema({
    link:{type:String,require:true},
    featured_image:{type:String,require:true},
    title:{type:String,require:true},
    category:{type:String,require:true},

})



const InfoModel1=mongoose.model("info1",Info1Schema)

module.exports={
    InfoModel1
}