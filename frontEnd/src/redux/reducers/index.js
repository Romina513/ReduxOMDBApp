import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import individual reducers
import { requestMovies, receiveMovies } from './getMovies';


const rootReducer = combineReducers({requestMovies, receiveMovies, routing: routerReducer});

export default rootReducer;
