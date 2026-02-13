"use client"; // This tells Next.js to run this on the browser

import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string; // Added this so you can change styles later
}

export const AnimatedHeadline = ({ text, className }: Props) => {
  return (
    <motion.h1 
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 1, 
        ease: [0.22, 1, 0.36, 1], // Custom "cubic-bezier" for a smoother, high-end feel
      }}
      className={className || "text-6xl font-black tracking-tighter"}
    >
      {text}
    </motion.h1>
  );
};