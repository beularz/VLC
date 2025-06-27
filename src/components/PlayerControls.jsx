import { useState, useEffect } from "react";

export default function PlayerControls({ videoRef, onFileSelect }) {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const updateProgress = () => {
      setProgress((video.currentTime / video.duration) * 100 || 0);
    };
    if (video) video.addEventListener("timeupdate", updateProgress);
    return () => video?.removeEventListener("timeupdate", updateProgress);
  }, [videoRef]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const stopVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setPlaying(false);
  };

  const handleVolume = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    videoRef.current.volume = vol;
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video) return;
    const newTime = (e.target.value / 100) * video.duration;
    video.currentTime = newTime;
    setProgress(e.target.value);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (!document.fullscreenElement) {
      video.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const playRandom = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      const randomTime = Math.random() * video.duration;
      video.currentTime = randomTime;
    }
  };

  const playPrevious = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = Math.max(video.currentTime - 10, 0);
    }
  };

  const playNext = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = Math.min(video.currentTime + 10, video.duration);
    }
  };

  return (
    <div className="bg-gray-100 border-t px-3 py-2 flex flex-col text-sm">
      {/* Seek bar */}
      <input
        type="range"
        value={progress}
        onChange={handleSeek}
        className="w-full mb-2 accent-orange-500"
      />

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 sm:space-x-4">
        {/* Playback buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={togglePlay} className="px-3 py-1 border rounded bg-white">
            {playing ? "Pause" : "Play"}
          </button>
          <button onClick={stopVideo} className="px-3 py-1 border rounded bg-white">
            Stop
          </button>
          <button onClick={playPrevious} className="px-3 py-1 border rounded bg-white">
            ⏮ Prev
          </button>
          <button onClick={playNext} className="px-3 py-1 border rounded bg-white">
            ⏭ Next
          </button>
          <button onClick={playRandom} className="px-3 py-1 border rounded bg-white">
            🔀 Shuffle
          </button>
          <button onClick={toggleFullscreen} className="px-3 py-1 border rounded bg-white">
            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </button>
        </div>

        {/* File select + Volume */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <input type="file" accept="video/*" onChange={onFileSelect} />
          <div className="flex items-center space-x-2">
            <span>🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolume}
              className="accent-orange-500"
            />
            <span>{Math.round(volume * 100)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
