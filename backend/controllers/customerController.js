import asyncHandler from 'express-async-handler'
import Customer from '../models/customerModel.js'

// @desc    Update customer profile
// @route   PUT /api/customers/:id
// @access  Public
const updateCustomerProfile= asyncHandler ( async(req,res)=>{
    const customer= await Customer.findById(req.params.id)

    if(customer){
        customer.name = req.body.name || customer.name
        customer.email = req.body.email || customer.email
        customer.balance=req.body.balance || customer.balance

        console.log(req.body)

        const updatedCustomer= await customer.save()
        res.json({
            //updatedCustomer
            _id: updatedCustomer._id,
            name: updatedCustomer.name,
            email: updatedCustomer.email,
            balance: updatedCustomer.balance,      
          })

    }else{
        res.status(404)
        throw new Error('User not found')
    }


})


// @desc    Create a customer
// @route   POST /api/customers
// @access  Public
const createCustomer = asyncHandler(async (req, res) => {
    const { name,email, balance } = req.body
  
    const customerExists = await Customer.findOne({ email })

    if(customerExists){
        res.status(400)
        throw new Error('Customer Already Exists')
    }

    const customer= await Customer.create({
        name,
        email,
        balance
    })

    if(customer){
        res.status(201).json({
            _id: customer._id,
            name: customer.name,
            email: customer.email,
            balance: customer.balance,
        })
    }else{
        res.status(404)
        throw new Error('Customer not found')
    }


  })




export {updateCustomerProfile, createCustomer}