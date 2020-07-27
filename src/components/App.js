import React, { Component } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

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
        <SearchBar onFormSubmit={this.onTermSubmitHandler} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
