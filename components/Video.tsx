"use client";
import React, { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="h-[400px] md:h-[600px] lg:h-[calc(100dvh-85px)] w-full relative overflow-hidden">
      <video
        ref={videoRef}
        src="/hero-vid.mov"
        autoPlay
        loop
        muted={isMuted}
        className="w-full h-full object-cover"
      >
        <track
          src="/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
          default
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-5 right-5 flex gap-4">
        <button
          onClick={togglePlayPause}
          className="bg-white text-black px-4 py-2 rounded flex items-center justify-center hidden"
        >
          {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>
        <button
          onClick={handleMute}
          className="bg-white text-black px-4 py-2 rounded flex items-center justify-center"
        >
          {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Video;
