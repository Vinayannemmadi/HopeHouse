const express=require('express');
const router=express.Router();
const Notice=require('../models/notices.model');
router.get('/',async(req,res)=>{
    try{
        const notices=await Notice.find();
        res.send(notices);
    } catch(error){
        res.status(400).send("No notices found...");
    }
});

router.post('/',async(req,res)=>{
    try{
        const notice=new Notice(req.body);
        await notice.save();
        res.send(notice);
    } catch(error){
        res.status(400).send("Unable to add notice...");
    }
});

module.exports=router;