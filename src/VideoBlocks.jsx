/*
import React from "react";
import "./VideoBlocks.css";

const VideoBlocks = () => (
  <>
    <div className="video-block real-video">
      <div className="title">Real</div>
      <iframe className="real video-type" allowFullScreen></iframe>
    </div>
    <div className="video-block animation-video">
      <div className="title">Animation</div>
      <video className="animation" controls></video>
    </div>
    <div className="video-block skeleton-video">
      <div className="title">Skeleton</div>
      <video className="skeleton" controls></video>
    </div>
  </>
);

export default VideoBlocks;
*/
import React from "react";
import "./VideoBlocks.css";

const VideoBlocks = () => (
  <div className="video-container">
    <div className="video-block real-video">
      <div className="title">Real</div>
      <iframe className="real video-type" allowFullScreen></iframe>
    </div>
    <div className="video-block animation-video">
      <div className="title">Animation</div>
      <video className="animation" controls></video>
    </div>
  </div>
);

export default VideoBlocks;