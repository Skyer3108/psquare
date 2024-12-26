const mongoose=require('mongoose')

const attendanceSchema=new mongoose.Schema({


    employeeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'emp',

        requried:true
    },

   
    status:{
        type: String,
        enum: ['Present', 'Absent', 'Work from home', 'Medical Leave'],
        required: true
    },
    task: {
        type: String,
        required: false 
    }
})

module.exports =mongoose.model('attendance',attendanceSchema)