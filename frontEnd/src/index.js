import React from 'react';
import ReactDOM from 'react-dom'; //or you can import { render } from 'react-dom' and would not need to write ReactDOM.render below, but would just write render()

import './styles/globalStyles.css';

import { Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';

import store, { history } from './redux/store'

import App from './components/App';
import Home from './components/Home.jsx';
import MovieGrid from './components/MovieGrid.jsx';
import SingleMovie from './components/SingleMovie.jsx';
// *Note: Need .jsx extension, because the default is .js, so it will look for .js files, not .jsx by default


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/searchresults" component={MovieGrid}></Route>
        <Route path="/view/:postId" component={SingleMovie}></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('app'));
