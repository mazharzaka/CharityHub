const mongoose = require('mongoose');
const CampaignSchema = new mongoose.Schema({    
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{type:String},
    goalAmount:{
        type:Number,
        required:true
    },
    currentAmount:{
        type:Number,
        default:0
    },  
    currency: { enum: ['USD', 'EGP'], default: 'EGP' },
    status: { type: String, enum: ['pending', 'active', 'completed', 'failed'], default: 'pending' },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, required: true },
    category: { type: String, enum: ['health', 'education', 'environment', 'human-rights', 'animals', 'disaster-relief', 'others'], default: 'others' },
    location: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        address: { type: String, required: true }
      },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    donations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Donation'
    }],
    beneficiaries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdAt : {
        type: Date,
        default: Date.now
    }
    ,updatedAt : {
        type: Date,
        default: Date.now
    },
isFeatured:{
    type:Boolean,
    default:false
},
	volunteers:{
        type:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],

    }, 
    tags: {
        type: [String]
    },
    isDeleted: { type: Boolean, default: false }, 
    impactReport :{
        type:String,
        default:""
    }
})
const Campaign = mongoose.model('Campaign', CampaignSchema);
module.exports = Campaign;