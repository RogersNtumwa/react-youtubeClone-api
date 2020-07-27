import React, { Component } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDeatils from "./VideoDetails";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }

  selectedVideoHandler = (video) => {
    // console.log("from the app", video);
    this.setState({
      selectedVideo: video,
    });
  };

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
      selectedVideo: response.data.items[0],
    });
  };

  componentDidMount() {
    this.onTermSubmitHandler("cars");
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmitHandler} />
        <div className=" ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDeatils video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.selectedVideoHandler}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
