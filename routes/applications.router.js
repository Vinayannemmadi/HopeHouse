const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const Application=require('../models/applications.model');

router.post("/",async(req,res)=>{
    try{

        const application = new Application(req.body);
        await application.save();
        res.send('Application saved successfully!');
    } 
    catch(error){
        console.log(error);
        res.status(400).send('Fill the form correctly.!');
    }
});

module.exports=router;