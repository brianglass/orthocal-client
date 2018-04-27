import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { fetchDay } from './actions'
import trendingApp from './reducers'
import OrthocalContainer from './components/orthocalContainer'

const loggerMiddleware = createLogger()

export const store = createStore(
  trendingApp,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

const day = new Date();
store
  .dispatch(fetchDay(day))
  .then(() => console.log(store.getState()));

render(
  <Provider store={store}>
    <OrthocalContainer />
  </Provider>,
  document.getElementById('orthocal')
);
