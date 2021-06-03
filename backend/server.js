import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import customerRoutes from './routes/customerRoutes.js'

dotenv.config()

connectDB()

const app=express()

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Api..')
})

app.use('/api/customers',customerRoutes)


const PORT=process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))