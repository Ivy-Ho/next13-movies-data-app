"use client";

import { motion } from 'framer-motion';

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: .5,
      },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: .25,
        ease: 'easeOut'
      }
    }
  }
}

export default function Loading() {
  return (
    <>
      <motion.div className="w-3 h-3 mt-10 mx-auto mb-2 rounded-full bg-gray-500 dark:bg-white"
        variants={loaderVariants}
        animate="animationOne"
      ></motion.div>
      <p className="text-xl text-gray-500 text-center dark:text-white">loading...</p>
    </>
  )
}
