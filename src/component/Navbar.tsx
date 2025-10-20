"use client";

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import Container from "@/layer/Container";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skill", id: "skill" },
  { name: "Project", id: "project" },
  { name: "Contact", id: "contact" },
  { name: "FAQ", id: "faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMode, setIsMode] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  const handleMode = ()=>{
    setIsMode(!isMode)
  }

  const handleScrollClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY > 100){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return ()=>window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      animate={{ 
        backgroundColor: scrolled 
        ? "rgba(255, 255, 255, 1)"
        : "rgba(117, 122, 129, 0.65) ",
        color: scrolled ? "rgba(8, 8, 7)" : "rgba(255, 255, 255, 1 )"
       }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed left-0 top-0 w-full shadow-md z-50"
    >
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <button  className="text-2xl font-bold text-blue-600">
          Basar
        </button>

        <div className="flex items-center gap-20 md:gap-x-32 xl:gap-x-38">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={()=>handleScrollClick(item.id)}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* dark light */}
          <div onClick={handleMode} className=" w-14 px-2 py-[2px] border border-gray-400 rounded-full hover:border-red-500 bg-gray-300 transition cursor-pointer">
          <motion.div
            animate={{x: isMode? 20: 0}}
            transition={{ stiffness: 300, damping: 20 }}
          >
            {
              isMode ? 
            <Moon size={18} /> :<Sun size={18}/>
            }
          </motion.div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={()=>{handleScrollClick(item.id); setIsOpen(false)}}
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
}
