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
}
module.exports = new TransactionService();