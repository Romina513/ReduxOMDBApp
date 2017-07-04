import React from 'react';
import ReactDOM from 'react-dom'; //{ render } from 'react-dom'

import './styles/globalStyles.css';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//import { Provider } from 'react-redux';

//import store, { history } from './store'

// * Import Components here later
import Main from './components/Main.jsx';
import MovieGrid from './components/MovieGrid.jsx';
import SingleMovie from './components/SingleMovie.jsx';
// *Note: Need .jsx extension, because the default is .js, so it will look for .js files, not .jsx by default


const router = (

    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={MovieGrid}></IndexRoute>
        <Route path="/view/:postId" component={SingleMovie}></Route>
      </Route>
    </Router>

)

ReactDOM.render(router, document.getElementById('app'));

/*
<Provider store={store}>
</Provider>
const React = require('react');
const ReactDOM = require('react-dom');


ReactDOM.render((
  <div>
    HELLO
  </div>
), document.getElementById('app'));
*/
