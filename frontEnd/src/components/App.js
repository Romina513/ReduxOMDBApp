import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionCreators';
import Main from './Main.jsx';


function mapStateToProps(state) {
  return {
    isFetching: state.requestMovies.isFetching,
    error: state.requestMovies.error,
    movies: state.receiveMovies.movies,
    singleMovie: state.receiveMovies.singleMovie
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)

}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);
// App will always render Main and pass down all props
// connect passes data from our store down to whatever component needs it (instead of passing it down every level through props - like with React on its own)

export default App;
