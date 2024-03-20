const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
app.use(express.json());

app.use(cors({ origin:"http://localhost:3000"}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});

mongoose.connect("mongodb://localhost:27017/HopeHouse")
.then(()=>console.log("database connected.."))
.catch(()=>console.log("database not connected.."));

const ApplicationRouter=require('./routes/applications.router');
const userRouter=require('./routes/auth.router');

app.use('/api/auth',userRouter);
app.use('/api/application',ApplicationRouter);

const port=process.env.PORT || 5000;
app.listen(port,()=>console.log(`server running on port ${port}...`))
