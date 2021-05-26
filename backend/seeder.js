import mongoose from 'mongoose'
import dotenv from 'dotenv'
import customers from './data/customers.js'
import Customer from './models/customerModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData= async()=>{
    try {
        await Customer.deleteMany()

        await Customer.insertMany(customers)
        console.log('Data Imported')
    } catch (error) {   
        console.error(error)
        process.exit(1)
    }
}

const destroyData= async()=>{
    try {
        await Customer.deleteMany()

    
        console.log('Data Destroyed')
    } catch (error) {   
        console.error(error)
        process.exit(1)
    }
}

if(process.argv[2]=='-d'){
    destroyData()
}else{
    importData()
}