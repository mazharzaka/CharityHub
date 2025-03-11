const express=require('express');
const router=express.Router();
const transactionController=require('../controllers/transaction.controller');
const auth=require('../middlewares/auth.middle');
const role=require('../middlewares/role.middle')

router.post('/create',auth.verifyToken,role.checkRole(['admin','donor']),transactionController.createTransaction);
router.get('/all/:id?',auth.verifyToken,role.checkRole(['admin'],true),transactionController.getAllTransactions);
router.get('/:id',auth.verifyToken,role.checkRole(['admin','donor']),transactionController.getTransactionById);
router.put('/:id/:userid/status',auth.verifyToken,role.checkRole(['admin'],true),transactionController.updateStatus);
router.delete('/:id',auth.verifyToken,role.checkRole(['admin']),transactionController.deleteTransaction);
router.put('/:id/link/:userid',auth.verifyToken,role.checkRole(['admin','donor'],true),transactionController.linkTransactionToCampaign);
router.put('/:id/refund',auth.verifyToken,role.checkRole(['admin']),transactionController.refundTransaction);
module.exports=router;