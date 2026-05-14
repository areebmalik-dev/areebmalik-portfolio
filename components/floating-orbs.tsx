"use client";

import { motion } from "framer-motion";

export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ top: "10%", left: "10%" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[100px]"
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ bottom: "20%", right: "10%" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-accent/20 blur-[80px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -70, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ top: "40%", left: "50%" }}
      />
    </div>
  );
}
