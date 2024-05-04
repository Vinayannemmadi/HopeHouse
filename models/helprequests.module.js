const mongoose=require('mongoose');
const Helprequest=mongoose.model('helprequest',new mongoose.Schema({
    fullname: {
        type: String
      },
      id: {
        type: String
      },
      gender: {
        type: String
      },
      email: {
        type: String
      },
      mobileNumber: {
        type: Number
      },
      aadhaar: {
        type: Number
      },
      dateOfBirth: {
        type: String
      },
      problem: {
        type: String
      },
      treatmentType: {
        type: String
      },
      estimatedCost: {
        type: Number
      },
      houseNumber: {
        type: String
      },
      village: {
        type: String
      },
      mandal: {
        type: String
      },
      district: {
        type: String
      },
      state: {
        type: String
      },
      pincode: {
        type: Number
      },
      fatherName: {
        type: String
      },
      parentPhoneNumber: {
        type: Number
      },
      parentOccupation: {
        type: String
      },
      anualIncome: {
        type: Number
      },
      landDetails: {
        type: String
      },
      file:{
        type:String
      },
      photo:String,
      billphoto:String,
      required_money:Number,
      collected_money:Number,
      requestedBy:String,
      createdOn:Date,
      status:String,
      story:String,
      discription:String,
      supporters:[String],
      screenshots:[String]
}));

module.exports=Helprequest;