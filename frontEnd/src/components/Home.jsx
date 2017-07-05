import React from 'react';


const Home = React.createClass({
  render() {
    return (
      <div className="home">
        <img src="../src/assets/film_reel.png"></img>
      </div>
    )
  }
});

export default Home;

/*
Now path to image is from index html, b/c image was not loading otherwise  
*/
