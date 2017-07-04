import React from 'react';
import { Link } from 'react-router';

import Navbar from './Navbar.jsx';
import SearchBar from './SearchBar.jsx';


const Main = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        <SearchBar />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
