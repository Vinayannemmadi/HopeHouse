const express=require('express');
const router=express.Router();
const Helprequest=require('../models/helprequests.module');

router.get('/',async (req,res) => {
    try{

        Helprequest.find().then(helprequests => {
            res.send(helprequests);
        })

    } catch (error) {
        console.log("error in fecting helprequiests")
        res.status(400).send("Error in fetching helprequests...");

    }
});

router.get('/:id',async (req,res) => {
    try{
        const helprequest=await Helprequest.findOne({_id:req.params.id});
        if(!helprequest)
           return res.status(400).send("No Donate person found..!");
        res.send(helprequest);

    } catch (error) {
        console.log("error in fecting helprequiests")
        res.status(400).send("Error in fetching helprequests...");

    }
});

router.post('/',async (req,res) => {
    
    try{
        if(!req.body) res.status(400).send('Give valid Data to be added in database...');
        const helprequest = new Helprequest(req.body);
        await helprequest.save();
        res.send(helprequest);

    } catch (error) {
        console.log("error in fecting helprequiests")
        res.status(400).send("Error in fetching helprequests...");
    }
});

router.delete('/',async(req,res)=>{
    try{
        console.log(req.body.id);
        const helper=await Helprequest.findOne({id:req.body.id});
        if(helper){
            let helprequest= await Helprequest.deleteOne({id:req.body.id});
            return res.send(helprequest);
        }
        return res.status(400).send("Helprequest not found...");
    } catch(error){
        console.log(error);
        res.status(400).send('Error in deleting helprequests...');
    }
})

module.exports=router;