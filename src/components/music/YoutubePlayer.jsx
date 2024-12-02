import React from "react";
import YouTube from "react-youtube";

const YouTubePlayer = ({ videoId }) => {
  const opts = {
    height: "390",
    width: "240",
    playerVars: {
      autoplay: 1,
    },
  };

  return videoId ? (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  ) : (
    <div>Selectează un video pentru a reda!</div>
  );
};

export default YouTubePlayer;