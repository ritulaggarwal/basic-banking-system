import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import customers  from './data/customers.js'

dotenv.config()

connectDB()

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

const PORT=process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))