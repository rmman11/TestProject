import React, { useState } from "react";
import axios from "axios";
import "./YouTube.css";

const YouTubeSearch = ({ onVideoSelect }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [videos, setVideos] = useState([]);

    const API_KEY = "AIzaSyDnizMQygIaA8Zj-34qO3dewvkjjdPT27s"; // Înlocuiește cu cheia ta API

    const searchYouTube = async () => {
        try {
          const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
              part: "snippet",
              maxResults: 10,
              q: searchTerm,
              key: API_KEY,
            },
          });
          setVideos(response.data.items);
        } catch (error) {
          console.error("Eroare la căutare:", error);
        }
      };
    
      const handleSearch = (e) => {
        e.preventDefault();
        searchYouTube();
      };
    
      return (
        <div className="youtube-search">
   <h1>YouTube Video Search</h1>
<div className="search-bar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Caută o melodie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
          </div>
          <div className="container1">
          <div className="video-list">
          
            {videos.map((video) => (
                   <div key={video.id.videoId} onClick={() => onVideoSelect(video)} className="video-item">
           
                <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                {video.snippet.title}
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.channelTitle}</p>
                </div>
                
            ))}
    

                        
                    </div>
              </div>
        </div>
      );
    };

export default YouTubeSearch;