import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

export default function Jira({ directionLeft = true }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/download (5).png"
        alt="react"
        className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-32
                xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
    </div>
  );
}
