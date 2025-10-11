import Container from "@/layer/Container";
import {  Facebook, Github, LinkedinIcon, Mail } from "lucide-react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";

export default function About() {
  return (
    <div className="relative px-6 py-10 bg-[#101010] text-white">
      <Container className="mb-10">
        {/* heading */}
        <div 
          className="flex flex-col justify-center items-center text-center mb-16"
        >
          <h2 className="text-3xl font-medium text-center mb-5">
            <span className="text-gradient uppercase">About Me</span>
          </h2>
          <p className="text-xl text-[#c7c7c7]">
            Here you will find more information about me and what I do.
          </p>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 items-center justify-center">
          {/* Image */}
          <div 
            className="lg:px-24 py-5 md:col-span-5 flex flex-col justify-center items-center text-center"
          >
            <div className="border-[1px] border-gray-600 p-[1px]">
              <Image 
                src="/mypic.png" 
                alt="About Me" 
                width={150}
                height={150}
                className="object-cover shadow-lg border-[1px] border-gray-600 p-3 max-w-[250px] sm:max-w-[300px]" 
              /> 
            </div>
            <p className="mt-7 text-gray-300 italic">Md Abul Basar</p>
          </div>
      
          {/* Text */}
          <div className="md:col-span-7">
            <h2 
              className="text-lg md:text-2xl font-bold mb-4 text-[#009e66]"
            >
              Who am I?
            </h2>
            <h1 
              className="text-lg sm:text-2xl lg:text-3xl font-medium md:font-bold mb-10"
            >
              I&apos;m Basar, a visual Front-End Developer, building clean, user-friendly interfaces.
            </h1>
            <p 
              className="text-justify sm:text-left text-base sm:text-lg leading-relaxed text-[#9f9f9f] pb-7 border-b-[2px] border-[rgba(255,255,255,0.08)]"
            >
              I&apos;m Basar, a Front-End Web Developer based in Bangladesh. I specialize in building clean, responsive user interfaces using modern tools like React, Tailwind CSS, and Redux. I enjoy turning ideas into functional digital products with an eye for detail and user experience. I continuously explore the evolving world of front-end development to build fast, accessible, and user-friendly web applications.
            </p>
            <div 
              className="pt-7 flex flex-wrap gap-y-6 justify-between items-center text-gray-400"
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
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}