const attendanceSchema=require('../Schema/attendanceSchema')

const empSchema=require('../Schema/empSchema')

const addOrUpdateAttendance=async(req,res)=>{

    const {employeeId,status,task}=req.body;

    try{

        let attendance=await attendanceSchema.findOne({employeeId,date})

        if(attendance){
            attendance.status = status;
            attendance.task = task;
            await attendance.save();
            return res.send({
                status: 200,
                message: 'Attendance updated successfully',
                attendance
            });
        }

        else{
            attendance = new attendanceSchema({ employeeId, status, task });
            await attendance.save();
            return res.send({
                status: 200,
                message: 'Attendance added successfully',
                attendance
            });
        }
    }catch(err){

        return res.send({

            status:400,
            message:'Error in adding attendance',
  error:err.message
        })
    }
}

const getAttendance=async(req,res)=>{

    try{
        const attendances=await attendanceSchema.find().populate('employeeId');

        return res.send({
            status: 200,
            data: attendances
        });

    }catch(err){

        return res.send({
            status:400,
            message:'Error fetching attendance data',
            error:err.message
        })
    }   
}

module.exports={addOrUpdateAttendance,getAttendance}