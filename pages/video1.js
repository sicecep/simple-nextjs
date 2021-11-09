
// import Videojs from '../components/Video';

// const videoJsOptions = {
//     autoplay: true,
//     playbackRates: [0.5, 1, 1.25, 1.5, 2],
//     width: 720,
//     height: 300,
//     controls: false,
//     responsive: true,
//     fluid: true,
//     sources: [
//     //   {
//     //     src: 'https://stream.mux.com/aiyseVN01AqBmU01eWbv4mvWjZeKyfOIgMbGvYYYUuOEs.m3u8',
//     //     type: 'application/x-mpegURL',
//     //   },
//         {
//             src: '//vjs.zencdn.net/v/oceans.mp4',
//             type: 'video/mp4',
//         },
//     ],
//   };

// const handlePlayerReady = (player) => {
//     playerRef.current = player;
  
//     // you can handle player events here
//     player.on('waiting', () => {
//       console.log('player is waiting');
//     });
  
//     player.on('dispose', () => {
//       console.log('player will dispose');
//     });
//   };

// const video1 = () => {
//     return (
//         <div>
//     <Videojs {...videoJsOptions} onReady={handlePlayerReady} />
//   </div>
      
//     )
//   }
  
//   export default video1

import React, { Component } from 'react';
import Player from '../components/Video';

const sampleData = [
  {
    name: 'sample1',
    img: '/sample.png',
    url: 'url'
  },
  {
    name: 'sample2',
    img: '/sample.png',
    url: 'url'
  }
];
export default class Landing extends Component {
  render() {
    const video_url = 'https://stream.mux.com/D102eGs8Dr68O302QHk16eTjpnODu4ovpSWM00E7WMKbc00.m3u8';
    const video_type = 'application/x-mpegURL'
    const videoJsOptions = {
      autoplay: true,
      controls: true,
      sources: [
        {
          src: video_url,
          type: video_type
        }
      ]
    };

    return (
      <div>
        Sample Video :
        <Player {...videoJsOptions} endScreenData={sampleData} />
      </div>
    );
  }
}