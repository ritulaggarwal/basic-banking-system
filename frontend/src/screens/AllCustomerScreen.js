import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Link } from 'react-router-dom'
import { Table,Button } from 'react-bootstrap'
import { deleteCustomer, listCustomers } from '../actions/customerActions'


const AllCustomerScreen = () => {
    const dispatch = useDispatch()

    const customerList = useSelector(state => state.customerList)
    const { loading, error, customers } = customerList

    const customerDelete = useSelector((state) => state.customerDelete)
    const { success: successDelete } = customerDelete

    useEffect(() => {
        dispatch(listCustomers())
    }, [dispatch, successDelete])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
             dispatch(deleteCustomer(id))
        }
      }

    return (
        <>
            <h1>All customers</h1>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Balance($)</th>
                            <th>Customer Detail</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {customers.map((customer, index) => (

                            <tr key={customer._id}>

                                <td>{index + 1}</td>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.balance}</td>
                                <td><Link to={`/customer/${customer._id}`}>View</Link></td>
                                <td>
                                    <Button
                                        variant='danger'
                                        className='btn-sm'
                                        onClick={() => deleteHandler(customer._id)}>
                                        <i className='fas fa-trash'></i>
                                    </Button></td>
                            </tr>

                        ))}

                    </tbody>


                </Table>
            )}


        </>
    )
}

export default AllCustomerScreen
