const mongoose=require('mongoose');

const Notice=mongoose.model('notices',new mongoose.Schema({
    title:{
        type:String
    },
    content:{
        type:String
    },
    link:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
}));

module.exports=Notice;