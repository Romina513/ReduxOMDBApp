import React from 'react';

import SingleMovie from '../components/SingleMovie.jsx';

const Single = React.createClass({
  componentWillMount() {
    this.props.fetchSingleMovie(this.props.params.postId);
  },
  render() {
    return (
      <div className="single-movie">
        <SingleMovie movieProp={this.props.singleMovie} />
      </div>
    )
  }
});

export default Single;
/*
*/
