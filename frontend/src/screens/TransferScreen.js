import React from 'react'
import {Row } from 'react-bootstrap'
import customers from '../customers'

const TransferScreen = () => {
    return (
        <>
            <h1>Transfer Money</h1>
            {customers.map((customer)=>(
                <Row key={customer._id}>
                    <h3>{customer.name}</h3>
                </Row>
            ))}
        </>
    )
}

export default TransferScreen
