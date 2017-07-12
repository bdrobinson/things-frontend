// @flow

import 'babel-polyfill'
import React from 'react'
import 'rxjs'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'

import App from './components/App'
import rootReducer from './reducers'
import rootEpic from './epics'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            createEpicMiddleware(rootEpic)
        )
    ))

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'))
