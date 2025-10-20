"use client";

import { archivo } from "@/fonts";
import Container from "@/layer/Container";
import Title from "@/layer/Title";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
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
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const skills: Skill[] = [
  {
    name: "React",
    icon: <SiReact className="text-sky-500" />,
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-gray-900 dark:text-white" />,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
    category: "Programming",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-green-400" />,
    category: "Programming",
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux className="text-purple-500" />,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500" />,
    category: "Frontend",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="text-indigo-500" />,
    category: "Frontend",
  },
  {
    name: "Material UI",
    icon: <SiMui className="text-blue-500" />,
    category: "Frontend",
  },
  {
    name: "Shadcn/UI",
    icon: <span className="text-purple-500 font-bold">Sh</span>,
    category: "Frontend",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer className="text-pink-500" />,
    category: "Animation",
  },
  {
    name: "Three.js",
    icon: <SiThreedotjs className="text-pink-500" />,
    category: "Animation",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-600" />,
    category: "Backend",
  },
  {
    name: "Express.js",
    icon: (
      <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
        Ex
      </span>
    ),
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" />,
    category: "Database",
  },
  {
    name: "JWT",
    icon: <ShieldCheck className="text-green-500" />,
    category: "Backend",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-600" />,
    category: "Database",
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Programming",
    "Frontend",
    "Backend",
    "Database",
  
    "Animation",
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);


  return (
    <div id="skill" className="relative min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Container className=" text-center">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title sparkClassName="text-black!" className="text-black!">
            Technical Expertise
          </Title>

          <h2 className="text-2xl md:text-4xl font-black leading-tight">
            
            <span className={`bg-gradient-to-r from-cyan-600 to-purple-400  bg-clip-text text-transparent animate-gradient ${archivo.className}`}>
              My Skill
            </span>
          </h2>
        </motion.div>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((item) => (
            <button
              key={item}
              onClick={(e) => {
                e.preventDefault();
                setActiveCategory(item);
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
        </motion.div>

        {/* Skills Grid */}
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 35,  duration: 0.8 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col items-center justify-center space-y-3 cursor-pointer"
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="font-semibold text-gray-700 dark:text-gray-200">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
