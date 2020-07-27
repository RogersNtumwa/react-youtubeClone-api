import React, { Component } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };
  }

  onTermSubmitHandler = async (searchTerm) => {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          maxResults: 10,
          key: "AIzaSyDCnoHE52VttyBA1LwuLBWl1dPhLl0Bn-4",
          q: searchTerm,
        },
      }
    );

    this.setState({
      videos: response.data.items,
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmitHandler} />i have{" "}
        {this.state.videos.length} videos
      </div>
    );
  }
}

export default App;
