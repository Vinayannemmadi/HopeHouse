const { kStringMaxLength } = require('buffer');
const mongoose=require('mongoose');

const User=mongoose.model('users',new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3,
        maxlength:20     
    },
    email:{
        type:String,
        require:true,
        unique:true,
        minlength:10,
    },
    password:{
        type:String,
        require:true,
        minlength:8,
        maxlength:1024,
    }
}));

module.exports=User;