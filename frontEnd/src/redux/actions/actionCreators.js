// Gets movies from API
export function requestMoviesFromAPI() {
  return {
    type: 'REQUEST_MOVIES_FROM_API',
  }
}

// Gets single movie from API
export function requestSingleMovieFromAPI() {
  return {
    type: 'REQUEST_SINGLE_MOVIE_FROM_API'
  }
}

// Got movies from general search
export function receiveMovies(moviesArray) {
  return {
    type: 'RECEIVE_MOVIES',
    movies: moviesArray,
  };
}

// Got movie from pointed search
export function receiveSingleMovie(singleMovie) {
  return {
    type: 'RECEIVE_SINGLE_MOVIE',
    singleMovie
  };
}

// Handle error
export function failedToFetch(err) {
  return {
    type: 'FAILED_TO_FETCH',
    err
  };
}

// Function to fetch all movies corresponding to words in search input field
export function fetchMovie(inputFromSearchField) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return (dispatch) => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestMoviesFromAPI());
    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`http://omdbapi.com/?apikey=20dac387&s=${inputFromSearchField}`)
      .then(response => response.json())
      .then(data => dispatch(receiveMovies(data.Search))) // data.Search, because what I get back from API is an object with a "Search:" property with a value of an array of abjects (that are the individual movies)
      .catch(err => dispatch(failedToFetch(err)));
      // In a real world app, you also want to
      // catch any error in the network call.
  };
}

// Function to fetch a single specific movie
export function fetchSingleMovie(singleMovie) {

  return (dispatch) => {
    dispatch(requestSingleMovieFromAPI());

    return fetch(`http://omdbapi.com/?apikey=20dac387&t=${singleMovie}`)
      .then(response => response.json())
      .then(data => dispatch(receiveSingleMovie(data)))
      .catch(err => dispatch(failedToFetch(err)));
  };
}

/*
title: singleMovie.Title,
year: singleMovie.Year,
genre: singleMovie.Genre,
director: singleMovie.Director,
country: singleMovie.Country,
imdbID: singleMovie.imdbID,
poster: singleMovie.Poster
*/
