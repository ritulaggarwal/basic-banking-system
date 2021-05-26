import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Card, ListGroup, Button } from 'react-bootstrap'
import { listCustomerDetails } from '../actions/customerActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const CustomerScreen = ({ match }) => {
    const dispatch = useDispatch()

    const customerDetails = useSelector(state => state.customerDetails)
    const { loading, error, customer } = customerDetails

    useEffect(() => {
        dispatch(listCustomerDetails(match.params.id))
    }, [dispatch,match])
    
    return (
        <>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <div>
                    <div className="customer-holder">
                        <Card border="info" bg="light" style={{ width: '38rem' }} >
                            <ListGroup variant="flush">
                                <ListGroup.Item><h1>{customer.name}</h1></ListGroup.Item>
                                <ListGroup.Item><h3>{customer.email}</h3></ListGroup.Item>
                                <ListGroup.Item><h3>${customer.balance}</h3></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                    <div className="customer-holder my-4">
                        <LinkContainer to='/transfer'>
                            <Button variant="info">Transfer Money</Button>
                        </LinkContainer>

                    </div>
                </div>
            )}


        </>
    )
}

export default CustomerScreen
