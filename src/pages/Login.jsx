// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import vlcCone from "../assets/vlc-cone.png";
// import { Eye, EyeOff } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); // <-- NEW

  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       setError("Please enter both email and password.");
//     } else {
//       setError("");
//       alert("Logged in successfully!");
//       navigate("/player"); // <-- redirect to VLC player
//     }
//   };

//   return (
//     <div className="h-screen flex bg-white font-sans">
//       {/* Left: Login Form */}
//       <div className="flex-1 flex flex-col justify-center px-10 sm:px-20">
//         <Link to="/">
//           <img src={vlcCone} alt="VLC Logo" className="w-10 h-10 mb-6 cursor-pointer" />
//         </Link>
//         <h2 className="text-2xl font-semibold mb-6">Log in</h2>

//         <button className="flex items-center justify-center w-full border rounded-md py-2 mb-4 text-sm font-medium hover:bg-gray-50">
//           <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M21.805 10.023h-9.6v3.956h5.708c-.248 1.37-1.186 2.526-2.53 3.224v2.68h4.09c2.396-2.204 3.832-5.457 3.832-9.32 0-.64-.06-1.262-.177-1.865h-.323z" fill="#4285F4" />
//             <path d="M12.205 22c2.67 0 4.914-.888 6.552-2.402l-4.09-2.68c-1.137.762-2.59 1.215-4.12 1.215-3.168 0-5.855-2.14-6.82-5.01H-.01v3.14C1.623 19.786 6.53 22 12.204 22z" fill="#34A853" />
//             <path d="M5.385 13.123A7.262 7.262 0 0 1 4.86 11c0-.739.13-1.453.36-2.123V5.736H-.01C-.6 7.014-.94 8.47-.94 10c0 1.53.34 2.986.93 4.264l5.395-1.14z" fill="#FBBC05" />
//             <path d="M12.205 4.34c1.45 0 2.755.498 3.786 1.478l2.84-2.84C16.996 1.317 14.76.26 12.205.26 6.53.26 1.623 2.474-.01 5.736l5.27 3.14c.965-2.87 3.652-5.01 6.945-5.01z" fill="#EA4335" />
//           </svg>
//           Continue with Google
//         </button>

//         <div className="text-center text-sm text-gray-500 mb-4">or</div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 required
//               />
//               <span
//                 className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOff /> : <Eye />}
//               </span> 
//               {/* Forgot Password Link */}
//               <Link
//                 to="/reset-password"
//                 className="w-fit self-center text-center text-xs text-muted-foreground underline"
//               >
//                 Forgot password?
//               </Link>
//             </div>
//           </div>
//           {error && <p className="text-red-600 text-sm">{error}</p>}

//           <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
//             Log in
//           </button>
//         </form>

//         <div className="text-sm text-center mt-4">
//           Don't have an account?{" "}
//           <Link to="/signup" className="text-blue-500 hover:underline">Create your account</Link>
//         </div>
//       </div>

//       {/* Right: VLC Cone Visual */}
//       <div className="hidden md:flex w-1/2 bg-gradient-to-b from-[#fdfcfb] to-[#fcdba3] items-center justify-center">
//         <img src={vlcCone} alt="VLC Cone Large" className="w-60 h-60 opacity-80" />
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import vlcCone from "../assets/vlc-cone.png";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
    } else {
      setError("");
      alert("Logged in successfully!");
      navigate("/player");
    }
  };

  return (
    <div className="h-screen flex bg-white font-sans">
      <div className="flex-1 flex flex-col justify-center px-10 sm:px-20">
        <Link to="/">
          <img src={vlcCone} alt="VLC Logo" className="w-10 h-10 mb-6 cursor-pointer" />
        </Link>
        <h2 className="text-2xl font-semibold mb-6">Log in</h2>

        {/* Social login buttons */}
        <button className="flex items-center justify-center w-full border rounded-md py-2 mb-3 text-sm font-medium hover:bg-gray-50">
          Continue with Google
        </button>
        <div className="text-center text-sm text-gray-500 mb-4">or</div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          {/* <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 pr-20"
                required
              />
              <span
                className="absolute inset-y-0 right-10 flex items-center cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </span>
              {/* Forgot Password Link */}
              {/* <Link
                to="/reset-password"
                className="absolute right-2 text-sm text-blue-600 hover:underline top-1/2 transform -translate-y-1/2"
              >
                Forgot password?
              </Link>
            </div>
          </div>  */}
          <div>
  <label className="block text-sm font-medium mb-1">Password</label>
  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      required
    />
    <span
      className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <EyeOff /> : <Eye />}
    </span>
  </div>
  <div className="text-right mt-1">
    <Link
      to="/reset-password"
      className="text-sm text-blue-600 hover:underline"
    >
      Forgot password?
    </Link>
  </div>
</div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
            Log in
          </button>
        </form>

        <div className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">Create your account</Link>
        </div>
      </div>

      <div className="hidden md:flex w-1/2 bg-gradient-to-b from-[#fdfcfb] to-[#fcdba3] items-center justify-center">
        <img src={vlcCone} alt="VLC Cone Large" className="w-60 h-60 opacity-80" />
      </div>
    </div>
  );
}

