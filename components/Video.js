// taken from https://github.com/videojs/video.js/blob/master/docs/guides/react.md
import React, { Component } from 'react';
import videojs from "video.js";
import '../node_modules/video.js/dist/video-js.css';

export default class Player extends Component {
    constructor() {
        super();
            this.state = {
        };
    }
      
  componentDidMount() {
    // instantiate video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log("onPlayerReady", this);
    });

    if (this.videoNode) {
      this.videoNode.setAttribute("webkit-playsinline", true);
      this.videoNode.setAttribute("playsinline", true);
    }
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
//   render() {
//     return (
//       <div data-vjs-player>
//         <video ref={node => (this.videoNode = node)} className="video-js" />
//       </div>
//     );
//   }
render() {
    return (
      <div className="video-content">
        <video
          ref={node => (this.videoNode = node)}
          className="video-js"
          crossOrigin="anonymous"
        />
        {this.state.isEnd ? (
          <div className="end-screen-container">
            <div>
              <h5 className="end-screen-title">Sample End screen...</h5>
              <div className="end-screen-items">
                {this.props.endScreenData.map(item => {
                  return (
                    <div className="end-screen-item">
                      <img
                        src={require('../public/sample.png')}
                        alt={item.name}
                      />
                      <p>{item.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}
