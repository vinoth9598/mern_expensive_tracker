const transactionRouter = require("express").Router();
const Transaction = require("../models/Transaction") ;

//Add Transaction
transactionRouter.post('/', async(req,res)=>{
    try{
        const transaction =await Transaction.create(req.body);
        res.status(201).json(transaction) ;
    }catch(error){
        res.status(500).json({message:error.message});
    }
}) ;

//Get All Transaction
transactionRouter.get("/", async(req, res)=>{
    try{
        const transactions = (await Transaction.find({})) 
        res.json(transactions) ;
    }catch(error){
        res.status(500).json({message:error.message}) ;
    }
}) ;

//delete Transaction
transactionRouter.delete('/:id', async(req,res)=>{
    try{
        await Transaction.findByIdAndDelete(req.params.id);
        res.json({message: "Transaction Deleted"}) ;
    }catch(error){
        res.status(500).json({
            message:error.message 
        }) ;
    }
})

module.exports = transactionRouter ;