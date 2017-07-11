// @flow

import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware() // empty for now, but we will want middleware soon.
))

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'))
