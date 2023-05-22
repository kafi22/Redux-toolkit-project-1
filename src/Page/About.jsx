
import React from 'react'
import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom'

const About = () => {

 const navigation =  useNavigate()

  return (
    <Container>

      <h1>This is about page</h1>

      <button className='  bg-dark text-white p-1' onClick={() => navigation('/', {replace : 'true'})} >back to home</button>

    </Container>
  )
}

export default About