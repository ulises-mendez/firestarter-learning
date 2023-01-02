import React from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import TitleBar from '@/Components/TitleBar'
import 'videojs-replayforward'

videojs.registerComponent('TitleBar', TitleBar);


export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const {options, onReady, title} = props;
  React.useEffect(() => {

    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      const player = playerRef.current = videojs(videoElement, options, () => {
        player.replayforward();
        onReady && onReady(player);
      });



    // You could update an existing player in the `else` block here
    // on prop change, for example:
    } else {
      const player = playerRef.current;
      
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, []);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current
    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };

  }, []);

  return (
    <div className='relative'>
    <div data-vjs-player className='relative'>
        <video ref={videoRef} className='video-js vjs-big-play-centered'>
            {props.children}
            <p className="vjs-no-js">
              To view this video please enable JavaScript, and consider upgrading to a
              web browser that
              <a href="https://videojs.com/html5-video-support/" target="_blank">
                supports HTML5 video
              </a>
            </p>
        </video>
    </div>
    </div>
  );
}

export default VideoJS;