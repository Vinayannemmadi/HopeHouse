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

router.get('/', async(req,res)=>{
    try{
        const application= await Application.find();
        res.send(application);
    } catch(error){
        console.log(error);
        res.status(400).send('Error in fetching applications...');
    }
});
router.delete('/',async(req,res)=>{
    try{
        console.log(req.body.id);
        const helper=await Application.findOne({id:req.body.id});
        if(helper){
            let application= await Application.deleteOne({id:req.body.id});
            return res.send(application);
        }
        return res.status(400).send("Application not found...");
    } catch(error){
        console.log(error);
        res.status(400).send('Error in deleting Applications...');
    }
})
module.exports=router;