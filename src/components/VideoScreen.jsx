import vlcCone from "../assets/vlc-cone.png";

export default function VideoScreen({ videoRef, videoSrc }) {
  return (
    <div className="flex-1 bg-black flex items-center justify-center overflow-hidden p-2 sm:p-4">
      {videoSrc ? (
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-auto max-w-full max-h-full object-contain rounded-md"
          controls={false}
        />
      ) : (
        <img
          src={vlcCone}
          alt="VLC Cone"
          className="w-16 h-16 sm:w-24 sm:h-24 opacity-60"
        />
      )}
    </div>
  );
}
