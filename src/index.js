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

app.use('/dist', express.static(path.resolve(__dirname, '../dist'), {maxAge: '4h'}))
app.use('/media', express.static(path.resolve(__dirname, '../media'), {maxAge: '4h'}))

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

      response.render('index.html', {content: content, initialState: stringify(store.getState())})
    }
  )
})

app.get('/calendar/:jurisdiction(oca|rocor)/:year(\\d+)/:month(\\d+)/:day(\\d+)', (request, response) => {
  const jurisdiction = request.params['jurisdiction'];
  const year = parseInt(request.params['year']);
  const month = parseInt(request.params['month']);
  const date = parseInt(request.params['day']);

  const store = configureStore({
    ...initialState,
    jurisdiction: jurisdiction
  })

  const day = new Date(year, month-1, date)

  store.dispatch(fetchDay(day))
    .then(() => {
      let content = renderToString(
        <Provider store={store} >
          <OrthocalContainer />
        </Provider>
      );

      response.render('index.html', {content: content, initialState: stringify(store.getState())})
    }
  )
});

app.get('/about', (request, response) => {
  response.setHeader('Cache-Control', 'assets, max-age=14400')
  response.render('about.html')
})
app.get('/alexa', (request, response) => {
  response.setHeader('Cache-Control', 'assets, max-age=14400')
  response.render('alexa.html')
})
app.get('/api', (request, response) => {
  response.setHeader('Cache-Control', 'assets, max-age=14400')
  response.render('api.html')
})
app.get('/ical', (request, response) => {
  response.setHeader('Cache-Control', 'assets, max-age=14400')
  response.render('ical.html')
})

app.use('/favicon.ico', express.static(path.resolve(__dirname, '../media/favicon.ico'), {maxAge: '4h'}))
app.use('/browserconfig.xml', express.static(path.resolve(__dirname, '../media/browserconfig.xml'), {maxAge: '4h'}))

app.get('/healthz', (request, response) => {response.send('ok')})
