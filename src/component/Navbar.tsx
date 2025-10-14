"use client";

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import Container from "@/layer/Container";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMode, setIsMode] = useState(false)

  const handleMode = ()=>{
    setIsMode(!isMode)
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyBrand
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
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
        <div className="md:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
