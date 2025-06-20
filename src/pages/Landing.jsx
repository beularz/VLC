// import React from "react";
// import { motion } from "framer-motion";
// import vlcCone from "../assets/vlc-cone.png";
// import { Link } from "react-router-dom"; // ✅ Imported Link


// function Landing() {
//   return (
//     <div className="min-h-screen bg-white text-black font-sans px-4 md:px-12 py-8">
//       {/* Header */}
//       <motion.header
//         className="flex justify-between items-center mb-12"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="text-2xl font-bold">VLC Media Player</div>
//         <div className="space-x-4 hidden sm:flex">
//           {/* ✅ Navigation buttons */}
//           <Link to="/login" className="text-gray-700 hover:text-black">
//             Log in
//           </Link>
//           <Link
//             to="/signup"
//             className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
//           >
//             Get Started
//           </Link>
//         </div>
//       </motion.header>

//       {/* Hero Section */}
//       <motion.main
//         className="text-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.7 }}
//       >
//         <h1 className="text-3xl sm:text-4xl font-bold mb-4">
//           The Best Free Media Player
//         </h1>
//         <p className="text-gray-700 max-w-xl mx-auto mb-10 px-4">
//           VLC is a free and open source cross-platform multimedia player
//           that plays most multimedia files.
//         </p>

//         {/* VLC Cone */}
//         <motion.div
//           className="flex justify-center mb-12"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//         >
//           <img
//             src={vlcCone}
//             alt="VLC Cone"
//             className="w-24 h-24 md:w-32 md:h-32"
//           />
//         </motion.div>

//         {/* Feature List */}
//         <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto px-4">
//           {["Plays Any Format", "Cross-Platform", "No Ads", "Completely Free"].map(
//             (text, index) => (
//               <Feature key={index} text={text} delay={0.6 + index * 0.1} />
//             )
//           )}
//         </section>
//       </motion.main>

//       {/* Footer */}
//       <footer className="mt-20 text-center text-sm text-gray-500">
//         © 2025 VLC Clone. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// function Feature({ text, delay }) {
//   return (
//     <motion.div
//       className="flex items-center space-x-3 justify-center sm:justify-start"
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ delay, duration: 0.5 }}
//     >
//       <span className="text-orange-500 text-lg">✔</span>
//       <span className="text-gray-800">{text}</span>
//     </motion.div>
//   );
// }

// export default Landing;

import React from "react";
import { motion } from "framer-motion";
import vlcCone from "../assets/vlc-cone.png";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen bg-white text-black font-sans px-4 md:px-12 py-8">
      {/* Header */}
      <motion.header
        className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-12 gap-4 sm:gap-0"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-2xl font-bold">VLC Media Player</div>
        <div className="space-y-2 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row items-center">
          <Link to="/login" className="text-gray-700 hover:text-black">
            Log in
          </Link>
          <Link
            to="/signup"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >
            Get Started
          </Link>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.main
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          The Best Free Media Player
        </h1>
        <p className="text-gray-700 max-w-xl mx-auto mb-10 px-4">
          VLC is a free and open source cross-platform multimedia player
          that plays most multimedia files.
        </p>

        {/* VLC Cone */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <img
            src={vlcCone}
            alt="VLC Cone"
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </motion.div>

        {/* Feature List */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto px-4">
          {["Plays Any Format", "Cross-Platform", "No Ads", "Completely Free"].map(
            (text, index) => (
              <Feature key={index} text={text} delay={0.6 + index * 0.1} />
            )
          )}
        </section>
      </motion.main>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-500">
        © 2025 VLC Clone. All rights reserved.
      </footer>
    </div>
  );
}

function Feature({ text, delay }) {
  return (
    <motion.div
      className="flex items-center space-x-3 justify-center sm:justify-start"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <span className="text-orange-500 text-lg">✔</span>
      <span className="text-gray-800">{text}</span>
    </motion.div>
  );
}

export default Landing;
