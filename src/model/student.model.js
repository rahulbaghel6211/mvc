const mongoose = require("mongoose");

const studentSchema= new mongoose.Schema(
    {
      roll_number:{type:Number,required:true},
      current_batch:{type:String,required:true},
    },
    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
      }
    
    );
    const Student=mongoose.model("student",studentSchema);
    module.exports=user;
   