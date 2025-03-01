const express=require('express');
const DBconfig=require('./config/db.config');
DBconfig();
const app=express();
const userRoute=require('./routes/user.route');
app.use(express.json());
app.use('/user',userRoute);
// app.listen(process.env.PORT,()=>console.log(`Server is running on port ${process.env.PORT} `));
module.exports=app;