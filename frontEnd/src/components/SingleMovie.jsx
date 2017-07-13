import React from 'react';


const SingleMovie = React.createClass({
  render() {
    return (
      <div className="single-movie">
        <img src={this.props.movieProp.Poster} />
        <h2>{this.props.movieProp.Title}</h2>
        <p>Year: {this.props.movieProp.Year}</p>
        <p>Genre: {this.props.movieProp.Genre}</p>
        <p>Director: {this.props.movieProp.Director}</p>
        <p>Country: {this.props.movieProp.Country}</p>
      </div>
    )
  }
});

export default SingleMovie;

/*
ref={this.props.movie.imdbID}
var movieId = this.props.movie.imdbID;
componentWillMount() {
  this.props.fetchSingleMovie(movieId) {

  }
}

title: singleMovie.Title,
year: singleMovie.Year,
genre: singleMovie.Genre,
director: singleMovie.Director,
country: singleMovie.Country,
imdbID: singleMovie.imdbID,
poster: singleMovie.Poster

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


export default MovieGrid;

const Search = React.createClass({
  fetch: function(input) {
    this.props.fetchMovie(input)
    history.push('/searchresults');
  },
  render() {
    return (
      <div className="search">
        <SearchBar fetch={this.fetch} />
      </div>
    )
  }
});

const SearchBar = React.createClass({
  getInput(e) {
    e.preventDefault();
    console.log(this.refs.input.value);
    this.props.fetch(this.refs.input.value)
  },
  render() {
    return (
      <div className="search-bar">
        <form>
          <input type="text" placeholder="Search for a movie" ref="input" />
          <input type="submit" value="Submit" onClick={this.getInput} />
        </form>
      </div>
    )
  }
});
*/
