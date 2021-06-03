import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listTransactions } from '../actions/transactionActions'

const TransactionListScreen = () => {

    const dispatch = useDispatch()

    const transactionList = useSelector((state) => state.transactionList)
    const { loading, error, transactions } = transactionList

    useEffect(() => {

        dispatch(listTransactions())

    }, [dispatch])

    return (
        <>
            <h1>Transaction History</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>FROM</th>
                            <th>TO</th>
                            <th>SENDER MAIL</th>
                            <th>RECEIVER MAIL</th>
                            <th>AMOUNT</th>
                            <th>PAID AT</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction._id}>
                                <td>{transaction.from}</td>
                                <td>{transaction.to}</td>
                                <td>{transaction.fmail}</td>
                                <td>{transaction.tmail}</td>
                                <td>${transaction.amount}</td>
                                <td>{transaction.paidAt}</td>
                
      
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    )
}

export default TransactionListScreen
