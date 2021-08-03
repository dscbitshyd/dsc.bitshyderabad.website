import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Team from '../components/team/Team';

// Our custom easing
const easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Events() {
  return (
    <motion.div
      className="bg-white dark:bg-black"
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>DSC Team</title>
      </Head>
      <div className="container">
        <Header />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            },
          }}
          className="text-center md:text-left max-w-4xl mx-auto md:mx-auto mt-12 md:mt-24 items-center"
        >
          <div className="flex">
            <h1 className="text-5xl font-bold tracking-wide mx-auto">
              Stay Tuned! DSC is supercharged for providing many events
              throughout the year!
            </h1>
            <img src="/events.svg" height={300} width={300} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
