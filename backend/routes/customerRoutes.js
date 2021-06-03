import express from 'express'
import asyncHandler from 'express-async-handler'
import Customer from '../models/customerModel.js'
import {updateCustomerProfile} from '../controllers/customerController.js'
const router= express.Router()

router.get('/',asyncHandler( async (req,res)=>{
    const customers= await Customer.find({})

    res.json(customers)
}))

router.get('/:id',asyncHandler( async (req,res)=>{
    const customer=await Customer.findById(req.params.id)

    if(customer){
        res.json(customer)
    }else{
        res.status(404).json({message: 'Customer Not Found'})
    }

    
}))

router.put('/:id',updateCustomerProfile)


export default router