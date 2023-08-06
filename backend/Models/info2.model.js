const mongoose=require("mongoose")

const Info2Schema=mongoose.Schema({
    link:{type:String,require:true},
    featured_image:{type:String,require:true},
    title:{type:String,require:true},
    category:{type:String,require:true},

})



const InfoModel2=mongoose.model("info2",Info2Schema)

module.exports={
    InfoModel2
}