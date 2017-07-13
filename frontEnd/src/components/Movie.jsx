import React from 'react';
import { Link } from 'react-router';

const thumb = require('./Movie.ncss');

const Movie = React.createClass({
  render() {
    return (
      <div className={thumb.movie_thumbnail}>
        <div className={thumb.inner_div}>
          <Link to={`/view/${this.props.movie.imdbID}`} className={thumb.a}>
            <h3>{this.props.movie.Title}</h3>
            <p>Year of release: {this.props.movie.Year}</p>
            <img src={this.props.movie.Poster} />
          </Link>
        </div>
      </div>
    )
  }
});

export default Movie;
