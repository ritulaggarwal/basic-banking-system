import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row } from 'react-bootstrap'
import { listCustomers } from '../actions/customerActions'
import Loader from '../components/Loader'
import Message from '../components/Message'


const TransferScreen = () => {
    const dispatch = useDispatch()

    const customerList = useSelector(state => state.customerList)
    const { loading, error, customers } = customerList

    useEffect(() => {
        dispatch(listCustomers())
    }, [dispatch])


    return (
        <>
            <h1>Transfer Money</h1>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <div>
                {
                    customers.map((customer) => (
                        <Row key={customer._id}>
                            <h3>{customer.name}</h3>
                        </Row>
                    ))
                }
                </div>
            )}

        </>
    )
}

export default TransferScreen
