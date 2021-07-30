import Head from "next/head";
import Header from "../components/header/Header";
import Team from "../components/team/Team";
import { motion } from 'framer-motion'


// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
function TeamPage() {
    return (
        <motion.div className = "bg-white dark:bg-black"initial='initial' animate='animate' exit={{ opacity: 0 }}>
        <Head>
        <title>DSC Team</title>
      </Head>
      <div className = "container">

          <Header/>
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.2
              }
            },
          }} className = "text-center md:text-left max-w-4xl mx-auto md:mx-auto mt-12 items-center">
          <h1 className = "text-5xl font-bold tracking-wide mx-auto">
              Meet our Team
          </h1>

            <Team/>
            </motion.div>
        </div>
        </motion.div>
    )
}

export default TeamPage
