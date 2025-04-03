const transactionService = require('../services/transaction.service');
exports.createTransaction = async (req, res) => {
    try {
        
        const transaction = await transactionService.createTransaction(req.body);
        res.status(201).send(transaction);
    } catch (error) {
        res.status(400).send(error.message);
    }   
}
exports.getAllTransactions = async (req, res) => {
    try {
        console.log(req.user.user_id,req.params.id);
        if(req.user.role==="admin"){
            const transactions = await transactionService.getAllTransactions();
            return res.status(200).send(transactions);
        }   
        
        // if(req.user.user_id.toString()!==req.params.id.toString()){
        //    return res.status(400).send("You are not authorized to view this transactions");
        // } 
        const transactions = await transactionService.getAllTransactionsByUserId(req.user.user_id);
       return res.status(200).send(transactions);
    } catch (error) {
      return  res.status(400).send(error.message);
    }
}
exports.getTransactionById = async (req, res) => {
    try {
        const transaction = await transactionService.getTransactionById(req.params.id);
        res.status(200).send(transaction);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
exports.updateStatus = async (req, res) => {
    try {
        const userId = req.params.userid;
        if(req.user.role==="admin"){
        const transaction = await transactionService.updateStatus(req.params.id, req.body.status);
        res.status(200).send(transaction);
    }
    if(!userId){
        return res.status(400).send("Campaign Id is required");}
        const transaction = await transactionService.updateStatusByUserId(req.params.id, userId, req.body.status);
        res.status(200).send(transaction);
   

    } catch (error) {
        res.status(400).send(error.message);
    }
}
exports.deleteTransaction = async (req, res) => {
    try {
        const transaction = await transactionService.deleteTransaction(req.params.id);
        res.status(200).send(transaction);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
exports.linkTransactionToCampaign = async (req, res) => {
    try {
        const campaignId = req.params.campaignId;
        if(req.user.role==="admin"){
        const transaction = await transactionService.linkTransactionToCampaign(req.params.transactionId, req.params.campaignId);
        res.status(200).send(transaction);}
        if(!campaignId){
            return res.status(400).send("Campaign Id is required");}
        const transaction = await transactionService.linhTransactionTocampaignByCampaignId(req.params.transactionId, req.params.campaignId);
        res.status(200).send(transaction);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
exports.refundTransaction = async (req, res) => {
    try {
        const transaction = await transactionService.refundTransaction(req.params.transactionId);
        res.status(200).send(transaction);
    } catch (error) {
        res.status(400).send(error.message);
    }
}