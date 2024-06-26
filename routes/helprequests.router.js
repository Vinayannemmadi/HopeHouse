const express=require('express');
const router=express.Router();
const Helprequest=require('../models/helprequests.module');
const bodyParser = require('body-parser');
const { collection } = require('firebase/firestore');
router.use(bodyParser.json({ limit: '100mb' }));
router.use(express.json({ limit: '100mb' })); // Adjust the limit as needed


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

router.put('/updateAmount',async(req,res)=>{
    const {id,amount,sponsor,screenshot}=req.body;
    console.log("body", req.body);
    if(!id || !amount || !sponsor ) return res.send("Service error!!")
    try{
        let helper=await Helprequest.findOne({_id:id});
        if(!helper) res.status(400).send("Unknown Help request...");
        //let col_money=parseInt(helper.collected_money);
        //col_money+=parseInt(amount);
        let helprequest= await Helprequest.updateOne({_id:id},
            {   
                $push: {
                    supporters: sponsor,
                    screenshots: screenshot
                }
            });
        
        helper=await Helprequest.findOne({_id:id});
        console.log(helper);
        return res.send(helper);
    } catch (error) {
        console.log(error);
        res.status(400).send("error error");
    }
});
router.put("/addmoney/:id",async (req,res)=>{
    try{

        const {id}=req.params;
        console.log(req.body,id);
        let help=await Helprequest.findByIdAndUpdate({_id:id},{
            collected_money:req.body.money
        });
        help=await Helprequest.findOne({_id:id});
        return res.send(help);
    }catch(error){
        console.log(error);
        res.status(400).send("Error in adding money.");
    }
});
router.post('/',async (req,res) => {
    
    try{
        console.log(req.body._id)
        if(!req.body) res.status(400).send('Give valid Data to be added in database...');
        const helprequest = new Helprequest(req.body);
        await helprequest.save();
        res.send(helprequest);

    } catch (error) {
        console.log("error in fecting helprequiests")
        res.status(400).send("Error in fetching helprequests...");
    }
});
router.put('/:id',async(req,res)=>{
    if(!req.body)return res.send("invalid update..")
    try{
        const helper=await Helprequest.findOne({_id:req.params.id});
        if(helper){
            let helprequest= await Helprequest.updateOne({_id:req.params.id},req.body);
            return res.send(helprequest);
        }
        return res.status(400).send("Helprequest not found...");
    } catch(error){
        console.log(error);
        res.status(400).send('Error in updating helprequests...');
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        console.log(req.params);
        const helper=await Helprequest.findOne({_id:id});
        if(helper){
            let helprequest= await Helprequest.deleteOne({_id:id});
            return res.send(helprequest);
        }
        return res.status(400).send("Helprequest not found...");
    } catch(error){
        console.log(error);
        res.status(400).send('Error in deleting helprequests...');
    }
})

module.exports=router;