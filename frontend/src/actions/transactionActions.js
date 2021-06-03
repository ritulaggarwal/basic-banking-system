import axios from 'axios'
import {TRANSACTION_CREATE_FAIL, TRANSACTION_CREATE_REQUEST, 
    TRANSACTION_CREATE_SUCCESS,
    TRANSACTION_LIST_REQUEST,
    TRANSACTION_LIST_SUCCESS,
    TRANSACTION_LIST_FAIL} from '../constants/transactionConstants'

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


export const listTransactions = () => async (dispatch) => {
    try {
      dispatch({
        type: TRANSACTION_LIST_REQUEST,
      })
  
  
      const { data } = await axios.get(`/api/transactions`)
  
      dispatch({
        type: TRANSACTION_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      dispatch({
        type: TRANSACTION_LIST_FAIL,
        payload: message,
      })
    }
  }
