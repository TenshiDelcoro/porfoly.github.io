import React from 'react'
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = (props) => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <h1>InkSoul </h1>
            <p>Ilustrador - Animador  </p>
        </div>
  );
};

export default Cover

