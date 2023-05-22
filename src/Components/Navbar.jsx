import React from 'react'
import { NavLink, Link, Outlet, useSearchParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand'
import Nav from 'react-bootstrap/Nav'
import { BsFillCartCheckFill } from "react-icons/bs";
import '../assets/navbar.css'
import { useSelector } from 'react-redux'


const Navbars = () => {

    const  {Product} = useSelector(state => state.product)
  
  return (
    < >
        <Navbar  className='navbar bg-dark' variant="dark">
            <Container className=' d-flex align-items-center justify-content-between'>
             
                <NavbarBrand href='/'><h3>Redux-toolkit</h3></NavbarBrand>
           


            <Nav className='ms-auto navlink me-3' >
                <NavLink  to={'/'}>Home</NavLink>
                <NavLink to={'about'}>About</NavLink>
            </Nav>

           
                <Link className='text-white m-lg-4' to={'cart'}>
            <BsFillCartCheckFill   style={{cursor : 'pointer'}} />
            <span className=' fs-5'>{Product.length}</span>
                </Link>
           
              
            </Container>
        </Navbar>

        <main>
            <Outlet />
        </main>
    </>
  )
}

export default Navbars