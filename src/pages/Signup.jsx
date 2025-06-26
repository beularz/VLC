import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import vlcCone from "../assets/vlc-cone.png";
import { Eye, EyeOff } from "lucide-react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

export default function Signup() {
  const [fullName, setFullName] = useState(""); // Full Name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const checkStrength = (pass) => {
    let strength = "Weak";
    if (
      pass.length >= 8 &&
      /[A-Z]/.test(pass) &&
      /[0-9]/.test(pass) &&
      /[^A-Za-z0-9]/.test(pass)
    ) {
      strength = "Strong";
    } else if (pass.length >= 6) {
      strength = "Medium";
    }
    return strength;
  };

  const handlePasswordChange = (e) => {
    const newPass = e.target.value;
    setPassword(newPass);
    setPasswordStrength(checkStrength(newPass));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("https://vlc-backend.onrender.com/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account created successfully!");
        navigate("/login");
      } else {
        setError(data.message || "Signup failed.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      const res = await fetch("https://vlc-backend.onrender.com/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: idToken }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.accessToken || data.token);
        localStorage.setItem("user", JSON.stringify(data.user)); // save full name
        alert("Signed up with Google!");
        navigate("/player");
      } else {
        setError(data.message || "Google signup failed.");
      }
    } catch (err) {
      console.error(err);
      setError("Google sign-up failed. Try again.");
    }
  };

  return (
    <div className="h-screen flex bg-white font-sans">
      {/* Left: Signup Form */}
      <div className="flex-1 flex flex-col justify-center px-10 sm:px-20">
        <Link to="/login">
          <img src={vlcCone} alt="VLC Logo" className="w-10 h-10 mb-6 cursor-pointer" />
        </Link>
        <h2 className="text-2xl font-semibold mb-6">Create your account</h2>

        <button
          className="flex items-center justify-center w-full border rounded-md py-2 mb-4 text-sm font-medium hover:bg-gray-50"
          onClick={handleGoogleSignup}
        >
          Continue with Google
        </button>

        <div className="text-center text-sm text-gray-500 mb-4">or</div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
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
                onChange={handlePasswordChange}
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
            <p
              className={`text-sm mt-1 ${
                passwordStrength === "Strong"
                  ? "text-green-600"
                  : passwordStrength === "Medium"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              Strength: {passwordStrength}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <div className="flex items-start space-x-2">
            <input type="checkbox" id="terms" className="mt-1" required />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the{" "}
              <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and{" "}
              <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Create your account
          </button>
        </form>

        <div className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </div>
      </div>

      {/* Right: VLC Cone Visual */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-b from-[#fdfcfb] to-[#fcdba3] items-center justify-center">
        <img src={vlcCone} alt="VLC Cone Large" className="w-60 h-60 opacity-80" />
      </div>
    </div>
  );
}
