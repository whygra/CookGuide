import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

import App from './App'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)