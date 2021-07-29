import Head from 'next/head'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import { motion } from 'framer-motion'

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

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
export default function Home() {
  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
    <Head>
        <title>DSC BITS Hyd</title>
      </Head>
      <div className = "container">
      <Header/>
      <Hero/>
      </div>
    </motion.div>
  )
}
