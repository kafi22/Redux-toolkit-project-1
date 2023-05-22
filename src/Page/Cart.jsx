import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { useDispatch, useSelector } from 'react-redux'
import '../assets/cart.css'
import Button from 'react-bootstrap/esm/Button'
import { remove } from '../Feature/productSlice'

const Cart = () => {


  const dispatch =  useDispatch()
  const {Product} = useSelector(state => state.product)

  const items = Product?.map(product => (
    <Col key={product.id} sm={12} md={12} lg={12} className='item'>
    <article className='p-2  p-md-1 rounded-3 mb-3 d-flex justify-content-between align-items-center bg-light shadow gap-1'>
    <img src={product.image} alt="product-image" className='product-img' />
    <h4 className='fs-7 font'>{product.title}</h4>
    <p>{product.price}</p>
    <Button onClick={() => dispatch(remove(product.id))}>Remove item</Button>
    </article>
    </Col>
  ))



const getItem = items.length === 0 ? <h3 style={{color : items.length ? 'black' : 'red'}} className='text-center'>please select a item</h3> : items


  return (
    <Container>
      <h1 className=' text-center mt-4'>Cart items</h1>

      <Container className=' mt-4 py-4'>
      <Row>
      {getItem }
      </Row>
      </Container>
    </Container>
  )
}

export default Cart