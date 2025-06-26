import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import vlcCone from "../assets/vlc-cone.png"; // use your VLC cone image

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await fetch("https://vlc-backend.onrender.com/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message || "A password reset link has been sent to your email.");
        setEmail("");
      } else {
        setError(data.message || "Failed to send reset link.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="h-screen flex font-sans bg-white">
      {/* Left Panel: Form */}
      <div className="flex-1 flex flex-col justify-center px-10 sm:px-24">
        {/* Logo - clickable to /login */}
        <img
          src={vlcCone}
          alt="VLC Logo"
          className="w-10 h-10 mb-6 cursor-pointer"
          onClick={() => navigate("/login")}
        />

        <h2 className="text-2xl font-semibold mb-2">Reset your password</h2>
        <p className="text-sm text-gray-600 mb-6">
          Enter your email address and we’ll send you a link to reset your password.
        </p>

        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-medium py-2 rounded-md hover:bg-gray-800 transition"
          >
            Send reset link
          </button>
        </form>

        {message && <p className="text-green-600 text-sm mt-4">{message}</p>}
        {error && <p className="text-red-600 text-sm mt-4">{error}</p>}
      </div>

      {/* Right Panel: VLC Cone Visual */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-b from-[#fdfcfb] to-[#fcdba3] items-center justify-center">
        <img src={vlcCone} alt="VLC Cone Large" className="w-60 h-60 opacity-80" />
      </div>
    </div>
  );
}
