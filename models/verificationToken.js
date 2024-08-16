const mongoose=require('mongoose');
const verificationSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    token:{
        type:String,
        required:true,
    },
})
const verificationModel=mongoose.model('verificationToken',verificationSchema)



module.exports={verificationModel}

