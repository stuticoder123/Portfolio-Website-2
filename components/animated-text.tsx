"use client"

import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  // Split text into words
  const words = text.split(" ")

  // Animation variants for container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  // Animation variants for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.h1 className={className} variants={container} initial="hidden" animate="visible">
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block mr-1">
          {word}
        </motion.span>
      ))}
    </motion.h1>
  )
}
