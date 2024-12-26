const mongoose=require('mongoose')

const empSchema=new mongoose.Schema({


    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phno:{
        type:String,
        required:true
    },
    positon:{
        type:String,
        required:true
    },
    // department:{
    //     type:String,
    //     required:true
    // }



})

module.exports=mongoose.model('emp',empSchema)