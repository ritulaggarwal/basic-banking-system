import mongoose from 'mongoose'

const transactionSchema= mongoose.Schema({
    from:{
        type: String,
        required: true
    },
    fmail:{
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true,
    },
    tmail:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    paidAt:{
        type: Date,
        required: true
    },
},{
    timestamps: true
})

const Transaction= mongoose.model('Transaction',transactionSchema)

export default Transaction