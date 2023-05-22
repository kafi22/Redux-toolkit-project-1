import React, { useEffect, useState } from 'react'
import Product from '../Components/Product'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import '../assets/home.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Feature/datafetchSlice'



const Home = () => {

  const dispatch =  useDispatch()

  const {Data, IsLoading, isError} =  useSelector(state => state.fetchData)
  console.log(Data)

  useEffect(() => {
    dispatch(fetchData())
  }, [])


  const styles = {
    color : IsLoading ? 'green' : null,
  }

  const error = {
    color : isError ? 'red' : 'null'
  }

  return (
    <Container>
        <h1 className='ms-4'>Home</h1>

        {IsLoading && <h1 style={styles} className='text-center mt-2'>Loading...</h1>}
        {isError && <h1 style={error} className='text-center'>Something has wrong</h1>}

    
        <div className='mt-5 h-flex py-4' >
          {Data?.map(item => (
            <Product {...item} key={item.id} />
          ))}
        </div>
  
      
    </Container>
  )
}

export default Home