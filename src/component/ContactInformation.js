import Axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import '../css/participants.css'


export default function ContactInformation() {
 let history = useHistory();

 const [contactList,setContactList] = useState([]);
 const [newPayment, setPaid] = useState("");

    const getContacts = () => {
  Axios.get("http://localhost:3001/contacts").then((response) => {
    setContactList(response.data);
  });
}

const deleteContact = (id) => {
  Axios.delete(`http://localhost:3001/delete/${id}`).then(
    (response) =>{
      setContactList(contactList.filter((val) => {
        return val.id != id
        
      }))
    }
  )
}


    function backButton() {
      console.log("You clicked me");
      history.push("/");
}

  const updatePaymentStatus = (id) => {
    Axios.put("http://localhost:3001/update", {paid: newPayment, id: id}).then(
      (response)=>{
      setContactList(contactList.map((val) => {
        return val.id == id ? {
          id: val.id, 
          firstName: val.firstName,
          lastName: val.lastName,
          grade: val.grade,
          email: val.email,
          paid: newPayment, }: val;
      }))
    })
  }

  return (
<div className="contacts">
    <button onClick={getContacts}> Show Contacts</button>
     <button variant="light blue" onClick={backButton}>Home Page</button>
  

    {contactList.map((val, key)=>{
        return (
    <Table striped bordered hover variant= "dark">
<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Class Grade</th>
      <th scope="col">Email Address</th>
      <th scope="col">Payment Status</th>
      <th scope="col">Update Payment</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{val.firstName}</td>
      <td>{val.lastName}</td>
      <td>{val.grade}</td>
      <td>{val.email}</td>
      <td>{val.paid}</td>
      <div>
        <input type = "text" placeholder="Yes/No" onChange={(event) => {
          setPaid(event.target.value);
        }}>
        </input>
        <button onClick={() => {updatePaymentStatus(val.id)}}> Submit</button>
      </div>
      <td><button onClick={()=> {deleteContact(val.id)}}> Delete Contact</button> </td>
    </tr>
  
  </tbody>
</table>
   </Table>
    )})}
</div>
    
  )
}
