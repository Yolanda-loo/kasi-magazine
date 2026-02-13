"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
}

export const BentoCard = ({ children, className }: BentoCardProps) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,           // Slightly grows
        y: -5,                 // Lifts up 5 pixels
        rotateX: 2,            // Slight 3D tilt
        rotateY: -2 
      }}
      whileTap={{ scale: 0.98 }} // Shrinks slightly when clicked
      transition={{ 
        type: "spring",        // Realistic physics
        stiffness: 300, 
        damping: 20 
      }}
      className={`cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};