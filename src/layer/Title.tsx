import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import React, { ReactNode } from 'react'

type Containerprops = {
    children: ReactNode,
    className?: string,
    motionClassName?: string,
    sparkClassName?: string
}

const Title = ({children,sparkClassName, className, motionClassName} : Containerprops) => {
  return (
    <motion.div
          className={`inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500 via-purple-500
           to-pink-500 rounded-full border border-cyan-500 mb-8 ${motionClassName} `}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Sparkles className={`w-4 h-4 text-white animate-pulse ${sparkClassName}`} />
          <span className={`text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-white ${className}`}>
            {children}
          </span>
        </motion.div>
  )
}

export default Title