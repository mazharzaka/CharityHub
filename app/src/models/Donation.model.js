const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
    donorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    campaignId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campaign',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        enum: ['USD', 'EGP'],
        default: 'EGP'
    },
    donationType: {
        type: String,
        enum: ['one-time', 'monthly'],
        default: 'one-time'
    },
    paymentMethod: {
        type: String,
        enum: ['credit-card', 'paypal', 'cash'],
        default: 'cash'
    },
    status: {
        type: String,
        enum: ['pending', 'completed','cancelled'],
        default: 'pending'
    },
    message: {
        type: String,
        trim: true
    },
    reciptUrl: {
        type: String,
        trim: true
    },
    anonymous: {
        type: Boolean,
        default: false
    },    
    transactionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
        default: null
    }
}, { timestamps: true });

const Donation = mongoose.model('Donation', DonationSchema);
module.exports = Donation;
