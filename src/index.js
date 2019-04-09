import express from 'express'
import path from 'path'
import {Provider} from 'react-redux'
import React from 'react'
import {renderToString} from 'react-dom/server'
import nunjucks from 'nunjucks'
import {stringify} from 'javascript-stringify';
import compression from 'compression'

import template from './template'
import configureStore from './configureStore'
import {fetchDay} from './actions'
import OrthocalContainer from './components/orthocalContainer'
import {initialState} from './reducers'

const app = express()

app.use(compression())
app.disable('x-powered-by')
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

app.use('/dist', express.static(path.resolve(__dirname, '../dist')))
app.use('/media', express.static(path.resolve(__dirname, '../media')))

app.listen(process.env.PORT || 8000)

app.get('/', (request, response) => {
  const store = configureStore()
  const day = new Date()

  store.dispatch(fetchDay(day))
    .then(() => {
      let content = renderToString(
        <Provider store={store} >
          <OrthocalContainer />
        </Provider>
      );

      response.setHeader('Cache-Control', 'assets, max-age=604800')
      response.render('index.html', {content: content, initialState: stringify(store.getState())})
    }
  )
})

app.get('/about', (request, response) => {response.render('about.html')})
app.get('/alexa', (request, response) => {response.render('alexa.html')})
app.get('/api', (request, response) => {response.render('api.html')})
app.get('/ical', (request, response) => {response.render('ical.html')})

app.use('/favicon.ico', express.static(path.resolve(__dirname, '../media/favicon.ico')))

app.get('/healthz', (request, response) => {response.send('ok')})
