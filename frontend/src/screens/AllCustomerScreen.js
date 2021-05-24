import React from 'react'
import {Link} from 'react-router-dom'
import { Table} from 'react-bootstrap'
import customers from '../customers'

const AllCustomerScreen = () => {
    return (
        <>
            <h1>All customers</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Balance</th>
                        <th>Customer Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        
                        <tr key={customer._id}>
                            
                            <td>{customer._id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.balance}</td>
                            <td><Link to={`/customer/${customer._id}`}>View</Link></td>
                        </tr>
                        
                    ))}

                </tbody>
            </Table>


        </>
    )
}

export default AllCustomerScreen
