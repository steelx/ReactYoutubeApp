import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    let imageUrl = video.snippet.thumbnails.default.url;
    let title = video.snippet.title;

    return (
        <li onClick={ () => onVideoSelect(video) } className="list-group-item">
            <div className="video-list media">

                <div className="media-left">
                    <img className="media-object" src={imageUrl} alt={title} />
                </div>

                <div className="media-body">
                    {title}
                </div>

            </div>
        </li>
    );
};

export default VideoListItem;