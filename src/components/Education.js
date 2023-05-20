import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const EducationDetails = ({
  degree,
  instituteName,
  instituteLink,
  time,
  address,
  details,
}) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
    <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {degree}&nbsp;{" "}
          <a
            href={instituteLink}
            target="_blank"
            className="text-primary dark:text-light capitalize"
          >
            @ {instituteName}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{details}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
          <h2 className="font-bold text-8xl mb-32 w-full text-center xs:text-4xl md:text-6xl md:mb-16">Education</h2>
          <div className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="bg-dark dark:bg-light absolute rounded-lg top-0 left-20 w-[4px] h-full origin-top"
        />
        <ul>
          <EducationDetails
            degree={"Bachelor Of Science In Computer Science"}
            instituteName={"Massachusetts Institute Of Technology (MIT)"}
            time={"2016-2020"}
            work={
              "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
            }
          />
            <EducationDetails
            degree={"Bachelor Of Science In Computer Science"}
            instituteName={"Massachusetts Institute Of Technology (MIT)"}
            time={"2016-2020"}
            work={
              "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
            }
          />
            <EducationDetails
            degree={"Bachelor Of Science In Computer Science"}
            instituteName={"Massachusetts Institute Of Technology (MIT)"}
            time={"2016-2020"}
            work={
              "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
            }
          />
            <EducationDetails
            degree={"Bachelor Of Science In Computer Science"}
            instituteName={"Massachusetts Institute Of Technology (MIT)"}
            time={"2016-2020"}
            work={
              "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
            }
          />
          
        </ul>
      </div>
    </div>
  );
};

export default Education;
