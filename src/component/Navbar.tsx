"use client";

import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import Container from "@/layer/Container";
import { figtree } from "@/fonts";
import { RxCross2 } from "react-icons/rx";
import { useTheme } from "@/contextApi/ThemeContex";

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
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme();


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

   // scroll off when openBobile menu
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
      return () => {
        document.body.style.overflow = 'auto'
      }
    }, [isOpen])

    

  return (
    <motion.nav
      animate={{ 
        backgroundColor: theme === "dark"
          ? scrolled
            ? "rgba(17, 17, 17, 1)"
            : "rgb(64 68 71 / 64%)"
          : scrolled
            ? "rgba(255, 255, 255, 1)"
            : "rgba(117, 122, 129, 0.65)",
        color: theme==="dark" ? scrolled ?  "rgba(255, 255, 255, 1 )" : "rgba(255, 255, 255, 1 )" : scrolled ? "rgba(8, 8, 7)" : "rgba(255, 255, 255, 1 )"
       }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`dark:text-white fixed left-0 top-0 w-full shadow-md z-50 ${scrolled ? "header-animation" : "" } `}
    >
      <Container className={`flex items-center justify-between py-4 ${figtree.className} `}>
        {/* Logo */}
        <button  className="text-2xl font-bold text-blue-600">
          Basar
        </button>

        <div className="flex items-center gap-20 md:gap-x-32 xl:gap-x-38">
          {/* Desktop Menu */}
          <ul className={`hidden md:flex space-x-8 font-medium text-base `}>
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={()=>handleScrollClick(item.id)}
                  className="hover:text-blue-600 transition-colors tracking-[1px] "
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* dark light */}
          <motion.div onClick={toggleTheme} className={`hidden md:flex w-14 px-2 py-[4px] border border-gray-400 rounded-full  transition cursor-pointer `}
          >
            <motion.div
              animate={{x: theme === "dark" ? 20: 0}}
              transition={{ stiffness: 300, damping: 20 }}
              className="flex items-center"
            >
              {
                theme === "dark" ? 
              <Moon size={18} /> :<Sun size={18}/>
              }
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200 "
        >
           { isOpen ? "" : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isOpen  && (<div onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#00000097] z-40"/>
          )}
          <div className= {`md:hidden shadow-sm fixed top-0 left-0 w-64 max-w-full h-screen  bg-[#ffffff] text-black  flex flex-col gap-6 pb-4 z-50 transition-transform duration-300 ${ isOpen ? 'translate-x-0' : '-translate-x-full' }`}>

            <div className="bg-gray-400 px-6 py-3 flex justify-between ">
              <button  className="text-2xl font-bold text-blue-600">
                Basar
              </button>

              {/* dark light */}
              <div onClick={toggleTheme} className="flex md:hidden w-14 px-2 py-[2px] border border-gray-400 rounded-full hover:border-red-500 bg-gray-300 transition cursor-pointer">
              <motion.div
                animate={{x: theme === "dark" ? 20: 0}}
                transition={{ stiffness: 300, damping: 20 }}
                className="flex items-center"
              >
                {
                  theme === "dark" ? 
                <Moon size={18} /> :<Sun size={18}/>
                }
              </motion.div>
              </div>
            </div>

            <ul className="flex flex-col space-y-4 px-10 ">
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

            {isOpen && (
              <button
                onClick={() => setIsOpen(false)}
                className={`md:hidden absolute top-3 -right-20 z-[60] text-white border border-white cursor-pointer rounded-md` }
              >
                <RxCross2 className="text-3xl" />
              </button>
            )}
            
          </div>

      </Container>

      
    </motion.nav>
  );
}
