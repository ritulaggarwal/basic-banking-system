import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Card, ListGroup,Button } from 'react-bootstrap'
import customers from '../customers'

const CustomerScreen = ({ match }) => {
    const customer = customers.find((c) => c._id === match.params.id)
    return (
        <>
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

        </>
    )
}

export default CustomerScreen
