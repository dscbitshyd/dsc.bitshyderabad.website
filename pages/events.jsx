/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../components/header/Header';

export default function Events() {
  return (
    <motion.div
      className="bg-white dark:bg-black"
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>GDSC Events</title>
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
          <div className="flex-col-reverse lg:flex">
            <h1 className="text-5xl font-bold tracking-wide mx-auto">
              Stay Tuned! GDSC is supercharged for providing many events throughout the year!
            </h1>
            <img src="/events.svg" height={300} width={300} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
