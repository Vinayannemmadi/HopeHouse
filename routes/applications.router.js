const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const Application=require('../models/applications.model');
const bodyParser = require('body-parser');
router.use(bodyParser.json({ limit: '100mb' }));
router.use(express.json({ limit: '100mb' })); // Adjust the limit as needed

router.post("/",async(req,res)=>{
    if(!req.body) return res.status(400).send("Fill the from completely");
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
router.get('/:id', async(req,res)=>{
    try{
        const application= await Application.findOne({_id:req.params.id});
        res.send(application);
    } catch(error){
        console.log(error);
        res.status(400).send('Error in fetching applications...');
    }
});
router.put('/:id',async(req,res)=>{
    if(!req.body)return res.send("invalid updatioin..")
    try{
        const helper=await Application.findOne({_id:req.params.id});
        if(helper){
            let application= await Application.updateOne({_id:req.params.id},
                req.body);
            return res.send(application);
        }
        return res.status(400).send("Applicant not found...");
    } catch(error){
        console.log(error);
        res.status(400).send('Error in updating Application...');
    }
});
router.delete('/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        console.log("application id: ",id);
        const helper=await Application.findOne({_id:id});
        if(helper){
            let application= await Application.deleteOne({_id:id});
            return res.send(application);
        }
        return res.status(400).send("Application not found...");
    } catch(error){
        console.log(error);
        res.status(400).send('Error in deleting Applications...');
    }
})
module.exports=router;