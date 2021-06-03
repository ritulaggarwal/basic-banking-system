import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Card, ListGroup, Button,Row,Col } from 'react-bootstrap'
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
                    <div className="customer-holder card">
                        <Card border="info" bg="light" style={{ width: '48rem',height:'22rem'  }} className='containe' >
                            <ListGroup variant="flush" style={{width: '38rem'}}>
                            <ListGroup.Item>
                            <Row>
                                <Col md={4}>
                                    <h3>Account No</h3>
                                </Col>
                                <Col md={8}>
                                    <h2>${customer._id}</h2>
                                </Col>
                            </Row>
                            </ListGroup.Item>
                            <ListGroup.Item > 
                            <Row>
                                <Col md={4}>
                                    <h3>Name</h3>
                                </Col>
                                <Col md={8}>
                                    <h2>{customer.name}</h2>
                                </Col>
                            </Row>
                            </ListGroup.Item >
                            <ListGroup.Item>
                            <Row>
                                <Col md={4}>
                                    <h3>E-Mail</h3>
                                </Col>
                                <Col md={8}>
                                    <h2>{customer.email}</h2>
                                </Col>
                            </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <Row>
                                <Col md={4}>
                                    <h3>balance</h3>
                                </Col>
                                <Col md={8}>
                                    <h2>${customer.balance}</h2>
                                </Col>
                            </Row>
                            </ListGroup.Item>
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
