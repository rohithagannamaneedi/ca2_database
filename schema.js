const mongoose = require("mongoose")
const schema = mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    caloriesBurned:{
        type:Number
    },
    exercises:[{
        name:{
            type:String,
            required:true

        },
        reps:{
            type:Number
        },
        sets:{
            type:Number
        },
        weights:{
            type:Number
        }
    }]
});

const fitnessModel= mongoose.model("fitness",schema);
module.exports=fitnessModel;

