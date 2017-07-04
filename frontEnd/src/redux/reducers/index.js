import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import individual reducers
import nameOfMyReducer from './NameOfFileOfMyReducer';
import comments from './comments';


const rootReducer = combineReducers({posts, comments, routing: routerReducer});
