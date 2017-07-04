import React from 'react';
import ReactDOM from 'react-dom'; //{ render } from 'react-dom'

import './styles/globalStyles.css';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//import { Provider } from 'react-redux';

import { Provider } from 'react-redux';

import store, { history } from './redux/store'

// * Import Components here later
import App from './components/App';
import MovieGrid from './components/MovieGrid.jsx';
import SingleMovie from './components/SingleMovie.jsx';
// *Note: Need .jsx extension, because the default is .js, so it will look for .js files, not .jsx by default


const router = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={MovieGrid}></IndexRoute>
        <Route path="/view/:postId" component={SingleMovie}></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('app'));

/*

const React = require('react');
const ReactDOM = require('react-dom');


ReactDOM.render((
  <div>
    HELLO
  </div>
), document.getElementById('app'));
*/
