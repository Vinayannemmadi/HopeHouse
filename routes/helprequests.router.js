const express=requires('express');
const router=express.Router();
const Helprequest=require('../models/helprequests.model');

router.get('/',async (req,res) => {
    try{

        Helprequest.find().then(helprequests => {
            res.send(helprequests);
        })

    } catch (error) {
        console.log("error in fecting helprequiests")
        res.status(400).send("Error in fetching helprequests...");
        
    }
})