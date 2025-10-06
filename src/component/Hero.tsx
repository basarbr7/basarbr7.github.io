"use client";

import Container from "@/layer/Container";
import { useEffect, useState } from "react";

export default function Hero() {
  const texts = ["Frontend Developer", "React Developer", "Next Enthusiast"];
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDeleting(true);

      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % texts.length);
        setIsDeleting(false);
      }, 500); 
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen ">
      
      {/* Content */}
      <div className="pt-40 z-10 flex items-center justify-center h-full">
        <Container>
          <div className=" px-6 sm:px-0 text-center">
            {/* Cursor typing style but full string */}
            <div className=" mb-4 flex items-center justify-center h-10">
              <span
                className={`text-2xl md:text-4xl font-extrabold inline-block whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out text-red-500`}
                style={{
                  width: isDeleting ? "0ch" : `${texts[textIndex].length}ch`,
                }}
              >
                {texts[textIndex]}
              </span>
               <span className="inline-block w-[2px] h-14 bg-gray-300"></span>
            </div>

            {/* Heading */}
            <h3 className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Hi, I am Basar
            </h3>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
              A passionate Frontend Developer who loves crafting
              <span className="text-blue-400 font-semibold"> modern </span>&
              <span className="text-purple-400 font-semibold"> user-friendly </span>
              web experiences using React, Tailwind CSS, and JavaScript.
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-6">
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 
                          text-white font-semibold uppercase tracking-wide shadow-lg 
                          hover:bg-blue-600 hover:scale-105 transition-all duration-300"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white 
                          font-semibold uppercase tracking-wide shadow-lg 
                          hover:opacity-90 hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Scroll Down */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
              <span className="text-3xl">⌄</span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
