const transactionRepository = require('../repositories/transactions.repository');

class TransactionService{
    async createTransaction(transaction){
        return await transactionRepository.createTransaction(transaction);
    }
    async getAllTransactions(){
        return await transactionRepository.getAllTransactions();
    }
    async getTransactionById(id){
        return await transactionRepository.getTransactionById(id);
    }
    async updateStatus(id,status){
        return await transactionRepository.updateStatus(id,status);
    }
    async deleteTransaction(id){
        return await transactionRepository.deleteTransaction(id);
    }
    async linkTransactionToCampaign(transactionId,campaignId){
        return await transactionRepository.linkTransactionToCampaign(transactionId,campaignId);
    }
  
    async getAllTransactionsByCampaignId(campaignId){
        return await transactionRepository.getAllTransactionsByCampaignId(campaignId);
    }
    async updateStatusByCampaignId(id,campaignId,status){
        return await transactionRepository.updateStatusByCampaignId(id,campaignId,status);
    }
    async linhTransactionTocampaignByCampaignId(transactionId,campaignId){
        return await transactionRepository.linhTransactionTocampaignByCampaignId(transactionId,campaignId);
    }
    async refundTransaction(transactionId){
        return await transactionRepository.refundTransaction(transactionId);
    }
  

}
module.exports = new TransactionService();