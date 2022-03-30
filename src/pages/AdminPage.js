import React from 'react'
import { useState} from "react"
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import '../css/registration.css'
import Banner from '../component/Banner'

 

export default function AdminPage() {

const [usernnameReg, setUsername] = useState('')
const [passwordReg, setPassword] = useState('')

  return (
<div className = "main-container">
     <Banner></Banner>
</div>
  )
}
