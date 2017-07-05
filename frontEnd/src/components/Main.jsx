import React from 'react';
import { Link } from 'react-router';

import Navbar from './Navbar.jsx';
import Search from '../containers/Search.jsx';


const Main = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        <Search { ...this.props} />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
