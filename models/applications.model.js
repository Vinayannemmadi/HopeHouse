const mongoose=require('mongoose');

const Application=mongoose.model('applications',new mongoose.Schema({
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
      sourceOfIncome: {
        type: String
      },
      landDetails: {
        type: String
      },
      file:{
        type:String
      }

}));

module.exports=Application;