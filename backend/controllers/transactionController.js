import asyncHandler from 'express-async-handler'
import Transaction from '../models/transactionModel.js'

// @desc    Create new transaction
// @route   POST /api/transactions
// @access  Public
const addTransaction = asyncHandler(async (req, res) => {
    const { from, fmail, to, tmail, amount } = req.body

    const paidAt = Date.now()

    const transaction = await Transaction.create({
        from, fmail,
        to, tmail,
        amount, paidAt
    })

    if (transaction) {
        res.status(201).json({
            _id: transaction._id,
            from: transaction.from,
            fmail: transaction.fmail,
            to: transaction.to,
            tmail: transaction.tmail,
            amount: transaction.amount,
            paidAt: transaction.paidAt
        })
    } else {
        res.status(404)
        throw new Error('Customer not found')
    }

})

export { addTransaction }

