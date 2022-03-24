
const mongoose = require("mongoose");
const userSchema= new mongoose.Schema(
    {
        firstName:{type:String,required:true},
        lastName:{type:String,required:false},
        gender:{type:String,required:true},
        dateOfBirth:{type:Number,required:true},
    },
    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
      }
    
    );
    const User=mongoose.model("user",userSchema);