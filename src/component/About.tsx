"use client"

import Container from "@/layer/Container";
import { Facebook, Github, LinkedinIcon, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { archivo } from "@/fonts";
import Title from "@/layer/Title";
import { useState } from "react";



export default function About() {
  const [isHovered, setIsHovered] = useState(false);

 
  return (
    <div  id="about" className="relative px-6 py-20 bg-[#ffffff] dark:bg-black text-white border-b border-gray-200 dark:border-gray-600">
      <Container>
        {/* heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title sparkClassName="text-black!" className="text-black!">
            Introduction
          </Title>

          <h2 className="text-2xl md:text-4xl font-black mb-3 leading-tight">
            <span
              className={`bg-gradient-to-r from-cyan-600 to-purple-400  bg-clip-text text-transparent animate-gradient ${archivo.className}`}
            >
              About Me
            </span>
          </h2>

          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Here you will find more information about me and what I do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-10 items-center justify-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative lg:px-24 py-5 md:col-span-5 flex flex-col justify-center items-center text-center overflow-hidden "
          >
            {/* Three.js Animated Background */}
            {/* <div className="bg-gray-400 relative h-96 w-96 rounded-full overflow-hidden">
              <div ref={canvasContainerRef} className="absolute inset-0" />
              
              
            </div> */}
            {/* <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="" >
                
              </div>
            </div> */}

           <div 
              className="relative w-64 h-80 z-20"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Left Image */}
              <div 
                className="absolute w-full h-full transition-all duration-700 ease-out"
                style={{ 
                  zIndex: 1,
                  transformOrigin: 'bottom center',
                  transform: isHovered 
                    ? 'translateX(-30px) translateY(-15px) rotate(-10deg)' 
                    : 'translateX(0) translateY(0) rotate(0)',
                  opacity: isHovered ? 1 : 0
                }}
              >
                  <img
                  src="/mypic-full.jpg"
                  alt="About Me"
                  className="object-cover shadow-lg w-full h-full "
                  />
              </div>

              {/* Right Image  */}
              <div 
                className="absolute w-full h-full transition-all duration-700 ease-out"
                style={{ 
                  zIndex: 1,
                  transformOrigin: 'bottom center',
                  transform: isHovered 
                    ? 'translateX(30px) translateY(-15px) rotate(10deg)' 
                    : 'translateX(0) translateY(0) rotate(0)',
                  opacity: isHovered ? 1 : 0
                }}
              >
                  <img
                      src="/mypic-full.jpg"
                      alt="About Me"
                      className="object-cover shadow-lg w-full h-full "
                  />
              </div>

              {/* Main Image - always visible on top */}
              <div className="absolute top-0 left-0 w-full h-full"
                style={{ zIndex: 3 }}
              >
                  <img
                  src="/mypic-full.jpg"
                  alt="About Me"
                  className="object-cover shadow-lg w-full h-full "
                  /> 
              </div>
            </div>


            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className=" mt-7 md:mt-16 inline-flex items-center gap-2 text-white bg-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors"
            >
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <h2 className="text-lg md:text-2xl font-bold mb-4 text-[#009e66]">
              Who am I?
            </h2>
            <h1 className="text-lg sm:text-2xl lg:text-3xl font-medium md:font-bold mb-10 text-gray-700">
              I&apos;m Basar, a visual FullStack Developer, building clean,
              user-friendly interfaces.
            </h1>
            <p className="text-justify sm:text-left text-base sm:text-lg leading-relaxed text-gray-600 pb-7 border-b-[2px] border-[rgba(255,255,255,0.08)]">
             I&apos;m Basar, a Full Stack Web Developer based in Bangladesh. I specialize in building scalable, high-performance web applications using the MERN stack — MongoDB, Express, React, and Node.js. I love crafting clean, responsive user interfaces while developing efficient and secure back-end systems. I’m passionate about turning ideas into complete digital solutions with a strong focus on user experience and modern development practices.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="pt-7 flex flex-wrap gap-y-6 justify-between items-center text-gray-500"
            >
              <div className="flex flex-col sm:flex-row gap-4 md:gap-20">
                <div>
                  <p className="mb-3">Name: Basar</p>
                  <p>Age: 28</p>
                </div>
                <div>
                  <p className="mb-3">Email: basarbr7@gmail.com</p>
                  <p>From: Dhaka, BD</p>
                </div>
              </div>
              <div className="flex gap-5 pb-10 border-b-[1px] border-gray-500 relative after:w-full after:h-[1px] after:bg-gray-500 after:absolute after:bottom-[2px]">
                <Mail />
                <LinkedinIcon />
                <Github />
                <Facebook />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}