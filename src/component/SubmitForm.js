import React from 'react'
import {useState} from "react"; 
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function SubmitForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [grade, setGrade] = useState("");
    const [paid, setPaid] = useState("");
    const [email, setEmail] = useState("");
    let history = useHistory();

function registrationButton() {
    console.log("You clicked me");
    history.push("/SubmitForm");
}



    const addContact = () => {
        Axios.post('http://localhost:3001/create', {
          firstName: firstName,
          lastName: lastName,
          grade: grade,
          email: email,
          paid: paid,
        }).then(() => {
          alert("Participant added!");
          window.location = "http://localhost:3000/SubmitForm";

        });
    };

      function backButton() {
    console.log("You clicked me");
    history.push("/");
}

  return (
    <div>

<div className= "App">
      <div className="information">
        <label>First Name</label>
        <input 
          type="text" placeholder='First Name'
            onChange={(event) =>{
              setFirstName(event.target.value);
              }}/>

         <label>Last Name</label>
        <input 
        type="text" placeholder='Last Name'
          onChange={(event) =>{
              setLastName(event.target.value);
              }}/>

          <label>Grade</label>
        <input 
        type="text" placeholder='Grade'
          onChange={(event) =>{
              setGrade(event.target.value);
              }}/>


         <label>Email Address</label>
        <input 
          type="text" placeholder='Email'
            onChange={(event) =>{
              setEmail(event.target.value);
              }}/>

          <label>Payment Submitted?</label>
          <input 
          type="text" placeholder='Payment Submitted'
            onChange={(event) =>{
              setPaid(event.target.value);
              }}/>


        <button onClick={addContact}> Submit Form </button>
        <button variant="light blue" onClick={backButton}>Home Page</button>
      
     </div>

    </div>
    
    </div>
  )
}
