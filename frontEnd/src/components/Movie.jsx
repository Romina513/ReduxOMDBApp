import React from 'react';
import { Link } from 'react-router';

const Movie = React.createClass({
  render() {
    return (
      <div className="movie-thumbnail">
        <Link to={`/view/${this.props.movie.imdbID}`}>
          <h3>{this.props.movie.Title}</h3>
          <p>{this.props.movie.Year}</p>
          <img src={this.props.movie.Poster} />
        </Link>
      </div>
    )
  }
});

export default Movie;
