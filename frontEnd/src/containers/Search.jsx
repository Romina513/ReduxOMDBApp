import React from 'react';

import { history } from '../redux/store';

import SearchBar from '../components/SearchBar.jsx';
import MovieGrid from '../components/MovieGrid.jsx';

const Search = React.createClass({
  fetch: function(input) {
    this.props.fetchMovie(input)
    history.push('/searchresults');
  },
  render() {
    return (
      <div className="search">
        <SearchBar fetch={this.fetch} />
      </div>
    )
  }
});

export default Search;
