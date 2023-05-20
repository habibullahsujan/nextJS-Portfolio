import AnimatedText from "@/src/components/AnimatedText";
import { GithubIcon } from "@/src/components/Icons";
import Layout from "@/src/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../public/images/projects/crypto-screener-cover-image.jpg";
import project2 from "../public/images/projects/agency-website-cover-image.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/src/components/TransitionEffect";
const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, image, link, github }) => {
  return (
    <>
      <article className="w-full rounded-2xl flex items-center justify-between border border-solid dark:bg-dark bg-light shadow-2xl border-dark p-8 mt-10 relative dark:border-light">
        <div className="absolute top-0 -right-3 -z-10 dark:bg-light bg-dark w-[101%] h-[103%] rounded-[1.5rem]" />
        <Link
          className="overflow-hidden w-1/2 cursor-pointer rounded-lg"
          href={link}
          target="_blank"
        >
          <FramerImage
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            src={image}
            alt="featured Project"
            className="w-full h-auto"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6">
          <span className="text-primary  font-medium text-lg">{type}</span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-8"
          >
            <h2 className="my-2 w-full text-left text-2xl font-bold">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-medium">{summary}</p>
          <div className="mt-2 flex items-center ">
            <Link href={github} target="_blank" className="w-10">
              {" "}
              <GithubIcon />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark dark:text-dark dark:bg-light text-light p-2 px-6 text-lg font-semibold"
            >
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const Project = ({ image, title, type, link, github }) => {
  return (
    <>
      <article className="w-full rounded-2xl flex flex-col items-center justify-between border border-solid dark:bg-dark bg-light p-8 shadow-2xl border-dark relative dark:border-light">
        <div className="absolute top-0 -right-3 -z-10 dark:bg-light bg-dark w-[101%] h-[103%] rounded-[1.5rem]" />
        <Link
          className="overflow-hidden  cursor-pointer rounded-lg"
          href={link}
          target="_blank"
        >
          <FramerImage
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            src={image}
            alt="featured Project"
            className="w-full h-auto rounded-2xl"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </Link>
        <div className="">
          <span className="text-primary  font-medium text-lg">{type}</span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-8"
          >
            <h2 className="my-2 w-full text-left text-2xl font-bold">
              {title}
            </h2>
          </Link>
          <div className="mt-2 flex justify-between items-center ">
            <Link href={github} target="_blank" className="w-10">
              {" "}
              <GithubIcon />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark dark:text-dark dark:bg-light text-light p-2 px-6 text-lg font-semibold"
            >
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | Project Page</title>
        <meta name="description" content="any-description" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text={"Imagination Trumps Knowledge!"} />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                title={"Crypto Screener Application"}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link={"/"}
                type={"Featured Project"}
                image={project1}
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                image={project2}
                link={"/"}
                github={"/"}
                type={"Featured Project"}
                title={"Crypto Screener Application"}
              />
            </div>
            <div className="col-span-6">
              <Project
                image={project2}
                link={"/"}
                github={"/"}
                type={"Featured Project"}
                title={"Crypto Screener Application"}
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                title={"Crypto Screener Application"}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link={"/"}
                type={"Featured Project"}
                image={project1}
                github="/"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                image={project2}
                link={"/"}
                github={"/"}
                type={"Featured Project"}
                title={"Crypto Screener Application"}
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                image={project2}
                link={"/"}
                github={"/"}
                type={"Featured Project"}
                title={"Crypto Screener Application"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
