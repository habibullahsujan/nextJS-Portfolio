import AnimatedText from "@/src/components/AnimatedText";
import Layout from "@/src/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article1 from "../public/images/articles/create loading screen in react js.jpg";
import article2 from "../public/images/articles/create modal component in react using react portals.png";
import article3 from "../public/images/articles/pagination component in reactjs.jpg";
import article4 from "../public/images/articles/smooth scrolling in reactjs.png";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/src/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, link, img }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouseMove(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        style={{ x: x, y: y }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};

const Article = ({ image, title, date, link }) => {
  return (
    <>
      <motion.li
        initial={{ y: 200 }}
        whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        viewport={{ once: true }}
        className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-4 dark:bg-dark dark:text-light dark:border-light border border-solid border-dark border-r-4 border-b-4 "
      >
        <MovingImg title={title} link={link} img={image} />
        <span className="text-primary dark:text-primaryDark font-semibold pl-4">
          {date}
        </span>
      </motion.li>
    </>
  );
};

const FeaturedArticle = ({ image, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 dark:bg-dark dark:text-light dark:border-light bg-light border border-solid border-dark rounded-2xl">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={image}
          alt="articleImage"
          className="w-full h-auto rounded-lg"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | Articles</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-6">
          <AnimatedText
            text={"Words Can Change The World!"}
            className="mb-16"
          />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              image={article1}
              link={"/"}
              title={
                " Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              }
              summary={
                "Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience."
              }
              time={"10 min read"}
            />
            <FeaturedArticle
              image={article2}
              link={"/"}
              title={
                "Creating An Efficient Modal Component In React Using Hooks And Portals."
              }
              summary={
                "Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience."
              }
              time={"10 min read"}
            />
            <FeaturedArticle
              image={article3}
              link={"/"}
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch."
              }
              summary={
                "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              }
              time={"09 min read"}
            />
          </ul>
          <h1 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Article
          </h1>
          <ul>
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling."
              }
              link={"/"}
              date={"May-26-1999"}
              image={article1}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling."
              }
              link={"/"}
              date={"May-26-1999"}
              image={article2}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling."
              }
              link={"/"}
              date={"May-26-1999"}
              image={article3}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling."
              }
              link={"/"}
              date={"May-26-1999"}
              image={article4}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
