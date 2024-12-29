const candidateSchema = require('../Schema/candidateSchema')
const empSchema=require('../Schema/empSchema')
const addCandidate = async (req, res) => {

    const { name, email, phno,position, 
        experience, } = req.body

    try {

        if (!name || !email || !phno ||  !position  || !experience) {
            return res.status(400).send({
                message: 'All fields are required'
            });
        }

        console.log(name, email, phno, position, 
            experience,)


        const emailExist=await candidateSchema.findOne({email})

        if(emailExist){
            return res.send({
                status:400,
                message:'Email Already Exists'
            })
        }
        const newCandidate = new candidateSchema({
            name, email, phno,  position, 
            experience,
        })
      
        
        const saveCandidate = await newCandidate.save()
        console.log(name, email, phno, position,
            experience,)

        return res.send({
            status: 200,
            candidate: saveCandidate,
            message: 'Candidate Added Sucessfully'
        })
    } catch (err) {
console.log(err.message)
        return res.send({
            status: 400,
            message: 'Adding Candidate Error',
            err:err.message
        })
    }

}

const getCandidate = async (req, res) => {


    try {

        const candidates = await candidateSchema.find()

        return res.send({
            status: 200,
            data: candidates,

        })


    } catch (err) {
        return res.send({
            status: 500,
            message: 'Error fetching candidates',
            error: err.message
        })
    }
}

const updateStatus = async (req, res) => {

    try {

        const { id } = req.params

        const { status } = req.body;



        if (!['new', 'rejected', 'ongoing', 'selected'].includes(status)) {
            return res.send({
                status: 400,
                message: 'Invalid status value'
            });
        }

        console.log(id,status)
        const updateCandidate = await candidateSchema.findByIdAndUpdate(id, { status }, { new: true })

        if (!updateCandidate) {
            return res.send({
                status: 404,
                message: 'Candidate not found'
            })
        }

        if(status==='selected'){

            console.log('selected')
            const existingEmail=await empSchema.findOne({email:updateCandidate.email})

            if (existingEmail) {
                return res.send({
                    status:400,
                  message: 'This candidate is already an employee.',
                });
              }

              const newEmp=new empSchema({
                name:updateCandidate.name,
                email:updateCandidate.email,
               phno:updateCandidate.phno,
               positon:updateCandidate.position,
               dob:new Date()
            

              })

             const emp= await newEmp.save();

              return res.send({
                status:200,
                emp,
                message:'Candidate status updated to "selected" and moved to employee list.'
            
              })


        }



        return res.send({
            status: 200,
            message: 'Candidate status updated successfully',
            candidate: updateCandidate
        })



    } catch (err) {

        res.send({
            status: 400,
            message: 'Error updating candidate status',
            error: err.message
        })

    }

}

const deleteCandidate = async (req, res) => {

    const { id } = req.params
    try {

        const delCandidate = await candidateSchema.findByIdAndDelete({ _id: id })

        if (!delCandidate) {
            return res.send({
                status: 404,
                message: 'Candidate not found'
            })
        }

        return res.send({
            status: 200,
            message: 'Candidate deleted successfully'
        })


    } catch (err) {

        return res.send({
            status: 400,
            message: 'Error deleting candidate',
            error: err.message
        })

    }
}

module.exports={addCandidate,deleteCandidate,updateStatus,getCandidate}