import React from 'react'
import {useState} from "react"; 
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function SubmitForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    let history = useHistory();


    const addContact = () => {
        Axios.post('http://localhost:3001/create', {
          firstName: firstName,
          lastName: lastName,
          email: email,
        }).then(() => {
          console.log("success");
        });
    };

      function backButton() {
    console.log("You clicked me");
    history.push("/");
}




  return (
    <div className= "App">
      <div className="information">
        <label>First Name</label>
        <input 
          type="text" 
            onChange={(event) =>{
              setFirstName(event.target.value);
              }}/>

         <label>Last Name</label>
        <input 
        type="text"
          onChange={(event) =>{
              setLastName(event.target.value);
              }}/>


         <label>Email Address</label>
        <input 
          type="text"
            onChange={(event) =>{
              setEmail(event.target.value);
              }}/>


        <button onClick={addContact}> Submit Form </button>
        <button variant="light blue" onClick={backButton}>Home Page</button>
      
     </div>
    </div>
  )
}
