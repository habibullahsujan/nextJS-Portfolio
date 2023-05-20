import Footer from "@/src/components/Footer";
import { NavBar } from "@/src/components/NavBar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router=useRouter()
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          href="/public/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <main
        className={`${montserrat.variable} dark:bg-dark dark:font-light font-mont bg-light w-full min-h-screen`}
      >
        <NavBar />
        <div className="px-6">
          {" "}
         <AnimatePresence mode="wait">
         <Component key={router.asPath} {...pageProps} />
         </AnimatePresence>
        </div>
        <Footer />
      </main>
    </>
  );
}
