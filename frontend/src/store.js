import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {customerListReducer, customerDetailsReducer,
     customerUpdateReducer,
     customerCreateReducer,
     customerDeleteReducer} from './reducers/customerReducers'
import { transactionCreateReducer, transactionListReducer } from './reducers/transactionReducers'

const reducer=combineReducers({
    customerList: customerListReducer,
    customerDetails: customerDetailsReducer,
    customerUpdate: customerUpdateReducer,
    customerCreate: customerCreateReducer,
    customerDelete: customerDeleteReducer,
    transactionCreate: transactionCreateReducer,
    transactionList: transactionListReducer,
})

const initialState={}

const middleware=[thunk]

const store= createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store