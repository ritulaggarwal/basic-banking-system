import {
    CUSTOMER_LIST_SUCCESS,
    CUSTOMER_LIST_REQUEST,
    CUSTOMER_LIST_FAIL,
    CUSTOMER_DETAILS_REQUEST,
    CUSTOMER_DETAILS_SUCCESS,
    CUSTOMER_DETAILS_FAIL,
    CUSTOMER_UPDATE_REQUEST,
    CUSTOMER_UPDATE_SUCCESS,
    CUSTOMER_UPDATE_FAIL
} from '../constants/customerConstants'

export const customerListReducer = (state = { customers: [] }, action) => {
    switch (action.type) {
        case CUSTOMER_LIST_REQUEST:
            return { loading: true, customers: [] }

        case CUSTOMER_LIST_SUCCESS:
            return { loading: false, customers: action.payload }

        case CUSTOMER_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state

    }
}


export const customerDetailsReducer = (state = { customer :{} }, action) => {
    switch (action.type) {
        case CUSTOMER_DETAILS_REQUEST:
            return { loading: true, ...state }

        case CUSTOMER_DETAILS_SUCCESS:
            return { loading: false, customer: action.payload }

        case CUSTOMER_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state

    }
}

export const customerUpdateReducer= (state= { customer:{} },action)=>{
    switch(action.type){
        case CUSTOMER_UPDATE_REQUEST:
            return { loading: true}

        case CUSTOMER_UPDATE_SUCCESS:
            return {loading: false, success: true}

        case CUSTOMER_UPDATE_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}