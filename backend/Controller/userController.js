const userSchema=require('../Schema/userSchema')

const validator=require('validator')
const jwt=require('jsonwebtoken')

const bcrypt=require('bcrypt')

const createToken=(id)=>{

    return jwt.sign({id},process.env.JWT_SECRET)


}

const registerUser=async(req,res)=>{
const {name,email,password, confirmpassword}=req.body

    try{

        const emailExist=await userSchema.findOne({email})

        if(emailExist){
            return res.send({
                status:400,
                message:'Already email Exist'
            })
        }

        if(!validator.isEmail(email)){
            return res.send({
                status:400,
                message:'Please enter a valid email'
            })
        }


        if(password.length<8){

            return res.send({
                status:400,
                sucess:false,
                message:'Please enter 8 charecters'
            })

        }

        if(password!==confirmpassword){
            return res.send({
                status:400,
                sucess:false,
                message:'Password Not Match'
            })
        }

        const salt=await bcrypt.genSalt(10)

        const hashedPassword=await bcrypt.hash(password,salt)

        const newUser=new userSchema({
            name,
            email,
            password:hashedPassword
        })

        const user=await newUser.save()

        const token=createToken(user._id)

        return res.send({
            status:200,
            message:'Register Sucessfully',
            token

        })

    }catch(err){
        res.send({
            status:400,
            message:'Error on Registering'
        })
    }
}


const loginUser=async(req,res)=>{
  
    const {email,password}=req.body

    try{

        const user=await userSchema.findOne({email})

        if(!user){

            return res.send({
                status:400,
                message:"User doesn't exist"
            })
        }

        const isMatch=await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.send({
                status:400,
                 message:"Invalid credentials"
            })
        }

        const token=createToken(user._id)


        return res.send({
            status:200,
            message:'Login Sucessfully',
            token
        })
    }catch(err){

        return res.send({

            status:400,
            message:'Login Error'
        })
    }
}

module.exports={loginUser,registerUser}