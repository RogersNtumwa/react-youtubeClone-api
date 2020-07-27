import React from "react";
import "./videoItem.css";

const VideoItem = ({ video }) => {
  return (
    <div className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />

      <div class="content">
        <adiv className="header"> {video.snippet.title}</adiv>
        <div className="description">Updated 10 mins ago</div>
      </div>
    </div>
  );
};

export default VideoItem;
