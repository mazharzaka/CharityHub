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
    async linkTransactionToCampaign(transactionId,UserId){
        return await transactionRepository.linkTransactionToCampaign(transactionId,UserId);
    }
  
    async getAllTransactionsByUserId(userId){
        return await transactionRepository.getAllTransactionsByUserId(userId);
    }
    async updateStatusByUserId(id,UserId,status){
        return await transactionRepository.updateStatusByUserId(id,UserId,status);
    }
    async linhTransactionTocampaignByUserId(transactionId,UserId){
        return await transactionRepository.linhTransactionTocampaignByUserId(transactionId,UserId);
    }
    async refundTransaction(transactionId){
        return await transactionRepository.refundTransaction(transactionId);
    }
  

}
module.exports = new TransactionService();