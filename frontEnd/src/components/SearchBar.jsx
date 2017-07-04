import React from 'react';


const SearchBar = React.createClass({
  render() {
    return (
      <div className="search-bar">
        <form>
          <input type="text" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
});

export default SearchBar;
