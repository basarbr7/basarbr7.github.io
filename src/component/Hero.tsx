"use client";

import Container from "@/layer/Container";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import { FaNode, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiRedux } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { archivo } from "@/fonts";

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

  const handleScrollToProjects = () => {
    const section = document.getElementById("project");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToAbout = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className=" bg-[url('/simple.jpg')] bg-cover bg-center min-h-screen  text-white overflow-hidden relative select-none"
    >
      {/* overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black/45 "></div>

      {/* Content */}
      
      <Container className="flex justify-between gap-5 items-center pt-40 pb-28  relative  z-10">
        {/* Left side content */}
        <div className="w-full max-w-[1120px] mx-auto">
          {/* Typing & marquee section */}
          <div className="max-w-full mx-auto md:h-10 flex flex-col  md:flex-row items-center justify-center  md:justify-between ">

            {/* Typing Text */}
            <div className={` flex items-center justify-center md:justify-start max-w-[550px] md:ml-14 xl:ml-36  relative ${archivo.className}`}
            >
              <span
                className="text-2xl md:text-3xl xl:text-4xl font-extrabold inline-block whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out text-white"
                style={{
                  width: isDeleting ? "0ch" : `${texts[textIndex].length}ch`,
                }}
              >
                {texts[textIndex]}
              </span>
              <span className="inline-block w-[2px] h-14 bg-gray-300"></span>
            </div>

            {/* Horizontal marquee */}
            <div className="  overflow-hidden max-w-[550px] text-white flex items-center">
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
              
              user-friendly
            </span>
            web experiences using React, Tailwind CSS, and JavaScript.
          </p>

          {/* Buttons */}
          <div className="flex justify-center text-center gap-6">
            <button
              onClick={handleScrollToProjects}
              className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold uppercase tracking-wide shadow-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300"
            >
              View My Projects
            </button>
            <button
              onClick={handleScrollToContact}
              className="hidden sm:flex px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold uppercase tracking-wide shadow-lg hover:opacity-90 hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right-side vertical marquee */}
        <div className="hidden h-[400px] w-10 overflow-hidden md:flex flex-col items-center justify-center">
          <div className="animate-vertical-marquee space-y-10 text-white text-3xl font-semibold  rotate-180">
            <span className="block rotate-90 text-[#32a2b6dd]">
              <FaReact />
            </span>
            <span className="block rotate-90 text-black">
              <RiNextjsFill />
            </span>
            <span className="block rotate-90 text-[#5ecadd]">
              <RiTailwindCssFill />
            </span>
            <span className="block rotate-90 text-[#8f37d2]">
              <SiRedux />
            </span>
            <span className="block rotate-90 text-yellow-500">
              <DiJavascript />
            </span>
            <span className="block rotate-90 text-4xl text-green-400">
              <FaNode />
            </span>
            <span className="block rotate-90 text-green-600">
              <SiMongodb />
            </span>
          </div>
        </div>

        {/* figma */}
      <div className="hidden sm:flex absolute top-1/2 left-48 -translate-y-1/2 ">
        <img
          src="/figma.svg"
          alt="image"
          className="w-12 h-12 animate-figma "
        />
      </div>

      {/* Scroll Down */}
      <div onClick={handleScrollToAbout} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <span  className="text-3xl">⌄</span>
      </div>
      </Container>

    </div>
  );
}
