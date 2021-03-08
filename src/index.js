import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from "./reducers";

// define store
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// thunk in applyMiddleware
const store = createStore(rootReducer, composeEnhancer(applyMiddleware()));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);