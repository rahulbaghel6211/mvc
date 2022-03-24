const express=require("express");
const mongoose=require("mongoose");
const app=express();

const connect=()=>{

    return mongoose.connect(
    "mongodb+srv://dhaval:dhaval_123@cluster0.ljuvz.mongodb.net/web15-atlas?retryWrites=true&w=majority"
    );
};
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
    


app.get("/users",async(req,res)=>{

    try {
        const users=await User.find().lean().exec();
        return res.status(201).send(users);
        
    } catch (err) {
        return res.status(501).send({message:err.message})
        
    }
});
app.post("/users",async(req,res)=>{

  try {
      const users=await User.findOne({$and:[{marks},{id:{$gt:90}}]}).lean().exec();
      return res.status(201).send(users);
      
  } catch (err) {
      return res.status(501).send({message:err.message})
      
  }
});


app.listen(5555,async()=>{
    try {
        await connect();
        
    } catch (error) {
        console.log(error)
    }
    console.log("listening on port 5555")
});