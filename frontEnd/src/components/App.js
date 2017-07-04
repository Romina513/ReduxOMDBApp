import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionCreators';
import Main from './Main.jsx';


function mapStateToProps(state) {
  return {
    requestMovies: {
      isFetching: state.isFetching,
      error: state.error
    },
    receiveMovies: {
      SingleMovie: state.SingleMovie,
      movies: state.movies,
    },
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)

}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);
// App will always render Main and pass down all props
// connect passes data from our store down to whatever component needs it (instead of passing it down every level through props - like with React on its own)

export default App;
