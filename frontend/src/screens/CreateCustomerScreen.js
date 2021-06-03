import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {create} from '../actions/customerActions'

const CreateCustomerScreen = ({history}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [balance, setBalance] = useState(0)

    const dispatch = useDispatch()

    const customerCreate = useSelector((state) => state.customerCreate)
    const { loading, error,success, customerInfo } = customerCreate
    console.log(customerInfo)
   

    // useEffect(() => {
    //     if (customerInfo) {
    //       history.push(redirect)
    //     }
    //   }, [history, customerInfo,redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(create(name, email, balance))
        
      }



    return (
        <FormContainer>
        <h1>Create New Customer</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        {success && <Message variant='success'>Customer Created</Message>}
       
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Form.Group controlId='balance'>
            <Form.Label>Balance</Form.Label>
            <Form.Control
              type='Number'
              placeholder='Enter Balance'
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
            ></Form.Control>
          </Form.Group>
  

  
          <Button type='submit' variant='primary'>
            Create
          </Button>
        </Form>
  
      </FormContainer>
    )
}

export default CreateCustomerScreen
