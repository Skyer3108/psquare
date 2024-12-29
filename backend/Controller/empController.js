const empSchema=require('../Schema/empSchema')

const mongoose=require('mongoose')
const getEmp=async(req,res)=>{


    try{
const employees=await empSchema.find();

return res.send({
    status:200,
    message:'Fectching Employees Sucessfully',
    employees:employees
})
    

    }catch(err){

        return res.send({
            status:400,
            error:err.message,
            message:'Error on Fetching Employees'
        })

    }}

const updateEmp=async(req,res)=>{

    const {_id}=req.params
    console.log(_id)

    // if (!mongoose.Types.ObjectId.isValid(_id)) {
    //     return res.status(400).send({
    //       status: 400,
    //       message: 'Invalid Employee ID',
    //     });
    //   }
   const {name,email,phno,position, department,dob}=req.body;

   console.log(name,email,phno,position,dob)
    try{
        
        const updated=await empSchema.findByIdAndUpdate(_id,{ name, email, phno, position, department, dob },{new:true})

        if (!updated) {
            return res.status(404).send({
              status: 404,
              message: 'Employee not found',
            });
          }
      
        return res.send({
            status:200,
            message:'Updated Employee Sucessfully',
            data:updated
        })
    }catch(err){
console.log(err.message)
        return res.send({
            status:400,
            message:'Update Employee Error',
            error:err.message
        })
    }


}

const deleteEmp=async(req,res)=>{

    const { id } = req.params

    try{

        const delEmp=await empSchema.findByIdAndDelete({ _id: id })

        if (!delEmp) {
            return res.send({
                status: 404,
                message: 'Employee not found'
            })
        }

       return res.send({
            status:200,
            message:'Employee Deleted Sucessfully'
        })

    }catch(err){

        return res.send({

            status:400,
            message:'Deleted Employee Sucessfully'

        })
    }
}
module.exports={updateEmp,deleteEmp,getEmp}