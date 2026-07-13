const mongoose=require("mongoose");

const employeeSchema=mongoose.Schema({
    name:{type:String,require:true},
    department:{type:String,require:true},
    salary:{type:Number,require:true}
})


module.exports=mongoose.model("Employees",employeeSchema);