import {TRANSACTION_CREATE_FAIL, TRANSACTION_CREATE_REQUEST, 
    TRANSACTION_CREATE_SUCCESS,
    TRANSACTION_LIST_REQUEST,
    TRANSACTION_LIST_SUCCESS,
    TRANSACTION_LIST_FAIL} from '../constants/transactionConstants'

export const transactionCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case TRANSACTION_CREATE_REQUEST:
            return {
                loading: true,
            }
        case TRANSACTION_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                order: action.payload,
            }
        case TRANSACTION_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
      
        default:
            return state
    }
}

export const transactionListReducer = (state = { transactions: [] }, action) => {
    switch (action.type) {
      case TRANSACTION_LIST_REQUEST:
        return {
          loading: true,
        }
      case TRANSACTION_LIST_SUCCESS:
        return {
          loading: false,
          transactions: action.payload,
        }
      case TRANSACTION_LIST_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      default:
        return state
    }
  }