import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { fetchDay } from './actions'
import trendingApp from './reducers'
import DayContainer from './components/dayContainer'

const loggerMiddleware = createLogger()

const store = createStore(
  trendingApp,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

store
  .dispatch(fetchDay())
  .then(() => console.log(store.getState()))

render(
  <Provider store={store}>
    <DayContainer />
  </Provider>,
  document.querySelector('body')
)
