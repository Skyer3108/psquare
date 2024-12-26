const mongoose=require('mongoose')

const candidateSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    phno:{
        type:String,
        required:true,
        unique: true
    },
    position:{
        type:String,
        required:true,
        
    },
    status:{
        type:String,
        
  enum: ['new', 'rejected', 'ongoing', 'selected'],
    default: 'new'
    },
    experience:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('candidate',candidateSchema)