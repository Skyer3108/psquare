const express=require('express')
const { updateEmp, deleteEmp } = require('../Controller/empController')

const empRouter=express.Router()


empRouter.patch('emp-update',updateEmp)
empRouter.delete('emp-delete',deleteEmp)
module.exports=empRouter

