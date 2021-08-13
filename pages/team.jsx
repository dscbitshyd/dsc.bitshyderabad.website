import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../components/header/Header';
import Team from '../components/team/Team';

function TeamPage() {
  return (
    <motion.div
      className="bg-white dark:bg-black"
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>GDSC Team</title>
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
          className="text-center md:text-left max-w-4xl mx-auto md:mx-auto mt-12 items-center"
        >
          <h1 className="text-5xl font-bold tracking-wide mx-auto">Meet our Team</h1>

          <Team />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default TeamPage;
