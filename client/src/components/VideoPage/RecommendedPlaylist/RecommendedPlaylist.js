import '../RecommendedVideo/RecommendedVideo.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class RecommendedPlaylist extends Component {
    render() {
        return (
            <div className='video_box'>
                <Link to="/playlist/4">
                    <div className="playlist-image-container">
                        <div className="playlist-image">
                            <div>
                                <p>{this.props.videoCount}</p>
                                <p><i className="ion-ios-play" /></p>
                            </div>
                        </div>
                        <img className='video_box_img' src={'/images/thumbnails/' + this.props.videoId + '.png'} />
                    </div>
                    <h5 className='video_box_title'>{this.props.name}</h5>
                    <h6 className='video_box_channel'>{this.props.owner}</h6>
                </Link>
            </div>
        );
    }
}

export default RecommendedPlaylist;
