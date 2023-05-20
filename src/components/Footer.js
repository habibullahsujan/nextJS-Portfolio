import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg px-5 dark:text-light dark:border-light">
      <Layout className="py-8 flex items-center md:flex-col sm:flex-col sm:items-start justify-between">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build with <span className="text-primary px-2 text-2xl">&#9825;</span>
          <Link href={""} className="underline underline-offset-2">CodeBucks</Link>
        </div>
        <Link href={""} className="underline underline-offset-4">Say Hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
