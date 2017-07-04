export function requestMovies (state={}, action) {
  switch(action.type) {
    case 'REQUEST_MOVIES_FROM_API':
      //return the new state
      return Object.assign({}, state, {isFetching: true});
    case 'REQUEST_SINGLE_MOVIE_FROM_API':
      return Object.assign({}, state, {isFetching: true});
    case 'FAILED_TO_FETCH':
      return Object.assign({}, state, {
        isFetching: false,
        error: action.err
      });
    default:
      return state;
  }
  return state;
};


export function receiveMovies (state={}, action) {
  switch(action.type) {
    case 'RECEIVE_MOVIES':
      return Object.assign({}, state, {
        isFetching: false,
        movies: action.movies
      });
    case 'RECEIVE_SINGLE_MOVIE':
      return Object.assign({}, state, {
        isFetching: false,
        singleMovie: action.singleMovie
      });
    default:
      return state;
  }
  return state;
}
