const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const app =express();
app.use(express.json());
const router = express("../router")
app.use("/router",router)

app.get("./",async(req,res)=>{
    res.status(200).send({msg:"data retrieved succesefully"})
})

app.listen(8000,async()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Server is running on port 8000")

    }catch(error){
        console.log("Something went wrong",error)
    }
})