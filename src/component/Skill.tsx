"use client";

import Container from "@/layer/Container";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiBootstrap,
  SiFramer,
  SiMui,
  SiMysql,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const skills: Skill[] = [
  { name: "React", icon: <SiReact className="text-sky-500" />, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-white" />, category: "Frontend" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, category: "Frontend" },
  { name: "Redux", icon: <SiRedux className="text-purple-500" />, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, category: "Styling" },
  { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-500" />, category: "Styling" },
  { name: "Material UI", icon: <SiMui className="text-blue-500" />, category: "Styling" },
  { name: "Shadcn/UI", icon: <span className="text-purple-500 font-bold">Sh</span>, category: "Styling" },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" />, category: "Animation" },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" />, category: "Backend" },
  { name: "Express.js", icon: <span className="text-xl font-bold text-gray-700 dark:text-gray-300">Ex</span>, category: "Backend" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, category: "Database" },
   { name: "MySQL", icon: <SiMysql className="text-blue-600" />, category: "Database" },
];


export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Database", "Styling", "Animation",];
  
  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

   // create a ref for the skills section
  // const skillsRef = useRef<HTMLDivElement>(null);

  // const handleCategoryClick = (category: string) => {
  //   setActiveCategory(category);

  //   // scroll to the top of the skills section
  //   skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <div className="relative min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Container className=" text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white"
        >
          My<span className="text-blue-500">Skills</span>
        </motion.h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((item) => (
            <button
              key={item}
              onClick={(e) => {
                e.preventDefault();
                setActiveCategory(item)
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
                activeCategory === item
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col items-center justify-center space-y-3 cursor-pointer"
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="font-semibold text-gray-700 dark:text-gray-200">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
