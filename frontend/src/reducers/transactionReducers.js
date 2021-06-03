import {TRANSACTION_CREATE_FAIL, TRANSACTION_CREATE_REQUEST, ORDER_CREATE_RESET,
    TRANSACTION_CREATE_SUCCESS} from '../constants/transactionConstants'

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
        case ORDER_CREATE_RESET:
            return {}
        default:
            return state
    }
}