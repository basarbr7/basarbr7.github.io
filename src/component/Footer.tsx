"use client";

import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="text-center">
        <div className="my-container flex flex-col md:flex-row justify-between items-center">
          {/* Left side: Logo / Name */}
          <div className="text-xl text-gray-300 font-bold mb-4 md:mb-0">
            <span className="text-blue-400">Basar</span> | Front-End Developer
          </div>

          {/* Right side: Social Links or Nav */}
          <div className="space-y-2 text-sm text-gray-500 transition">
            <span>Or reach me on:</span>
            <div className="flex justify-center mt-2 space-x-4 text-base">
              <a
                href="https://github.com/basarbr7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaGithub className="inline mr-1" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/basarbr7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedinIn className="inline mr-1" /> LinkedIn
              </a>
              <a
                href="mailto:basarbr7@gmail.com"
                className="hover:text-gray-400"
              >
                <FaEnvelope className="inline mr-1" /> Email
              </a>
            </div>
          </div>
        </div>

        <hr className="border-[rgba(255,255,255,0.08)] my-7" />

        <div className="text-gray-400">&copy; 2024 Basar. All rights reserved.</div>
      </div>
    </footer>
  );
}
