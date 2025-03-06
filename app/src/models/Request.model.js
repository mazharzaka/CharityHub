const mongoose = require('mongoose');
const RequestSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    campaignId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campaign',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected','fulfilled'],
        default: 'pending'
    },
    location: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        address: { type: String, required: true }
      },
      description:{
        type:String,
        required:true},
       amount:{
        type:Number,
        required:true}
         ,
         requestType:{
        type:String,    
        enum:['money','material','volunteer','service'],
        default:'money'} ,
        currency:{
            type:String,
            enum:['USD','EGP'],
            default:'EGP'
        },
}, { timestamps: true });
const Request = mongoose.model('Request', RequestSchema);
module.exports = Request;