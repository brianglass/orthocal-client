import React from 'react'
import {hydrate} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './configureStore'

import OrthocalContainer from './components/orthocalContainer'

const state = window.__STATE__;

delete window.__STATE__;

const store = configureStore(state)

hydrate(
  <Provider store={store} >
    <OrthocalContainer />
  </Provider>,
  document.getElementById('orthocal')
)
