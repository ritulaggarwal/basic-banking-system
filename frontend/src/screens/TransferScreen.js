import React, {useState,useEffect} from 'react'
import {Row } from 'react-bootstrap'
import axios from 'axios'

const TransferScreen = () => {
    const [customers,setCustomers]=useState([])

    useEffect(()=>{
        const fetchCustomers=async ()=>{
            const {data}=await axios.get('/api/customers')
            setCustomers(data)
        }
        fetchCustomers()
    },[])


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
