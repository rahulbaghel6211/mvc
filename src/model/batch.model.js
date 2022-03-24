
const mongoose = require("mongoose");
 const batchSchema= new mongoose.Schema(
    {
      BatchName:{type:String ,required:true},
     
    },
    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
      }
    
    );
    const Batch=mongoose.model("batch",batchSchema);
module.exports=user;
