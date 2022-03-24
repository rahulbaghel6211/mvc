const express=require("express");

const tarnsporter=require("../configs/db");
const user=require("../model/batch.model");

const user=require("../model/evalution.model");
const user=require("../model/student.model");
const user=require("../model/user.model");
const user=require("../model/submission.model");

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
module.exports = app;