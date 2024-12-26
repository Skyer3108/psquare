const mongoose=require('mongoose')


mongoose.connect(process.env.MONGU_URI).then(()=>{

    console.log('MONGODB RUNNING SUCESFULLY')

}).catch((err)=>{
    console.log(`ERROR ${err}`)
})