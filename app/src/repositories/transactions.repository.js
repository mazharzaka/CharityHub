const Transaction = require('../models/Transaction.model');

class transactionRepository{
    async createTransaction(transaction){
        return await Transaction.create(transaction);
    }
    async getAllTransactions(){
        return await Transaction.find();
    }
    async getAllTransactionsByUserId(userId){
        return await Transaction.find({userId:userId});
    }
    async getTransactionById(id){
        return await Transaction.findById(id);
    }
    async updateStatus(id,status){ 
        return await Transaction.findByIdAndUpdate(id,{status:status},{new:true});
    }
    async updateStatusByUserId(id,UserId,status){
        return await Transaction.findOneAndUpdat({_id:id,campaign:UserId},{status:status},{new:true})
    }
    async deleteTransaction(id){
        return await Transaction.findByIdAndUpdate(id,{isDeleted:true},{new:true});
    }

    async linkTransactionToCampaign(transactionId,UserId){
        return await Transaction.findByIdAndUpdate(transactionId,{campaign:UserId},{new:true});
    }
    async linhTransactionTocampaignByUserId(transactionId,UserId){
        return await Transaction.findByIdAndUpdate({_id:transactionId,campaign:UserId},{campaign:UserId},{new:true});   
    }
    async refundTransaction(transactionId){
        return await Transaction.findByIdAndUpdate(transactionId,{status:'refund'},{new:true});
    }
}
module.exports = new transactionRepository();