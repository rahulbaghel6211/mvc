

const mongoose = require("mongoose");
        const submissionSchema= new mongoose.Schema(
            {
              Evalution_id:{type:String ,
                ref:"evalution",
                required:true},
             
            },
            {
                user_id:{type:String ,
                  ref:"user",
                  required:true},
               
              },
              {
                marks:{type:Number,
                  required:true},
               
              },
            {
                versionKey: false,
                timestamps: true, // createdAt, updatedAt
              }
            
            );
            const Submission=mongoose.model("submission",submissionSchema);
    
            module.exports=user;