"use client"

import { motion } from "framer-motion"
import { MoveUp } from "lucide-react"
import { useEffect, useState } from "react"

const ScrollTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 250){
                setShowScrollTop(true)
            }
            else{
                setShowScrollTop(false)
            }
        }

        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll)

    }, [])

  return (
    <>
        {showScrollTop && (
            <motion.div
                key="scrollTop"
                initial={{ opacity: 0, y: 20 }}   
                animate={{ opacity: 1, y: 0 }}    
                exit={{ opacity: 0, y: 20 }}      
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="fixed bottom-10 right-10 px-2 py-4 text-white bg-gray-700/70 rounded-md cursor-pointer shadow-lg"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
            >
                <MoveUp size={24} className="animate-pulse" />
            </motion.div>
        )}

    </>
  )
}

export default ScrollTop