const express=require('express');
const DBconfig=require('./config/db.config');
const  rateLimit = require('express-rate-limit');
DBconfig();
const app=express();
const cors=require('cors');
const userRoute=require('./routes/user.route');
const campaignRoute=require('./routes/campaign.route');
const donationRoute=require('./routes/donation.route');
const requestRoute=require('./routes/request.route');
const transactionRoute=require('./routes/transaction.route');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again after an hour"
  });
  app.use(limiter);
app.use(cors("localhost:3000"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user',userRoute);
app.use('/campaign',campaignRoute);
app.use('/donation',donationRoute);
app.use('/request',requestRoute);
app.use('/transaction',transactionRoute);
// app.listen(process.env.PORT,()=>console.log(`Server is running on port ${process.env.PORT} `));
module.exports=app;