const mongoose = require('mongoose');


const TransactionSchema = new mongoose.Schema({
    text:{type:String,trim:true,required:true,isActive:true},
    amount:{type:Number,required:[true,'Please add a number'],isActive:true},
    createdAt:{type:Date,default:Date.now,isActive:true}
});


module.exports=mongoose.model('Transaction',TransactionSchema);