import React from 'react';
import Video from './vid.mp4';

const BackgroundVideo = () => {
  return (
    <video autoPlay loop={false} onEnded={()=> {console.log('ended play back')}} muted style={{position: 'fixed', width: '100%', left: '50%', top: '50%', height: '100%', objectFit: 'cover', transform: 'translate(-50%, -50%)', zIndex: '-1'}}>
        <source src={Video} type='video/mp4' />
    </video>
  );
}

export default BackgroundVideo;
