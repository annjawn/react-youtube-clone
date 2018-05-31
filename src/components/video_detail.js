import React from 'react';
import { Card } from 'semantic-ui-react'

const VideoDetail = (props) => {
  if(!props.video) {
    return <div>Loading....</div>;
  }

  const video = props.video;

  const items = [
    {
      header: video.snippet.title,
      description: video.snippet.description,
      meta: `Channel: ${video.snippet.channelTitle}`,
      fluid: true
    }
  ]

  const videoID = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoID}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <Card.Group items={items} />
    </div>
  );
};

export default VideoDetail;
