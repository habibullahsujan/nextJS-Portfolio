import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y, className = "" }) => {
  return (
    <motion.div
      className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light 
      p-4 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
      
      
      ${className}`}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      transition={{ duration: 1.5 }}
        viewport={{once:true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 md:mt-32 md:text-6xl w-full text-center">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight lg:bg-circularLightLg lg:dark:bg-circularDark md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm  bg-dark dark:bg-light dark:text-dark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]">
        <motion.div
          className="absolute flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name={"HTML"} x={"12vw"} y={"0vw"} />
        <Skill name={"CSS"} x={"-5vw"} y={"-10vw"} />
        <Skill name={"JavaScript"} x={"20vw"} y={"6vw"} />
        <Skill name={"React JS"} x={"-20vw"} y={"-15vw"} />
        <Skill name={"Next JS"} x={"15vw"} y={"-12vw"} />
        <Skill name={"Figma"} x={"32vw"} y={"-5vw"} />
        <Skill name={"Tailwind CSS"} x={"0vw"} y={"-20vw"} />
        <Skill name={"Node JS"} x={"-25vw"} y={"18vw"} />
      </div>
    </>
  );
};

export default Skills;
