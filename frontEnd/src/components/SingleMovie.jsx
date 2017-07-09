import React from 'react';


const SingleMovie = React.createClass({

  render() {
    return (
      <div className="single-movie">
        I am the Single Movie component
      </div>
    )
  }
});

export default SingleMovie;

/*

var movieId = this.props.movie.imdbID;
compenentWillMount() {
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
