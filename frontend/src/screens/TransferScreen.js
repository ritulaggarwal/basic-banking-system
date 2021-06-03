import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCustomers, updateCustomerProfile } from '../actions/customerActions'
import { createTransaction } from '../actions/transactionActions'
import Loader from '../components/Loader'
import Message from '../components/Message'




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
        let sid = null;
        let smail = ''
        let rmail = ''
        let rid = null;
        let rbal = 0;
        for (const val of customers) {
            if (val.name === sender) {
                senderBalance = val.balance;
                sid = val._id;
                smail = val.email
            }
            if (val.name === receiver) {
                rid = val._id;
                rmail = val.email
                rbal = val.balance

            }
        }
        const ssid = sid
        const rrid = rid

        console.log(senderBalance);
        console.log(sid);
        console.log(rid);
        if (senderBalance - bal < 0) {
            correct = false;

            setSender("");
            setReceiver("");
            setBal("");
            return (alert('Not enough balance'))
        }



        if (correct === true) {
            const money = Number(bal)
            senderBalance -= money;
            rbal += money
            console.log(money)
            console.log(senderBalance)
            console.log(rbal)

            dispatch(updateCustomerProfile({ _id: ssid, name: sender, email: smail, balance: senderBalance }))

            dispatch(updateCustomerProfile({ _id: rrid, name: receiver, email: rmail, balance: rbal }))

            dispatch(createTransaction({ from: sender, fmail: smail, to: receiver, tmail: rmail, amount: money }))

            alert("Successful Transaction");

            setSender("");
            setReceiver("");
            setBal("");
        }

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
