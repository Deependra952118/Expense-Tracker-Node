const { async } = require('rxjs');
const { message } = require('statuses');
const Transaction = require('../models/Transaction');


//get all transaction
exports.getTranactions = async(req,res,next) => {
  try {
      const transactions = await Transaction.find();
       return res.status(200).json({
           success:true,
           count:transactions.length,
           data:transactions
       })
  } catch (err) {
    return res.status(500).json({
        success:false,
        error:'Server error'
    });
    }
}


//add all transaction
exports.addTranactions = async(req,res,next) => {
    try {
        const {text,amount} = req.body;
        const transaction = await Transaction.create(req.body);
        return res.status(201).json({
            success:true,
            data:transaction
        })}
         catch (err) {
         
            return res.status(500).json({
                success:false,
                error:'Server error'
            });
         
    }
}





//delete all transaction
exports.deleteTranactions = async(req,res,next) => {
  try {
      const transaction = await Transaction.findById(req.params.id);
      if(!transaction){
        return res.status(404).json({
            success:false,
            error:'No Transaction Found'
      })}
      await transaction.remove();
      return res.status(200).json({
          sucess:true,
          data:{}
      })
  } catch (err) {
    return res.status(500).json({
        success:false,
        error:'Server error'
    });
  }
}