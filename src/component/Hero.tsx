"use client";

import Container from "@/layer/Container";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";

export default function Hero() {
  const texts = ["Frontend Developer", "React Developer", "Next Enthusiast"];
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     setMousePosition({
  //       x: (e.clientX / window.innerWidth - 0.5) * 20,
  //       y: (e.clientY / window.innerHeight - 0.5) * 20,
  //     });
  //   };
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  return (
    <div className=" bg-[url('/simple.jpg')] bg-cover bg-center min-h-screen  text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black/45 "></div>
      {/* Content */}
      <div className="relative pt-40 z-10 ">
        <Container className="flex justify-between items-center">
          {/* Left side content */}
          <div className="sm:px-0 w-[1120px]">
            {/* Typing & marquee section */}
            <div className="max-w-4xl mx-auto h-10 flex items-center justify-between">
              {/* Typing Text */}
              <div className="flex items-center max-w-1/2 ml-40  relative">
                <span
                  className="text-2xl md:text-4xl font-extrabold inline-block whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out text-white"
                  style={{
                    width: isDeleting ? "0ch" : `${texts[textIndex].length}ch`,
                  }}
                >
                  {texts[textIndex]}
                </span>
                <span className="inline-block w-[2px] h-14 bg-gray-300"></span>
              </div>

              {/* Horizontal marquee */}
              <div className="overflow-hidden max-w-1/2 text-white flex items-center">
                <div className="animate-marquee whitespace-nowrap">
                  <span className=" text-xl">
                    🚀 Hello — Welcome to my site!
                  </span>
                </div>
              </div>
            </div>

            {/* 3D Text */}
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[0, 5, 5]} intensity={1} />
              <Text
                position={[0, 0, 0]}
                rotation={[0, 0.4, 0]}
                fontSize={1.8}
                color="#00f0ff"
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.02}
                outlineColor="#ffffff"
              >
                Hi, I am Basar
              </Text>
              <OrbitControls enableZoom={false} enableRotate={false} />
            </Canvas>

            {/* Paragraph */}
            <p className="text-base text-center sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
              A passionate Frontend Developer who loves crafting
              <span className="text-blue-400 font-semibold"> modern </span>&
              <span className="text-purple-400 font-semibold">
                {" "}
                user-friendly{" "}
              </span>
              web experiences using React, Tailwind CSS, and JavaScript.
            </p>

            {/* Buttons */}
            <div className="flex justify-center text-center gap-6">
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
          </div>

          {/* Right-side vertical moving text */}
          <div className="relative h-[400px] w-10 overflow-hidden flex flex-col items-center justify-center">
            <div className="animate-vertical-marquee space-y-10 text-white font-semibold text-sm rotate-180">
              <span className="block rotate-90">APP</span>
              <span className="block rotate-90">WEBSITE</span>
              <span className="block rotate-90">UX/UI</span>
              <span className="block rotate-90">SAAS</span>
              <span className="block rotate-90">SOFTWARE</span>
            </div>
          </div>
        </Container>

        {/* Scroll Down */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <span className="text-3xl">⌄</span>
        </div>
      </div>
    </div>
  );
}
