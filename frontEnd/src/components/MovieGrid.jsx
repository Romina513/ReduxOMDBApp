import React from 'react';


import Movie from './Movie.jsx'

import './MovieGrid.ncss';


const MovieGrid = React.createClass({
  render() {
    if (this.props.isFetching == true) {
      return (
        <p>Working on it...</p>
      )
    }
    return (
      <div className="movie-grid">
        {this.props.movies.map((movie, i) =>
          <Movie key={movie.imdbID+i} movie={movie}></Movie>)}
      </div>
    )
  }
});

export default MovieGrid;

/*
Note:
this.props.receiveMovies.movies
.receiveMovies.movies is value in store state available through props
Using map method on movies array
That returns a new array of <Movie/> components

Changed this:
if (this.props.movies == undefined) {
  return (
    <p>Working on it...</p>
  )
}
*/
