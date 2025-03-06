const mongoose=require('mongoose');

const TransactionSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    donationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Donation',
        required:true
    },
    transactionReference :{
        type:String,
        required:true
    },
    receiptUrl :{
        type:String,
        // required:true
    },
    processedAt :{
        type:Date,
        default:null
    },

    amount:{
        type:Number,
        required:true
    },
    currency:{
        type:String,
        enum:['USD','EGP'],
        default:'EGP'
    },
    transactionType:{
        type:String,
        enum:['deposit','withdraw'],
        default:'deposit'
    },
    paymentMethod:{
        type:String,
        enum:['credit-card','paypal','cash'],
        default:'cash'
    },
    status:{
        type:String,
        enum:['pending','completed','failed','refund'],
        default:'pending'
    },
    failureReason :{
        type:String,
        default:null
    },

},{timestamps:true});
const Transaction=mongoose.model('Transaction',TransactionSchema);
module.exports=Transaction;