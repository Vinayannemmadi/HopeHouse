const mongoose=require('mongoose');
const Helprequest=mongoose.model('helprequest',new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    story:{
        type:String
    },
    discription:{
        type:String
    },
    supporters:{
     type:[String]
    },
    required_money:{
        type:Number
    }, 
    collected_money:{
        type:Number
    },
    filenam:{
        type:String
    },
    created:{
        type:Date
    },
    createdBy:{
        type:String
    },
    file:{
        type:String
    }
}));

module.exports=Helprequest;