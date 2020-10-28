import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducers'

export default function configureStore(preloadedState) {
  // const loggerMiddleware = createLogger()
  // const middlewares = applyMiddleware(thunkMiddleware, loggerMiddleware)
  const middlewares = applyMiddleware(thunkMiddleware)
  const store = createStore(rootReducer, preloadedState, middlewares)
  return store
}
