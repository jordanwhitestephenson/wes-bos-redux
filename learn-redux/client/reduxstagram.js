// let's go!
import React from 'react'
import { render } from 'react-dom'

//import CSS
import css from './styles/style.styl'
import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/Photogrid'
import {Router, Route, IndexRoute} from 'react-router'

import { Provider } from 'react-redux';
import store, {history} from './store'
const router = (
    <Provider store = {store}>
    <Router history = {history}>
        <Route path="/" component={App}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path ="/view/:postId" component = {Single}></Route>
        </Route>
        </Router>
    </Provider>
)
render(router, document.getElementById('root'))