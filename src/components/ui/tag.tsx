"use client";

import { motion } from "motion/react";

interface Props {
  title: string;
};

export const Tag = ({title}:Props) => {
  return (
    <div className="inline-flex text-sm p-2 rounded-xl border border-white/30">
      <motion.span
        animate={{
          backgroundPositionX: "100%",
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium leading-tight tracking-wide"
      >
        {title}
      </motion.span>
    </div>
  )
}
