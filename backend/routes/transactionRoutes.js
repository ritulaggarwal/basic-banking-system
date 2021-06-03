import express from 'express'
import {addTransaction} from '../controllers/transactionController.js'
const router= express.Router()


router.route('/').post(addTransaction)

export default router
