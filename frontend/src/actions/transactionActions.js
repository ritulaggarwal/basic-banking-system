import axios from 'axios'
import {TRANSACTION_CREATE_FAIL, TRANSACTION_CREATE_REQUEST, ORDER_CREATE_RESET,
    TRANSACTION_CREATE_SUCCESS} from '../constants/transactionConstants'

export const createTransaction = (transaction) => async (dispatch) => {
    try {
        dispatch({
            type: TRANSACTION_CREATE_REQUEST,
        })


        const { data } = await axios.post(`/api/transactions`, transaction)

        dispatch({
            type: TRANSACTION_CREATE_SUCCESS,
            payload: data,
        })

       
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message

        dispatch({
            type: TRANSACTION_CREATE_FAIL,
            payload: message,
        })
    }
}
