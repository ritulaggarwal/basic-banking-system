const express= require('express')
const customers = require('./data/customers')

const app=express()

app.get('/',(req,res)=>{
    res.send('Api..')
})

app.get('/api/customers',(req,res)=>{
    res.json(customers)
})

app.get('/api/customers/:id',(req,res)=>{
    const customer=customers.find((c)=>c._id===req.params.id)
    res.json(customer)
})

app.listen(5000, console.log('Server running'))