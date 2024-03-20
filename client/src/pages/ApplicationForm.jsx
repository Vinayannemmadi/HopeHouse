import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FormContainer,FormGroup,Label,Input,Button } from './styledApplication';
const  ApplicationForm=()=> {
  const [fullname, setFullname] = useState('');
  const [id, setId] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState();
  const [aadhaar, setAadhaar] = useState();
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [problem, setProblem] = useState('');
  const [hospitalBills, setHospitalBills] = useState('');
  const [photoOfPatient, setPhotoOfPatient] = useState('');
  const [treatmentType, setTreatmentType] = useState('');
  const [estimatedCost, setEstimatedCost] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [village, setVillage] = useState('');
  const [mandal, setMandal] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [parentPhoneNumber, setParentPhoneNumber] = useState('');
  const [parentOccupation, setParentOccupation] = useState('');
  const [sourceOfIncome, setSourceOfIncome] = useState('');
  const [landDetails, setLandDetails] = useState('');

  const navigate=useNavigate();
  const handleSubmit=async()=>{
    alert("submitted successfully");
    navigate('/');
  }
  return (
    <div style={{borderRadius:20,padding:20,border:".5px solid black",
      marginBottom:100}}>
      <h1 style={{textAlign:'center', color:'#9C3551', fontSize:30}}>APPLICATION FORM</h1>
      
      <FormContainer>
        <h1>Personal Information</h1>
        <FormGroup>
          <Label htmlFor="fullname">Full Name:</Label>
          <Input
            type="text"
            id="fullname"
            name="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="id">ID:</Label>
          <Input
            type="text"
            id="id"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Gender:</Label>
          <Input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value)}
          />
          <Label htmlFor="male">Male</Label>
          <Input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}
          />
          <Label htmlFor="female">Female</Label>
          <Input
            type="radio"
            id="other"
            name="gender"
            value="other"
            checked={gender === 'other'}
            onChange={(e) => setGender(e.target.value)}
          />
          <Label htmlFor="other">Other</Label>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="mobileNumber">Mobile Number:</Label>
          <Input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="aadhaar">Aadhaar Number:</Label>
          <Input
            type="text"
            id="aadhaar"
            name="aadhaar"
            value={aadhaar}
            onChange={(e) => setAadhaar(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="dateOfBirth">Date of Birth:</Label>
          <Input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
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
          name="problem"
          value={problem}
          style={{height:80,width:300}}
          placeholder='Enter problem in detail'
          onChange={(e) => setProblem(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="hospitalBills">Hospital Bills:</Label>
        <Input
          type="file"
          id="hospitalBills"
          name="hospitalBills"
          onChange={(e) => setHospitalBills(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="photoOfPatient">Photo of Patient:</Label>
        <Input
          type="file"
          id="photoOfPatient"
          name="photoOfPatient"
          onChange={(e) => setPhotoOfPatient(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="treatmentType">Type of Treatment:</Label>
        <Input
          type="text"
          id="treatmentType"
          name="treatmentType"
          value={treatmentType}
          onChange={(e) => setTreatmentType(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="estimatedCost">Estimated Cost:</Label>
        <Input
          type="number"
          id="estimatedCost"
          name="estimatedCost"
          value={estimatedCost}
          onChange={(e) => setEstimatedCost(e.target.value)}
        />
      </FormGroup>
      </FormContainer>

      <FormContainer>
        <h1>Address Details</h1>
        <FormGroup>
          <Label htmlFor="houseNumber">House Number:</Label>
          <Input
            type="text"
            id="houseNumber"
            name="houseNumber"
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="village">Village:</Label>
          <Input
            type="text"
            id="village"
            name="village"
            value={village}
            onChange={(e) => setVillage(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="mandal">Mandal:</Label>
          <Input
            type="text"
            id="mandal"
            name="mandal"
            value={mandal}
            onChange={(e) => setMandal(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="district">District:</Label>
          <Input
            type="text"
            id="district"
            name="district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="state">State:</Label>
          <Input
            type="text"
            id="state"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="pincode">Pincode:</Label>
          <Input
            type="text"
            id="pincode"
            name="pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </FormGroup>
      </FormContainer>

      <FormContainer>
        <h1>Family Information</h1>
        <FormGroup>
          <Label htmlFor="fatherName">Father Name:</Label>
          <Input
            type="text"
            id="fatherName"
            name="fatherName"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="parentPhoneNumber">Parent/Guardian Phone Number:</Label>
          <Input
            type="tel"
            id="parentPhoneNumber"
            name="parentPhoneNumber"
            value={parentPhoneNumber}
            onChange={(e) => setParentPhoneNumber(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="parentOccupation">Parent's Occupation Details:</Label>
          <Input
            type="text"
            id="parentOccupation"
            name="parentOccupation"
            value={parentOccupation}
            onChange={(e) => setParentOccupation(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="sourceOfIncome">Source of Income:</Label>
          <Input
            type="text"
            id="sourceOfIncome"
            name="sourceOfIncome"
            value={sourceOfIncome}
            onChange={(e) => setSourceOfIncome(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="landDetails">Land Details:</Label>
          <Input
            type="text"
            id="landDetails"
            name="landDetails"
            value={landDetails}
            onChange={(e) => setLandDetails(e.target.value)}
          />
        </FormGroup>
      </FormContainer>
    <Button onClick={handleSubmit}>Submit</Button>
  </div>
  )
};

export default ApplicationForm;
