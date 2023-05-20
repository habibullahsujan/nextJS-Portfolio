import AnimatedText from "@/src/components/AnimatedText";
import Layout from "@/src/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/src/components/Skills";
import Experience from "@/src/components/Experience";
import Education from "@/src/components/Education";
import TransitionEffect from "@/src/components/TransitionEffect";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [value, isInView, motionValue]);

  useEffect(() => {
    springValue.on("change", (latestValue) => {
      if (ref.current && latestValue.toFixed(0) <= value) {
        ref.current.textContent = latestValue.toFixed(0);
      }
    });
  });
  return <span ref={ref}></span>;
};
const about = () => {
  return (
    <>
      <Head>
        <title>Code Bucks | About Page</title>
        <meta name="description" content="my description" />
      </Head>
      <TransitionEffect/>
      <main className="flex w-full flex-col items-center justify-center px-10 py-8 xs:px-2 xs:py-2 sm:px-3 sm:py-3">
        <Layout className="pt-12">
          <AnimatedText
            text={"Passion Fuels Purpose!"}
            className="!text-6xl
            xs:!text-2xl sm:!text-2xl md:!text-4xl mb-12"
          />
          <div className="grid sm:block w-full grid-cols-8 gap-16 md:grid-cols-6">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="my-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I am CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients visions to life.
              </p>
              <p className="font-medium">
                I believe that design is about more than just making things look
                pretty - it is about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I am working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 bg-dark w-[102%] h-[103%] dark:bg-light rounded-[1.5rem]" />
              <Image
                src={profilePic}
                alt="profile"
                className="rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:items-center md:order-3 xs:my-4 sm:my-4">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={50} />+
                </span>
                <h2 className="text-xl font-bold capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied Client
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold">
                  <AnimatedNumber value={20} />+
                </span>
                <h2 className="text-xl xl:text-center md:text-lg sm:text-base xs:text-sm font-bold capitalize text-dark/75 dark:text-light">
                  Projects
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold">
                  <AnimatedNumber value={2} />
                </span>
                <h2 className="text-xl font-bold capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Year of experience.
                </h2>
              </div>
            </div>
          </div>
          <div className="my-10">
            <Skills />
          </div>
          <div>
            <Experience />
          </div>
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
