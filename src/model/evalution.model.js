const mongoose = require("mongoose");
    const evalutionSchema= new mongoose.Schema(
        {
         date_of_evalution:{
           type:Date,
           required:true,
           ref:"user",

         },

         Batchid:{
            type:String,
            required:true,
            ref:"batch",
 
          },

         
        },
        {
            versionKey: false,
            timestamps: true, // createdAt, updatedAt
          }
        
        );
        const Evalution=mongoose.model("evalution",evalutionSchema);
        module.exports=user;