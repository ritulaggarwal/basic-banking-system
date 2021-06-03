import express from 'express'
import {addTransaction, getTransactions} from '../controllers/transactionController.js'
const router= express.Router()


router.route('/').post(addTransaction).get(getTransactions)

export default router
