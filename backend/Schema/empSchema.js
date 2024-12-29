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
    position:{
        type:String,
        required:true
    },
    department:{
        type:String,
        enum:['Team Lead','Intern','senior Developer','Full Time'],
        default:'Intern'

    },
    dob:{
        type:Date,
        required:true
    }
    // department:{
    //     type:String,
    //     required:true
    // }



})

module.exports=mongoose.model('emp',empSchema)