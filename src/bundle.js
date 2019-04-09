import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './configureStore'
import { fetchDay } from './actions'
import orthocalApp from './reducers'
import OrthocalContainer from './components/orthocalContainer'

export const store = configureStore()

const day = new Date();
store.dispatch(fetchDay(day));

render(
  <Provider store={store}>
    <OrthocalContainer />
  </Provider>,
  document.getElementById('orthocal')
);
