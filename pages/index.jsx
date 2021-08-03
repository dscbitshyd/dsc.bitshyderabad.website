import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import AboutUs from '../components/aboutUs/AboutUs';

export default function Home() {
  return (
    <motion.div
      className="bg-white dark:bg-black"
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>DSC BITS Hyd</title>
      </Head>
      <div className="container">
        <Header />
        <Hero />
        <AboutUs />
      </div>
    </motion.div>
  );
}
