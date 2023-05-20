import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

function HireMe() {
  return (
    <div className="fixed xl:left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute">
      <div className="w-48 md:w-32 h-auto flex items-center md:relative ">
        <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />
        <Link
          href={"mailto:habibsujan007@gmail.com"}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light md:w-16 md:h-16 md:text-sm"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}

export default HireMe;
