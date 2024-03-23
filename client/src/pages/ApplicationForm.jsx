import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FormContainer,FormGroup,Label,Input,Button } from './styledApplication';
const  ApplicationForm=()=> {
  const navigate=useNavigate();
  
  const [application,setApplication]=useState(
    {
        aadhaar:0,
        anualIncome:0,
        billPhoto:"",
        collected_money:0,
        dateOfBirth:"",
        district:"",
        email:"",
        estimatedCost:0,
        fatherName:"" ,
        fullname:"",
        gender:"",
        houseNumber:0,
        hospitalBills:"",
        id:"",
        landDetails:"",
        mandal:"",
        mobileNumber:0,
        parentOccupation:"",
        parentPhoneNumber:0,
        photo:"",
        photoOfPatient:"",
        pincode:0,
        story:"",
        required_money:0,
        state:"",
        supporters:[],
        treatmentType:"",
        village:""
    }
    )
    
  const handleSubmit=async()=>{
    console.log(application);
    try{
      const {data}=await axios.post('http://localhost:5000/api/application',application);
      console.log(data);
      alert("submitted successfully");
    } catch(error) {
      console.log(error);
    }
    navigate('/');
  }

  const handleBillPhoto=(e)=>{
    const file=e.target.files[0];
    const reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
      setApplication({...application,billPhoto:reader.result});
    }
  };
  const handlePhto=(e)=>{
    const file=e.target.files[0];
    const reader= new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
      setApplication({...application,photo:reader.result});
    }
  }
  return (
    <div style={{borderRadius:20,padding:20,border:".5px solid black",
      marginBottom:100}}>
      <h1 style={{textAlign:'center', color:'#9C3551', fontSize:30}}>APPLICATION FORM</h1>

      <form onSubmit={handleSubmit}>

      <FormContainer>
        <h1>Personal Information</h1>
        <FormGroup>
          <Label htmlFor="fullname">Full Name:</Label>
          <Input
            type="text"
            id="fullname"
            name="fullname"
            required={true}
            value={application.fullname}
            onChange={(e) => setApplication({...application, fullname: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="id">ID:</Label>
          <Input
            type="text"
            id="id"
            name="id"
            required={true}
            value={application.id}
            onChange={(e) => setApplication({...application, id: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label>Gender:</Label>
          <Input
            type="radio"
            required={true}
            id="male"
            name="gender"
            value="male"
            checked={application.gender === 'male'}
            onChange={(e) => setApplication({...application, gender: e.target.value})}
          />
          <Label htmlFor="male">Male</Label>
          <Input
            type="radio"
            id="female"
            required={true}
            name="gender"
            value="female"
            checked={application.gender === 'female'}
            onChange={(e) => setApplication({...application, gender: e.target.value})}
          />
          <div >
          <Label htmlFor="female">Female</Label>
          <Input
            type="radio"
            id="other"
            name="gender"
            required={true}
            value="other"
            checked={application.gender === 'other'}
            onChange={(e) => setApplication({...application, gender: e.target.value})}
            />
            </div>
          <Label htmlFor="other">Other</Label>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required={true}
            value={application.email}
            onChange={(e) => setApplication({...application, email: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="mobileNumber">Mobile Number:</Label>
          <Input
            type="number"
            required={true}
            id="mobileNumber"
            name="mobileNumber"
            value={application.mobileNumber}
            onChange={(e) => setApplication({...application, mobileNumber: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="aadhaar">Aadhaar Number:</Label>
          <Input
            type="text"
            id="aadhaar"
            name="aadhaar"
            required={true}
            value={application.aadhaar}
            onChange={(e) => setApplication({...application, aadhaar: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="dateOfBirth">Date of Birth:</Label>
          <Input
            type="date"
            id="dateOfBirth"
            required={true}
            name="dateOfBirth"
            value={application.dateOfBirth}
            onChange={(e) => setApplication({...application, dateOfBirth: e.target.value})}
          />
        </FormGroup>
      </FormContainer>

      <FormContainer>
      <h1>Medical Details</h1>
      <FormGroup>
        <Label htmlFor="problem">Problem:</Label>
        <textarea
          type="textfield"
          id="problem"
          required={true}
          name="problem"
          value={application.story}
          style={{height:80,width:300}}
          placeholder='Enter problem in detail'
          onChange={(e) => setApplication({...application, story: e.target.value})}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="hospitalBills">Hospital Bills:</Label>
        <Input
          type="file"
          id="hospitalBills"
          required={true}
          name="hospitalBills"
          onChange={handleBillPhoto}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="photoOfPatient">Photo of Patient:</Label>
        <Input
          type="file"
          required={true}
          id="photoOfPatient"
          name="photoOfPatient"
          onChange={handlePhto}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="treatmentType">Type of Treatment:</Label>
        <Input
          type="text"
          id="treatmentType"
          required={true}
          name="treatmentType"
          value={application.treatmentType}
          onChange={(e) => setApplication({...application, treatmentType: e.target.value})}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="estimatedCost">Estimated Cost:</Label>
        <Input
          type="number"
          id="estimatedCost"
          required={true}
          name="estimatedCost"
          value={application.estimatedCost}
          onChange={(e) => setApplication({...application, estimatedCost: e.target.value})}
        />
      </FormGroup>
      </FormContainer>

      <FormContainer>
        <h1>Address Details</h1>
        <FormGroup>
          <Label htmlFor="houseNumber">House Number:</Label>
          <Input
            type="text"
            required={true}
            id="houseNumber"
            name="houseNumber"
            value={application.houseNumber}
            onChange={(e) => setApplication({...application, houseNumber: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="village">Village:</Label>
          <Input
            type="text"
            id="village"
            required={true}
            name="village"
            value={application.village}
            onChange={(e) => setApplication({...application, village: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="mandal">Mandal:</Label>
          <Input
            type="text"
            id="mandal"
            required={true}
            name="mandal"
            value={application.mandal}
            onChange={(e) => setApplication({...application, mandal: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="district">District:</Label>
          <Input
            type="text"
            required={true}
            id="district"
            name="district"
            value={application.district}
            onChange={(e) => setApplication({...application, district: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="state">State:</Label>
          <Input
            type="text"
            required={true}
            id="state"
            name="state"
            value={application.state}
            onChange={(e) => setApplication({...application, state: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="pincode">Pincode:</Label>
          <Input
            type="text"
            id="pincode"
            name="pincode"
            required={true}
            value={application.pincode}
            onChange={(e) => setApplication({...application, pincode: e.target.value})}
          />
        </FormGroup>
      </FormContainer>

      <FormContainer>
        <h1>Family Information</h1>
        <FormGroup>
          <Label htmlFor="fatherName">Father Name:</Label>
          <Input
            type="text"
            required={true}
            id="fatherName"
            name="fatherName"
            value={application.fatherName}
            onChange={(e) => setApplication({...application, fatherName: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="parentPhoneNumber">Parent/Guardian Phone Number:</Label>
          <Input
            type="tel"
            id="parentPhoneNumber"
            required={true}
            name="parentPhoneNumber"
            value={application.parentPhoneNumber}
            onChange={(e) => setApplication({...application, parentPhoneNumber: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="parentOccupation">Parent's Occupation Details:</Label>
          <Input
            type="text"
            required={true}
            id="parentOccupation"
            name="parentOccupation"
            value={application.parentOccupation}
            onChange={(e) => setApplication({...application, parentOccupation: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="sourceOfIncome">Source of Income:</Label>
          <Input
            type="text"
            id="sourceOfIncome"
            required={true}
            name="sourceOfIncome"
            value={application.sourceOfIncome}
            onChange={(e) => setApplication({...application, sourceOfIncome: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="landDetails">Land Details:</Label>
          <Input
            type="text"
            id="landDetails"
            name="landDetails"
            required={true}
            value={application.landDetails}
            onChange={(e) => setApplication({...application, landDetails: e.target.value})}
          />
        </FormGroup>
      </FormContainer>
    <Button onClick={handleSubmit}>Submit</Button>
    </form>
  </div>
  )
};

export default ApplicationForm;
