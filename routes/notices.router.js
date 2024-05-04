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

router.delete('/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        console.log(id);
        if(!id) res.status(400).send("Invalid delete operation");
        const notice=await Notice.findOne({_id:id});
        if(!notice)res.status(400).send("This notice already been deleted");
        const deleted=await Notice.findByIdAndDelete({_id:id});
        res.send("Deleted");
    } catch(error){
            console.log(error);
            res.status(400).send('Failed to delete notice!');
    }
})
module.exports=router;