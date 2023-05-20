import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);
function Logo() {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href={"/"}
        className="w-16 h-16 bg-dark text-center text-w border border-solid border-transparent dark:border-light
      rounded-full text-white flex justify-center items-center font-bold"
        whileHover={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          transition: { duration: 2, repeat: Infinity },
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
        }}
      >
        HBS
      </MotionLink>
    </div>
  );
}

export default Logo;
