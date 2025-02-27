const mongoose = require('mongoose');

const DBconfig=async()=>{
    await mongoose.connect('mongodb://localhost:27017/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to the database");
}