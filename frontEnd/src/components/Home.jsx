import React from 'react';

import RegisterForm from './RegisterForm.jsx';


const Home = React.createClass({
  render() {
    return (
      <div className="home">
        <RegisterForm {...this.props} />
        <img src="../assets/film_reel.png"></img>
      </div>
    )
  }
});

export default Home;

/*
Now path to image is from index html, b/c image was not loading otherwise
../src/assets/film_reel.png
*/
