const Transaction = require('../models/Transaction.model');

class Transaction{
    async createTransaction(transaction){
        return await Transaction.create(transaction);
    }
    async getAllTransactions(){
        return await Transaction.find();
    }
    async getTransactionById(id){
        return await Transaction.findById(id);
    }
    async updateStatus(id,status){
        return await Transaction.findByIdAndUpdate(id,{status:status},{new:true});
    }
    async deleteTransaction(id){
        return await Transaction.findByIdAndUpdate(id,{isDeleted:true},{new:true});
    }
}