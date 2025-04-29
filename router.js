const express= require("express")
const mongoose = require("mongoose")
const router = express.Router()
const fitnessModel = require("../schema")

router.post("/post",async(req,res)=>{
    try{
        const{user,date,duration,caloriesBurned,exercises} = req.body
    if(!user || !date || !duration || !caloriesBurned || !exercises){
        res.status(400).send({msg:"Validation failed:workout"})
    }
    const newfitness = new fitnessModel({
        user,date,duration,caloriesBurned,exercises
    })
    await newfitness.save()
    res.status(200).send({msg:"Posted succesefully",fitness:newfitness})

    }catch(error){
        res.status(500).send({msg:"Something went wrong",error})
    }
})

router.get("/get",async(req,res)=>{
    try{
        const exercise = await fitnessModel.find()
        res.status(200).send({msg:"Retrieved succesefully",exercise})


    }catch(error){
        res.status(500).send({msg:"Something went wrong",error})
    }
})

router.put("/put/:id",async(req,res)=>{
    try{
        const{id}=req.params
        if(!id){
            res.status(400).send({msg:"Validation failed:id"})

        }
    const{user,date,duration,caloriesBurned,exercises} = req.body
    if(!user || !date || !duration || !caloriesBurned || !exercises){
        res.status(400).send({msg:"All fields are required"})
     }
     const updateWorkout = await fitnessModel.findByIdAndUpdate({_id:id},{user,date,duration,caloriesBurned,exercises}) 
     if(!updateWorkout){
        res.status(400).send({msg:"Workout not found"})
     }
     res.status(200).send({msg:"updated succesefully"})
    }

    catch(error){
        res.status(500).send({msg:"Something went wrong",error})
    }
})

router.delete("/delete/:id",async(req,res)=>{
    try{
        const{id}=req.params
        if(!id){
            res.status(400).send({msg:"Validation failed:id"})

        }
        const deleteWorkout = await fitnessModel.findByIdAndDelete({_id:id}) 
     if(!deleteWorkout){
        res.status(404).send({msg:"Workout not found"})
     }
     res.status(200).send({msg:"deleted succesefully"})


    }catch(error){
        res.status(500).send({msg:"Something went wrong",error})
    }
})