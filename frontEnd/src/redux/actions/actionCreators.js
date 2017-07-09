// Gets movies from API
export function requestMoviesFromAPI() {
  return {
    type: 'REQUEST_MOVIES_FROM_API',
  }
}

// Gets single movie from API
export function movieReceivedFromAPI() {
  return {
    type: 'MOVIE_RECEIVED_FROM_API'
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

// Create/Register user
export function registerUser() {
  return {
    type: 'REGISTER_USER',
  };
}

// Succesful rgistration
export function userIsRegistered() {
  return {
    type: 'USER_IS_REGISTERED',
  };
}

export function failedPost(err) {
  return {
    type: 'FAILED_POST',
    err
  };
}

export function userFailToRegister(err) {
  return {
    type: 'USER_FAILED_TO_REGISTER',
    err
  }
}

export function logInUser(err) {
  return {
    type: 'LOG_IN_USER',
  }
}

export function userIsLoggedIn(err) {
  return {
    type: 'USER_IS_LOGGED_IN',
  }
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
      .then(data => {
        dispatch(receiveMovies(data.Search));
        dispatch(movieReceivedFromAPI());
      }) // data.Search, because what I get back from API is an object with a "Search:" property with a value of an array of abjects (that are the individual movies)
      .catch(err => dispatch(failedToFetch(err)));
      // In a real world app, you also want to
      // catch any error in the network call.
  };
}

// Function to fetch a single specific movie
export function fetchSingleMovie(singleMovie) {

  return (dispatch) => {
    dispatch(requestMoviesFromAPI());

    return fetch(`http://omdbapi.com/?apikey=20dac387&t=${singleMovie}`)
      .then(response => response.json())
      .then(data => {
        dispatch(receiveSingleMovie(data));
        dispatch(movieReceivedFromAPI());
      })
      .catch(err => dispatch(failedToFetch(err)));
  };
}

// Function to post user registration data to server
export function postRegistration(userData) {

  return (dispatch) => {
    dispatch(registerUser());

    return fetch('http://localhost:3000/users/register', {
      method: 'POST',
      headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        if(data.register) {
          dispatch(userIsRegistered()) // Was like this: dispatch(userIsRegistered(data))
        } else {
          dispatch(userFailToRegister(data.err))
        }
      })
      .catch(err => dispatch(failedPost(err)))
  };
};


export function postLogIn(userData) {

  return (dispatch) => {
    dispatch(logInUser());

    return fetch('http://localhost:3000/users/login', {
      method: 'POST',
      headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
      body: JSON.stringify(userData)
    })
      // .then(response => {
      //   if(response.status == 401) {
      //     console.log('Error in log in');
      //   }
      // })
      .then(response => response.json())
      .then(data => dispatch(userIsLoggedIn()))
      .catch(err => dispatch(failedPost(err)))
  };
};
