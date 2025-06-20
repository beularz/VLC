import React, { useRef, useState } from "react";
import MenuBar from "./MenuBar";
import VideoScreen from "./VideoScreen";
import PlayerControls from "./PlayerControls";
import LogoutButton from "../components/LogoutButton";

export default function MediaPlayer() {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setVideoSrc(URL.createObjectURL(file));
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-black">
      {/* Top Bar with Logout */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-900 text-white">
        <h1 className="text-lg font-bold">VLC Media Player</h1>
        <LogoutButton />
      </div>

      {/* Menu and Player */}
      <MenuBar />
      <VideoScreen videoRef={videoRef} videoSrc={videoSrc} />
      <PlayerControls videoRef={videoRef} onFileSelect={handleFileChange} />
    </div>
  );
}
