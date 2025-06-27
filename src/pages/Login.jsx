// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import vlcCone from "../assets/vlc-cone.png";
// import { Eye, EyeOff } from "lucide-react";
// import { auth, provider } from "../firebase";
// import { signInWithPopup } from "firebase/auth";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await fetch("https://vlc-backend.onrender.com/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         localStorage.setItem("token", data.accessToken || data.token); // Updated to handle both
//         alert("Logged in successfully!");
//         navigate("/player");
//       } else {
//         setError(data.message || "Login failed. Check your credentials.");
//       }
//     } catch (err) {
//       setError("Server error. Please try again later.");
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const idToken = await result.user.getIdToken(); // Firebase ID token

//       const res = await fetch("https://vlc-backend.onrender.com/auth/google", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ token: idToken }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         localStorage.setItem("token", data.accessToken || data.token); // Updated to support accessToken
//         alert("Logged in with Google!");
//         navigate("/player");
//       } else {
//         setError(data.message || "Google login failed.");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Google sign-in failed. Please try again.");
//     }
//   };

//   return (
//     <div className="h-screen flex bg-white font-sans">
//       <div className="flex-1 flex flex-col justify-center px-10 sm:px-20">
//         <Link to="/">
//           <img src={vlcCone} alt="VLC Logo" className="w-10 h-10 mb-6 cursor-pointer" />
//         </Link>
//         <h2 className="text-2xl font-semibold mb-6">Log in</h2>

//         <button
//           className="flex items-center justify-center w-full border rounded-md py-2 mb-3 text-sm font-medium hover:bg-gray-50"
//           onClick={handleGoogleLogin}
//         >
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
//             </div>
//             <div className="text-right mt-1">
//               <Link to="/reset-password" className="text-sm text-blue-600 hover:underline">
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
//           Don’t have an account?{" "}
//           <Link to="/signup" className="text-blue-500 hover:underline">
//             Create your account
//           </Link>
//         </div>
//       </div>

//       <div className="hidden md:flex w-1/2 bg-gradient-to-b from-[#fdfcfb] to-[#fcdba3] items-center justify-center">
//         <img src={vlcCone} alt="VLC Cone Large" className="w-60 h-60 opacity-80" />
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import vlcCone from "../assets/vlc-cone.png";
// import { Eye, EyeOff } from "lucide-react";
// import { auth, provider } from "../firebase";
// import { signInWithPopup } from "firebase/auth";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const res = await fetch("https://vlc-backend.onrender.com/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         localStorage.setItem("token", data.accessToken || data.token);
//         alert("Logged in successfully!");
//         navigate("/player");
//       } else {
//         setError(data.message || "Login failed. Check your credentials.");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Server error. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const idToken = await result.user.getIdToken();

//       const res = await fetch("https://vlc-backend.onrender.com/auth/google", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ token: idToken }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         localStorage.setItem("token", data.accessToken || data.token);
//         alert("Logged in with Google!");
//         navigate("/player");
//       } else {
//         setError(data.message || "Google login failed.");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Google sign-in failed. Please try again.");
//     }
//   };

//   return (
//     <div className="h-screen flex bg-white font-sans">
//       <div className="flex-1 flex flex-col justify-center px-10 sm:px-20">
//         <Link to="/">
//           <img src={vlcCone} alt="VLC Logo" className="w-10 h-10 mb-6 cursor-pointer" />
//         </Link>
//         <h2 className="text-2xl font-semibold mb-6">Log in</h2>

//         <button
//           className="flex items-center justify-center w-full border rounded-md py-2 mb-3 text-sm font-medium hover:bg-gray-50"
//           onClick={handleGoogleLogin}
//         >
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
//             </div>
//             <div className="text-right mt-1">
//               <Link to="/reset-password" className="text-sm text-blue-600 hover:underline">
//                 Forgot password?
//               </Link>
//             </div>
//           </div>

//           {error && <p className="text-red-600 text-sm">{error}</p>}

//           <button 
//             type="submit" 
//             className={`w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
//             disabled={loading}
//           >
//             {loading ? 'Logging in...' : 'Log in'}
//           </button>
//         </form>

//         <div className="text-sm text-center mt-4">
//           Don’t have an account?{" "}
//           <Link to="/signup" className="text-blue-500 hover:underline">
//             Create your account
//           </Link>
//         </div>
//       </div>

//       <div className="hidden md:flex w-1/2 bg-gradient-to-b from-[#fdfcfb] to-[#fcdba3] items-center justify-center">
//         <img src={vlcCone} alt="VLC Cone Large" className="w-60 h-60 opacity-80" />
//       </div>
//     </div>
//   );
// }

// Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import vlcCone from "../assets/vlc-cone.png";
import { Eye, EyeOff } from "lucide-react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://vlc-backend.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        alert("Logged in successfully!");
        navigate("/player");
      } else {
        setError(data.message || "Login failed. Check your credentials.");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      const res = await fetch("https://vlc-backend.onrender.com/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: idToken }),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        alert("Logged in with Google!");
        navigate("/player");
      } else {
        setError(data.message || "Google login failed.");
      }
    } catch (err) {
      console.error(err);
      setError("Google sign-in failed. Please try again.");
    }
  };

  return (
    <div className="h-screen flex bg-white font-sans">
      <div className="flex-1 flex flex-col justify-center px-10 sm:px-20">
        <Link to="/">
          <img src={vlcCone} alt="VLC Logo" className="w-10 h-10 mb-6 cursor-pointer" />
        </Link>
        <h2 className="text-2xl font-semibold mb-6">Log in</h2>

        <button
          className="flex items-center justify-center w-full border rounded-md py-2 mb-3 text-sm font-medium hover:bg-gray-50"
          onClick={handleGoogleLogin}
        >
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
              <Link to="/reset-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button 
            type="submit" 
            className={`w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>

        <div className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Create your account
          </Link>
        </div>
      </div>

      <div className="hidden md:flex w-1/2 bg-gradient-to-b from-[#fdfcfb] to-[#fcdba3] items-center justify-center">
        <img src={vlcCone} alt="VLC Cone Large" className="w-60 h-60 opacity-80" />
      </div>
    </div>
  );
}
