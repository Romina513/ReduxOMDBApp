import React from 'react';


const SearchBar = React.createClass({
  getInput(e) {
    e.preventDefault();
    console.log(this.refs.input.value);
    this.props.fetch(this.refs.input.value)
  },
  render() {
    return (
      <div className="search-bar">
        <form>
          <input type="text" placeholder="Search for a movie" ref="input" />
          <input type="submit" value="Submit" onClick={this.getInput} />
        </form>
      </div>
    )
  }
});

export default SearchBar;
