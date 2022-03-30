import React from 'react'
import Card from 'react-bootstrap/Card'
import '../css/homepage.css'
import { useHistory } from 'react-router-dom';

export default function CampInformation() {

  let history = useHistory();

let loginButton = () => history.push("/admin");


  return (
    <Card class= "camp-information" style={{ width: '15rem' }}>
  <Card.Img variant="Center" src="https://images.unsplash.com/photo-1497906539264-eb74442e37a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" />
  <Card.Body>
    <Card.Title>Camp Information</Card.Title>
    <Card.Text>
      <p> Welcome back! We are excited to host Ignite VI again after a 2+ year delay!  </p> 

<p>This is a perfect event for you and your TNTT friends to have fun, build in faith, and grow in fellowship. If you are in Nganh Nghia or Nghia Hiep, this event is for you!  </p>

REGISTRATION DUE DATE: Sunday, April 24, 2022
 
    </Card.Text>
   
    <button onClick={(loginButton)}> Administrator Login</button>
  </Card.Body>
</Card>
  )
}
