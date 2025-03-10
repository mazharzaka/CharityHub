const express=require('express');
const DBconfig=require('./config/db.config');
DBconfig();
const app=express();
const userRoute=require('./routes/user.route');
const campaignRoute=require('./routes/campaign.route');
const donationRoute=require('./routes/donation.route');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user',userRoute);
app.use('/campaign',campaignRoute);
app.use('/donation',donationRoute);
// app.listen(process.env.PORT,()=>console.log(`Server is running on port ${process.env.PORT} `));
module.exports=app;