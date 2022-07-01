import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

import App from './App'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <GoogleOAuthProvider clientId="283038448709-7lb07rc2ngjfqdeelg2fjuah9kahvjho.apps.googleusercontent.com">
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
    </GoogleOAuthProvider>,
    document.getElementById('root')
)