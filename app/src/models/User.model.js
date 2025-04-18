const mongoose = require('mongoose');
const addressSchema = new mongoose.Schema({
    street: { type: String },
    city: { type: String },
    country: { type: String },
});

const UserSchema = new mongoose.Schema({
    Fname: {
        type: String,
        required: true
    },
    Lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true, unique: true
    },
    age: {
        type: Number,
        required: true,
        min: 16,
        max: 100
    },
    address:addressSchema,
    googleId: {
        type: String,
        default: null,
        sparse: true
    },
    password: {
        type: String,
        required: true
    }, 
    phone:{
        type: Number,
        required:true,
    minlength:10,
    maxlength:10
    },
    role: { 
        type: String, 
        enum: ["donor", "beneficiary", "volunteer", "admin"], 
        default: "donor" 
      },
      TransactionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
        default: null},
    status: { type: String, enum: ["pending","active", "inactive"], default: "pending" },
    date: { type: Date, default: Date.now },
    isVerified: { type: Boolean, default: false },
    profilePicture: { type: String, default: "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png" }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;