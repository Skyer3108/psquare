const express=require('express')

const app=express()

const dotenv=require('dotenv')
const cors = require('cors'); 

dotenv.config()

const db=require('./db')
const userRouter = require('./Router/userRouter')
const candidateRouter = require('./Router/candidateRouter')
const empRouter = require('./Router/empRouter')

const PORT=5005;
app.use(cors());
app.use(express.json())
app.use('/api/user',userRouter)
app.use('/api/candidate',candidateRouter)
app.use('/api/emp',empRouter)

app.get('/',(req,res)=>{
    res.send({
        message:'Hello'
    })
})

app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})