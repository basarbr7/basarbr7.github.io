"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  ExternalLink,
  Github,
  Eye,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { projects } from "@/data/projects";
import Container from "@/layer/Container";
import Title from "@/layer/Title";
import { archivo } from "@/fonts";

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div
      id="projects"
      className="relative py-20 bg-gradient-to-br from-slate-950 via-black to-slate-950 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <Container className=" relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title sparkClassName="text-black!" className="text-black!">
            Featured Work
          </Title>

          <h2 className="text-2xl md:text-4xl font-black mb-3 leading-tight">
            <span className={`bg-gradient-to-r from-cyan-600 to-purple-400  bg-clip-text text-transparent animate-gradient ${archivo.className}`}>
              My Projects
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Crafting digital experiences that push boundaries and deliver
            results
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20">
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-3xl transition-opacity duration-500 blur-xl -z-10" />

                {/* Image Container */}
                <div className="relative h-56 p-5 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-y-120 group-hover:scale-x-110 rounded-md group-hover:rounded-xl"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Floating Action Buttons */}
                  <div
                    className={`absolute top-4 right-4 flex gap-2 transition-all duration-500 ${
                      hoveredId === project.id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                    }`}
                  >
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white/95 backdrop-blur-md rounded-xl hover:bg-white transition-all shadow-lg hover:scale-110"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ExternalLink className="w-4 h-4 text-slate-900" />
                    </motion.a>
                    <motion.button
                      className="p-2.5 bg-white/95 backdrop-blur-md rounded-xl hover:bg-white transition-all shadow-lg hover:scale-110"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Github className="w-4 h-4 text-slate-900" />
                    </motion.button>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Section */}
                <div className="p-6 relative">
                  {/* Title with Icon */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-500">
                      {project.title}
                    </h3>
                    <Eye className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-5 line-clamp-2 group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="text-xs font-medium bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-full text-cyan-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-default"
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold px-5 py-3 rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-cyan-500/50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">View Project</span>
                    <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />

                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                  </motion.a>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl" />
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 -z-20 blur-2xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore All Projects</span>
            <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />

            {/* Button Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </Container>
    </div>
  );
}
