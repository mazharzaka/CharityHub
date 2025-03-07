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
        const transactions = await transactionService.getAllTransactions();
        res.status(200).send(transactions);
    } catch (error) {
        res.status(400).send(error.message);
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
        const transaction = await transactionService.updateStatus(req.params.id, req.body.status);
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