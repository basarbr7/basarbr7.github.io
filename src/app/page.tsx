"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Hero from "@/component/Hero";
import About from "@/component/About";
import Skills from "@/component/Skill";
import Projects from "@/component/Projects";
import Contact from "@/component/Contact";

export default function Layout() {
 

  return (
    <div>
      
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact/>

    </div>
  );
}
