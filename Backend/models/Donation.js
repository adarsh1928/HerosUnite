const mongoose=require("mongoose")

const DonationSchema=new mongoose.Schema(
    {
        donatedBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        donatedTo:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"soldierProfile"
        },
        amount:{
            type:Number,
            require:true
        }
    }
)

module.exports=mongoose.model("donation",DonationSchema)