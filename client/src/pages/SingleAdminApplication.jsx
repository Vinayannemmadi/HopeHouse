import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const SingleAdminApplication = () => {
    const navigate=useNavigate();
    const cookie=new Cookies();
    const token=cookie.get('jwtToken');
    const [requestedBy,setRequestedBy]=useState([]);
    const [application,setApplication]=useState({
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
        required_money:0,
        requestedBy:'',
        story:"",
        state:"",
        supporters:[],
        treatmentType:"",
        village:"",

    });
    useEffect(()=>{
        const getData=async()=>{
            try{
                const {data}=await axios.get(`http://localhost:5000/api/auth/getusername/`,{token});
                console.log(data);
                setRequestedBy(data);
                // setApplication(...application,requestedBy:data);
            } catch (error){
                console.log(error);
            }
        }
    })
    const {id}=useParams();
    useEffect(()=>{
        const getData=async()=>{
            try{
                const {data}=await axios.get(`http://localhost:5000/api/application/${id}`);
                console.log(data);
                setApplication(data);
            } catch(error){
                console.log(error);
            }
        }
        getData();
    },[]);
    const handleSubmit=async()=>{
      // e.preventDefault();
      console.log('handleSubmit..')
      try{

          const {data}=await axios.put(`http://localhost:5000/api/application/${id}`,application);
          const help=await axios.post(`http://localhost:5000/api/helprequest`,application)
          console.log(data);
          console.log(help);
          navigate('/adminapplications');
      }
      catch(error){
          console.log(error);
      }
  }
    return (
      <div className="App">
      {/* <h1>Donate Form</h1> */}
      <Container>
          {/* personal Info */}
          <RegistrationForm>
              <Title>Personal Information</Title>
              <form>
              <Label>Full Name:</Label>
              <Input type="text" placeholder="enter full name"
                   value={application.fullname} onChange={(e)=>setApplication({...application,fullname:e.target.value})}/>
              <Label>ID:</Label>
              <Input type="text" placeholder="If RGUKTian"     
                  value={application.id} onChange={(e)=>setApplication({...application,id:e.target.value})}/>
              <Label>Gender:</Label>
              <Input type="text" placeholder="male/female"   
                  value={application.gender} onChange={(e)=>setApplication({...application,gender:e.target.value})}/>
              <Label>Email:</Label>
              <Input type="email" placeholder="example@gmail.com" 
                  value={application.email} onChange={(e)=>setApplication({...application,email:e.target.value})}/>
              <Label>Mobile Number:</Label>
              <Input type="numer" placeholder="ex:9192939495" 
                  value={application.mobileNumber} onChange={(e)=>setApplication({...application,mobileNumber:e.target.value})}/>
              <Label>Aadhaar:</Label>
              <Input type="number" placeholder="ex:8778 6645 3212" 
                  value={application.aadhaar} onChange={(e)=>setApplication({...application,aadhaar:e.target.value})}/>
              <Label>DOB:</Label>
              <Input type="date" placeholder=""
                   value={application.dateOfBirth} onChange={(e)=>setApplication({...application,dateOfBirth:e.target.value})}/>
              </form>
          </RegistrationForm>
          {/* medial info */}
          <RegistrationForm>
              <Title>Medical Details</Title>
              <form>
              <Label>Problem:</Label>
              <Input type="text" placeholder="Problem" 
                  value={application.story} onChange={(e)=>setApplication({...application,problem:e.target.value})}/>
              <Label>Type of Treatment:</Label>
              <Input type="text" placeholder="ex: surgery, opeation etc" 
                  value={application.treatmentType} onChange={(e)=>setApplication({...application,treatmentType:e.target.value})}/>
              <Label>Estimated Cost:</Label>
              <Input type="number" placeholder="ex:10,000" 
                  value={application.required_money} onChange={(e)=>setApplication({...application,required_money:e.target.value})}/>
              <Label>Requested By:</Label>
              <Input type="text" placeholder="ex: Ganesh" 
                  value={application.requestedBy} onChange={(e)=>setApplication({...application,requestedBy:e.target.value})}/>
              </form>
          </RegistrationForm>
          {/* address info */}
          <RegistrationForm>
              <Title>Address Details</Title>
              <form>
              <Label>House Number:</Label>
              <Input type="text" placeholder="ex:5-52" 
                  value={application.houseNumber} onChange={(e)=>setApplication({...application,houseNumber:e.target.value})}/>
              <Label>Village:</Label>
              <Input type="text" placeholder="ex:Surya Nagar" 
                  value={application.village} onChange={(e)=>setApplication({...application,village:e.target.value})}/>
              <Label>Mandal:</Label>
              <Input type="text" placeholder="ex:Kothapet" 
                  value={application.mandal} onChange={(e)=>setApplication({...application,mandal:e.target.value})}/>
              <Label>District:</Label>
              <Input type="text" placeholder="ex:Nirmal" 
                  value={application.district} onChange={(e)=>setApplication({...application,district:e.target.value})}/>
              <Label>State:</Label>
              <Input type="text" placeholder="ex:Telangna" 
                  value={application.state} onChange={(e)=>setApplication({...application,state:e.target.value})}/>
              <Label>Pincode:</Label>
              <Input type="number" placeholder="ex:600001" 
                  value={application.pincode} onChange={(e)=>setApplication({...application,pincode:e.target.value})}/>
              </form>
          </RegistrationForm>
          {/* family info */}
          <RegistrationForm>
              <Title>Family Information</Title>
              <form>
              <Label>Father Name:</Label>
              <Input type="text" placeholder="ex:Sathya Narayana" 
                  value={application.fatherName} onChange={(e)=>setApplication({...application,fatherName:e.target.value})}/>
              <Label>Parent Mobile Number:</Label>
              <Input type="number" placeholder="ex:9192939495" 
                  value={application.parentPhoneNumber} onChange={(e)=>setApplication({...application,parentPhoneNumber:e.target.value})}/>
              <Label>Parent Occupation:</Label>
              <Input type="text" placeholder="ex:Govt emp/Labour" 
                  value={application.parentOccupation} onChange={(e)=>setApplication({...application,parentOccupation:e.target.value})}/>
              <Label>Anual Income:</Label>
              <Input type="number" placeholder="ex:200000/year" 
                  value={application.anualIncome} onChange={(e)=>setApplication({...application,anualIncome:e.target.value})}/>
              <Label>Land Details:</Label>
              <Input type="text" placeholder="own/rent mention if any" 
                  value={application.landDetails} onChange={(e)=>setApplication({...application,landDetails:e.target.value})}/>
              </form>
          </RegistrationForm>
      </Container>  
      <button className="btn btn-primary" 
          style={{width:400, marginTop:30,marginBottom:50}}
          onClick={handleSubmit} >Update & Upload</button>
  </div>
    )                       
}
export default SingleAdminApplication;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap;
  height:100%;
  width:100%;
//   border:1px solid black;
`;

const RegistrationForm = styled.div`
  max-width: 400px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 10px 0px 40px rgba(0, 0, 0, 0.4);
  margin: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Label=styled.label`
    color: green;
`;
