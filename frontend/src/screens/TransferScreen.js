import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCustomers } from '../actions/customerActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import axios from 'axios'


const TransferScreen = () => {
    const dispatch = useDispatch()
    const [bal, setBal] = useState("");
    const [sender, setSender] = useState("");
    const [receiver, setReceiver] = useState("");

    let correct = true;
    let senderBalance = 0;

    const customerList = useSelector(state => state.customerList)
    const { loading, error, customers } = customerList


    const transfers = () => {

        console.log(sender);
        console.log(receiver);
        console.log(bal);
        if (sender === "" || receiver === "") {
            correct = false;

            setSender("");
            setReceiver("");
            setBal("");
            return (alert('Enter all Details.'))
        }
        if (bal === "") {
            correct = false;

            return (alert('Please Enter Amount.'))
        }
        for (const val of customers) {
            if (val.name === sender) {
                senderBalance = val.balance;
            }
        }

        console.log(senderBalance);
        if (senderBalance - bal < 0) {
            correct = false;

            setSender("");
            setReceiver("");
            setBal("");
            return (alert('Not enough balance'))
        }
/*
        if (correct === true) {
            
            axios.post("/api/customers", {
                sender: sender,
                receiver: receiver,
                balance: bal
            }).then(() => {
                console.log("Success");
            });

            axios.put(`/api/customers/`, {
                balance: bal,
                receiver: receiver
            }).then((response) => { 
                    customers.map((val) => {
                        return val.Name === receiver ?
                            {
                                _id: val._id,
                                name: val.name,
                                email: val.email,
                                balance: parseInt(bal) + parseInt(val.balance),
                            }
                            : val.Name === sender ?
                                {
                                    _id: val._id,
                                    name: val.name,
                                    email: val.email,
                                    balance: parseInt(val.balance) - parseInt(bal),
                                }
                                : val;
                    })
                

                alert("Successful Transaction");
              
                setSender("");
                setReceiver("");
                setBal("");
            });
        }*/
    };




    useEffect(() => {
        dispatch(listCustomers())
    }, [dispatch])



    return (
        <>
            <h1>Transfer Money</h1>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (

                <div className="transfer">
                    <div className="transfer-card">
                        <label htmlFor="senders">From</label>
                        <select name="senders" id="senders" value={sender} onChange={(e) => { setSender(e.target.value) }}>
                            <option value=""></option>
                            {
                                customers.map((val, key) => {
                                    return (
                                        <option value={val.name} id={val._id} key={key}>{val.name}</option>
                                    )
                                })

                            }
                        </select>
                        <label htmlFor="receivers">To</label>
                        <select name="receivers" id="receivers" value={receiver} onChange={(e) => { setReceiver(e.target.value) }} required>
                            <option value=""></option>
                            {
                                customers.map((val, key) => {
                                    return (val.name === sender ?
                                        "" :
                                        <option id={val._id} value={val.name} key={key}>{val.name}</option>
                                    )
                                })
                            }
                        </select>
                        <label>Amount</label>
                        <input placeholder="&#8377;" onChange={(e) => { setBal(e.target.value) }} value={bal} />
                        <button type="button" onClick={transfers} disabled={loading}>
                            {loading && <i className="fa fa-refresh fa-spin"></i>}
                            Send
                        </button>
                    </div>
                </div>

            )}





        </>
    )
}

export default TransferScreen
