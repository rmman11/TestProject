import React, { useState } from "react";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';

import useDocumentTitle from "../components/useDocumentTitle";
import YouTubeSearch from  "../components/music/YoutubeSearch"
import YouTubePlayer from "../components/music/YoutubePlayer";

const Features = () => {
  useDocumentTitle("Features")

  const [selectedVideo, setSelectedVideo] = useState(null);
  return (
 <Container>
<MDBRow>
<YouTubeSearch onVideoSelect={(video) => setSelectedVideo(video)} />
<YouTubePlayer videoId={selectedVideo?.id?.videoId} />
</MDBRow>
</Container>

    );



  };
  
  export default Features;