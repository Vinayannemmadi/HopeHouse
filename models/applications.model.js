const mongoose=require('mongoose');

const Application=mongoose.model('applications',new mongoose.Schema({
    fullname: {
        type: String,
        required: true
      },
      id: {
        type: String,
        required: true
      },
      gender: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      mobileNumber: {
        type: Number,
        required: true
      },
      aadhaar: {
        type: Number,
        required: true
      },
      dateOfBirth: {
        type: String,
        required: true
      },
      problem: {
        type: String,
        required: true
      },
      treatmentType: {
        type: String,
        required: true
      },
      estimatedCost: {
        type: Number,
        required: true
      },
      houseNumber: {
        type: String,
        required: true
      },
      village: {
        type: String,
        required: true
      },
      mandal: {
        type: String,
        required: true
      },
      district: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      pincode: {
        type: Number,
        required: true
      },
      fatherName: {
        type: String,
        required: true
      },
      parentPhoneNumber: {
        type: Number,
        required: true
      },
      parentOccupation: {
        type: String,
        required: true
      },
      sourceOfIncome: {
        type: String,
        required: true
      },
      landDetails: {
        type: String,
        required: true
      }

}));

module.exports=Application;