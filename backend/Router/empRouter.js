const express=require('express')
const { updateEmp, deleteEmp, getEmp } = require('../Controller/empController')

const empRouter=express.Router()

empRouter.get('/get-employees',getEmp)
empRouter.patch('/emp-update/:_id',updateEmp)
empRouter.delete('/emp-delete/:id',deleteEmp)
module.exports=empRouter

