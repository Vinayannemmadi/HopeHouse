const express=require('express');
const User=require('../models/user');
const Admin=require('../models/admin.model');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const router=express.Router();
const dotenv=require('dotenv');
dotenv.config();
router.post('/signup', async (req,res)=>{    
    try{
        if (!req.body || !req.body.email || !req.body.password) {
            return res.status(400).send('Enter valid credentials...');
        }
        const userwithemail= await User.findOne({email:req.body.email});
        const userwithusername=await User.findOne({email:req.body.username});
        
        if(userwithemail)
           return  res.status(400).send('user already exists...');
        else if(userwithusername)
           return res.status(400).send('user already exists...');
        const user= new User(req.body);
        const salt=await bcrypt.genSalt(10);
        user.password=await bcrypt.hash(user.password,salt);
        await user.save();
        res.send(user);
    }   
    catch(error){
        res.status(400).send("unable to register user");
    }
});

router.post('/signin', async (req,res)=>{
    try{
        if (!req.body || !req.body.email || !req.body.password) {
            return res.status(400).send('Enter valid credentials...');
        }
        const admin=await Admin.findOne({email:req.body.email});
        if(admin){
            const validPassword=await bcrypt.compare(req.body.password,admin.password);
            if(!validPassword)
                res.status(400).send('Invalid password');
            const token=jwt.sign({_id:admin._id,email:admin.email},process.env.TOKEN_SECRET);
            res.header('auth-token',token).send({isAdmin:true,token});
        }
        const user= await User.findOne({email:req.body.email});
        if(!user)
            res.status(400).send('User not found...');
        const validPassword=await bcrypt.compare(req.body.password,user.password);
        if(user.password !== user.password){
            return res.status(400).send('Invalid password');
        }
        const isAdmin=false;
        const token=jwt.sign({_id:user._id,email:user.email},process.env.TOKEN_SECRET);
        res.header('auth-token',token).send({isAdmin,token});
    }   
    catch(error){

        res.status(400).send(error.massage);
    }    
});
const authenticateToken=(req,res,next)=>{
    const {token}=req.body;
    if(!token) return res.status(400).send("Authentication Required");
    
    jwt.verify(token,'your-secret', (err,decoded)=>{
        if(err)return res.status(400).send({message:"Invalid Token"});
        req.user=decoded;
        next();
    });
};
router.post('/getusername',authenticateToken,async(req,res)=>{
    if(!req.body) res.status.send("Signin first...");
    const {token}=req.body;
    if(!req.body)return res.status(400).send('');
    const userId=req.user._id;
    try{
        const user=await User.findById({_id:userId});
        if(user)
          return  res.send(user.username);
        const admin=await Admin.findById({_id:userId});
        if(admin)
            res.send(admin.username);
    }
    catch(error){
        res.status(400).send('Error in fetching username...');
    }
});

router.post('/admin',async(req,res)=>{
    if(!req.body)return res.status(400).send('Enter valid credentials..');
    
    try{
        const findadmin=await Admin.findOne({email:req.body.email});
        if(findadmin)return res.send('Admin regested already..');
        const admin=new Admin(req.body);
        const salt=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(admin.password,salt);
        admin.password=hashPassword;
        await admin.save();
        res.send(admin);
    }
    catch(error){
        res.status(400).send('Unable to register admin...');
    }
});
module.exports=router;