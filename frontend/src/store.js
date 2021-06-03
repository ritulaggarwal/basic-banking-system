import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {customerListReducer, customerDetailsReducer,
     customerUpdateReducer,
     customerCreateReducer} from './reducers/customerReducers'

const reducer=combineReducers({
    customerList: customerListReducer,
    customerDetails: customerDetailsReducer,
    customerUpdate: customerUpdateReducer,
    customerCreate: customerCreateReducer,
    
})

const initialState={}

const middleware=[thunk]

const store= createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store