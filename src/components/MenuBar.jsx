import React, { useState } from "react";

export default function MenuBar() {
  const items = ["Media", "Playback", "Audio", "Video", "Subtitle", "Tools", "View", "Help"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 border-b text-sm">
      {/* Top bar with menu toggle on mobile */}
      <div className="flex justify-between items-center px-4 py-2 sm:py-2 sm:px-6">
        {/* <div className="font-semibold">Menu</div> */}
        <button
          className="sm:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menu items */}
      <div
        className={`flex-col sm:flex-row sm:flex space-y-2 sm:space-y-0 sm:space-x-6 px-4 pb-2 sm:pb-0 ${
          isOpen ? "flex" : "hidden sm:flex"
        }`}
      >
        {items.map((item) => (
          <span key={item} className="cursor-pointer hover:underline text-gray-800">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
