import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router';

require('./Navbar.ncss');



class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">

        <ul>
          <li><Link to="/">Movie DB</Link></li>
          <li>User Profile</li>
        </ul>

      </div>
    );
  }
}

export default Navbar;
