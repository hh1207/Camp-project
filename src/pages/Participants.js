import Axios from 'axios';
import React from 'react'
import { useState } from 'react';
import '../css/participants.css'
import { useHistory } from 'react-router-dom';

export default function Participants() {

  let history = useHistory();

 const [contactList,setContactList] = useState([]);

    const getContacts = () => {
  Axios.get("http://localhost:3001/contacts").then((response) => {
    setContactList(response.data);
  });
}

  function backButton() {
    console.log("You clicked me");
    history.push("/");
}

  return (
<div className="contacts">
    <button onClick={getContacts}> Show Contacts</button>
     <button variant="light blue" onClick={backButton}>Home Page</button>

    {contactList.map((val, key)=>{
        return (
          <div className='contact'>
                <table>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
            <tr>
              <td> {val.firstName} </td>
              <td> {val.lastName} </td>
              <td> {val.email} </td>
            </tr>
          </table>

            </div>
    )})}
</div>
    
  )
}
