import React, { Component } from "react";

class SearchBar extends Component {
  state = { searchTerm: "" };

  searchHandler = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  formSubmitHandler = (event) => {
      event.preventDefault();

    //   AIzaSyBsnkFf0H9AlyHojM1epDhPdWBUIOtjxIA
      
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.formSubmitHandler}>
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.searchHandler}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
