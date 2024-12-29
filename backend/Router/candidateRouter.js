const express=require('express')
const { addCandidate, getCandidate, updateStatus, deleteCandidate } = require('../Controller/candidateController')

const candidateRouter=express.Router()

candidateRouter.post('/addcadidate',addCandidate)
candidateRouter.get('/getall-candidate',getCandidate)
candidateRouter.patch('/update-candidate/:id',updateStatus)
candidateRouter.delete('/delete-cadidate/:id',deleteCandidate)


module.exports=candidateRouter