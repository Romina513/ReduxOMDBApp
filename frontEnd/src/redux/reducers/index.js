import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import individual reducers
import { requestMovies, receiveMovies } from './getMovies';
import { authentication } from './authentication';


const rootReducer = combineReducers({requestMovies, receiveMovies, authentication, routing: routerReducer});

export default rootReducer;
