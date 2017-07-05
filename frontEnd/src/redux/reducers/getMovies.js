export function requestMovies (state={}, action) { // state={} (This is the preloaded state) (giving the state a "form", in case it's undefined)
  switch(action.type) {
    case 'REQUEST_MOVIES_FROM_API':
      //return the new state
      return Object.assign({}, state, {isFetching: true});
    case 'MOVIE_RECEIVED_FROM_API':
      return Object.assign({}, state, {isFetching: false});
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
        movies: action.movies
      });
    case 'RECEIVE_SINGLE_MOVIE':
      return Object.assign({}, state, {
        singleMovie: action.singleMovie
      });
    default:
      return state;
  }
  return state;
}
