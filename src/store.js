import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import systemInfo from 'reducers/systemInfo'
import alertWatch from 'middleware/alertWatch'


// Add all your custom middleware to this array.
const middlewareList = [alertWatch]

// Add all your reducers to this object.
const rootReducer = combineReducers({ systemInfo })

// https://goo.gl/XRLgX8
// Using Redux DevTools extension? You should...
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Create the Redux store, in all its router-ified glory!
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewareList))
)

export default store
