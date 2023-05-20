import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group font-semibold`}>
      {title}
      <span
        className={`h-0.5 inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-linear duration-400 dark:bg-light ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button className={`${className} relative group`} onClick={handleClick}>
      {title}
      <span
        className={`h-0.5 inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-linear duration-400 dark:bg-light ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};
export const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <header className="flex justify-between px-32 lg:px-16 sm:px-8 py-8 w-full dark:text-light">
      <button onClick={handleClick} className="hidden lg:block">
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-in-out ${
            open ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-1 transition-all duration-300 ease-in-out ${
            open ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-in-out ${
            open ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <nav className="lg:hidden">
        <CustomLink href={"/"} title={"Home"} className="mr-4" />
        <CustomLink href={"/about"} title={"About"} className="mr-4" />
        <CustomLink href={"/projects"} title={"Projects"} className="mr-4" />
        <CustomLink href={"/articles"} title={"Articles"} className="mr-4" />
      </nav>
      <nav className="flex justify-center items-center flex-wrap lg:hidden">
        <motion.a
          href={"https://www.twitter.com"}
          target="_blank"
          whileHover={{ y: 4 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href={"https://www.github.com"}
          target="_blank"
          whileHover={{ y: 4 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href={"https://wwww.linkedin.com"}
          target="_blank"
          whileHover={{ y: 8 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href={"https://pinterest.com"}
          target="_blank"
          whileHover={{ y: 4 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href={"https://dribble.com"}
          target="_blank"
          whileHover={{ y: 4 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <DribbbleIcon />
        </motion.a>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-2 rounded-full p-1 flex justify-center ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      {open && (
        <motion.div
          initial={{ scale: 0, opacity: 0 , x:'-50%', y:'-50%'}}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[50vw] mx-auto flex flex-col justify-between items-center fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10 dark:bg-dark dark:text-light bg-light/70 backdrop-blur-md h-1/3 p-4 rounded-lg"
        >
          <nav className="flex flex-col items-center  justify-center ">
            <CustomMobileLink
              toggle={setOpen}
              href={"/about"}
              title={"About"}
              className="mr-4"
            />
            <CustomMobileLink
              toggle={setOpen}
              href={"/"}
              title={"Home"}
              className="mr-4"
            />
            <CustomMobileLink
              toggle={setOpen}
              href={"/projects"}
              title={"Projects"}
              className="mr-4"
            />
            <CustomMobileLink
              toggle={setOpen}
              href={"/articles"}
              title={"Articles"}
              className="mr-4"
            />
          </nav>
          <nav className="flex justify-center items-center flex-wrap">
            <motion.a
              href={"https://www.twitter.com"}
              target="_blank"
              whileHover={{ y: 4 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href={"https://www.github.com"}
              target="_blank"
              whileHover={{ y: 4 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href={"https://wwww.linkedin.com"}
              target="_blank"
              whileHover={{ y: 8 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href={"https://pinterest.com"}
              target="_blank"
              whileHover={{ y: 4 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <PinterestIcon />
            </motion.a>
            <motion.a
              href={"https://dribble.com"}
              target="_blank"
              whileHover={{ y: 4 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <DribbbleIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-2 rounded-full p-1 flex justify-center ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      )}
      <div className="absolute left-[50%] top-2 translate-x-[-50%] lg:hidden sm:block">
        <Logo />
      </div>
    </header>
  );
};
