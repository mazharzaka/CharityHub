const Transaction = require('../models/Transaction.model');

class transactionRepository{
    async createTransaction(transaction){
        return await Transaction.create(transaction);
    }
    async getAllTransactions(){
        return await Transaction.find();
    }
    async getAllTransactionsByCampaignId(campaignId){
        return await Transaction.find({campaign:campaignId});
    }
    async getTransactionById(id){
        return await Transaction.findById(id);
    }
    async updateStatus(id,status){ 
        return await Transaction.findByIdAndUpdate(id,{status:status},{new:true});
    }
    async updateStatusByCampaignId(id,campaignId,status){
        return await Transaction.findOneAndUpdat({_id:id,campaign:campaignId},{status:status},{new:true})
    }
    async deleteTransaction(id){
        return await Transaction.findByIdAndUpdate(id,{isDeleted:true},{new:true});
    }

    async linkTransactionToCampaign(transactionId,campaignId){
        return await Transaction.findByIdAndUpdate(transactionId,{campaign:campaignId},{new:true});
    }
    async linhTransactionTocampaignByCampaignId(transactionId,campaignId){
        return await Transaction.findByIdAndUpdate({_id:transactionId,campaign:campaignId},{campaign:campaignId},{new:true});   
    }
    async refundTransaction(transactionId){
        return await Transaction.findByIdAndUpdate(transactionId,{status:'refund'},{new:true});
    }
}
module.exports = new transactionRepository();