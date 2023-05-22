import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import '../assets/product.css'
import { add } from '../Feature/productSlice'
import Container from 'react-bootstrap/esm/Container'


const Product = (props) => {

const dispatch = useDispatch()


  return (
  
      <Container>
      <div className='flex-box'>
          <Card style={{ width: '18rem' }} key={props.id} className='h-100 p-2 basic'>
          <Card.Img variant="top" src={props.image} className='img' alt="card-image" />
            <Card.Body className='text-center basic'>
            <Card.Title className=' fs-5'>{props.title}</Card.Title>
            <Card.Text>
            {props.price}
            </Card.Text>
            <Button variant="dark" onClick={() => dispatch(add(props))}>Add to cart</Button>
          </Card.Body>
        </Card>
      </div>
      </Container>


 
  )
}

export default Product