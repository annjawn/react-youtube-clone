import React from 'react';
const VideoListItem = (props) => {
  const video = props.video;
  const onVideoSelect = props.onVideoSelect; //the click callback
  const imgURL = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item" onClick={ () => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgURL} />
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
          <div className="media-heading-desc">
            {video.snippet.description}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
