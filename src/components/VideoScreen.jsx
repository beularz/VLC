// import vlcCone from "../assets/vlc-cone.png";

// export default function VideoScreen({ videoRef, videoSrc }) {
//   return (
//     <div className="flex-1 bg-black flex items-center justify-center">
//       {videoSrc ? (
//         <video
//           ref={videoRef}
//           src={videoSrc}
//           className="max-h-full max-w-full"
//           controls={false}
//         />
//       ) : (
//         <img src={vlcCone} alt="VLC Cone" className="w-24 h-24 opacity-60" />
//       )}
//     </div>
//   );
// }

// import vlcCone from "../assets/vlc-cone.png";

// export default function VideoScreen({ videoRef, videoSrc }) {
//   return (
//     <div className="flex-1 bg-black flex items-center justify-center p-2 sm:p-4">
//       {videoSrc ? (
//         <video
//           ref={videoRef}
//           src={videoSrc}
//           className="w-full max-w-full max-h-full sm:max-h-[80vh] sm:max-w-[90vw] rounded-md"
//           controls={false}
//         />
//       ) : (
//         <img
//           src={vlcCone}
//           alt="VLC Cone"
//           className="w-20 h-20 sm:w-24 sm:h-24 opacity-60"
//         />
//       )}
//     </div>
//   );
// }

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
