import { useRef, useState } from "react";
import "./VideoPlayer.css";

function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="video-wrapper">
      <video
        ref={videoRef}
        className="video"
        src={src}
        onClick={handlePlay}
      />
      {!isPlaying && (
        <button className="play-button" onClick={handlePlay}>
          ▶
        </button>
      )}
    </div>
  );
}

export default VideoPlayer;
