const mongoose=require("mongoose")

const Info3Schema=mongoose.Schema({
    link:{type:String,require:true},
    featured_image:{type:String,require:true},
    title:{type:String,require:true},
    category:{type:String,require:true},

})



const InfoModel3=mongoose.model("info3",Info3Schema)

module.exports={
    InfoModel3
}