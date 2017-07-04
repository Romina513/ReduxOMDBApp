function requestMovies (state={}, action) {
  switch(action.type) {
    case 'REQUEST_MOVIES_FROM_API':
      //return the new state
      return Object.assign({}, state, {isFetching: true});
    case 'REQUEST_SINGLE_MOVIE_FROM_API':
    //return the new state or function
      return[
      ...state.slice(0, action.i),
      ...state.slice(action.i+1),
      ]
    default:
      return state;
  }
  return state;
};

function serveMovies (state=[], action) {
  switch(action.type) {
    case 'REQUEST_MOVIES_FROM_API':
      //return the new state or function
      return [...state, {
          user: action.author,
          text: action.comment,
      }]
    case 'REQUEST_SINGLE_MOVIE_FROM_API':
    //return the new state or function
      return[
      ...state.slice(0, action.i),
      ...state.slice(action.i+1),
      ]
    default:
      return state;
  }
  return state;
}

/*
function comments (state=[], action) {
  if(typeof action.postid !== 'undefined'){
      return {
          //take the current state
          ...state,
          //overwrite this post with a new one
          [action.postid]: postComments(state[action.postid], action)
      }
  }
  return state;
}
*/

export default comments;
