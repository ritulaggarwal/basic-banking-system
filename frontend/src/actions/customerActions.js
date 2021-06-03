import axios from 'axios'
import {
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_FAIL,
  CUSTOMER_DETAILS_REQUEST,
  CUSTOMER_DETAILS_SUCCESS,
  CUSTOMER_DETAILS_FAIL,
  CUSTOMER_UPDATE_REQUEST,
  CUSTOMER_UPDATE_FAIL,
  CUSTOMER_UPDATE_SUCCESS,
  CUSTOMER_CREATE_REQUEST,
  CUSTOMER_CREATE_FAIL,
  CUSTOMER_CREATE_SUCCESS
} from '../constants/customerConstants'

export const listCustomers = () => async (dispatch) => {
  try {
    dispatch({ type: CUSTOMER_LIST_REQUEST })

    const { data } = await axios.get('/api/customers')

    dispatch({
      type: CUSTOMER_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: CUSTOMER_LIST_FAIL,
      payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
  }
}

export const listCustomerDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CUSTOMER_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/customers/${id}`)

    dispatch({
      type: CUSTOMER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CUSTOMER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


export const updateCustomerProfile = (customer) => async (dispatch) => {
  try {
    dispatch({
      type: CUSTOMER_UPDATE_REQUEST,
    })



    const { data } = await axios.put(`/api/customers/${customer._id}`, customer)

    dispatch({
      type: CUSTOMER_UPDATE_SUCCESS,
    })

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: CUSTOMER_UPDATE_FAIL,
      payload: message,
    })
  }
}



export const create = (name, email, balance) => async (dispatch) => {
  try {
    dispatch({
      type: CUSTOMER_CREATE_REQUEST,
    })



    const { data } = await axios.post(
      '/api/customers',
      { name, email, balance }
      
    )

    dispatch({
      type: CUSTOMER_CREATE_SUCCESS,
      payload: data,
    })


  } catch (error) {
    dispatch({
      type: CUSTOMER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

