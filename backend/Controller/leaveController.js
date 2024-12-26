const leaveSchema=require('../Schema/leaveSchema')

const empSchema=require('../Schema/empSchema')

const createLeave=async(req,res)=>{
    const { employeeId, startDate, endDate, reason, documents } = req.body;

    try{

        

    }catch(err){
        return res.send({
            status:400,
            message:'Leave Creating Error'

        })
    }
}