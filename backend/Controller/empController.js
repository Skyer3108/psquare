const empSchema=require('../Schema/empSchema')

const updateEmp=async(req,res)=>{

    const {id}=req.params
   const {name,email,phno,position}=req.body;
    try{
        
        const update=await empSchema.findByIdAndUpdate(id,req.body,{new:true})

        return res.send({
            status:200,
            message:'Updated Employee Sucessfully',
            data:update
        })
    }catch(err){

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
module.exports={updateEmp,deleteEmp}