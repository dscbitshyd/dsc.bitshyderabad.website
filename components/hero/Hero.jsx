import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaDiscord } from 'react-icons/fa';

import {
  RiFacebookCircleLine,
  RiLinkedinBoxLine,
  RiInstagramLine,
  RiMediumLine,
  RiYoutubeLine,
} from 'react-icons/ri';
import GoogleRectangle from './GoogleRectangle';
import SocialIcon from './SocialIcon';

function Hero() {
  return (
    <section className="relative">
      <div
        className="
            container
            flex
            flex-col-reverse
            lg:flex-row
            items-center
            gap-12
            mt-8
            lg:mt-20
          "
      >
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            layoutId="title"
            className="text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6"
          >
            Google Developer Student Clubs
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-300 text-2xl text-center lg:text-left mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            BITS Pilani Hyderabad Campus
          </motion.p>
          <motion.p
            className="text-gray-500 dark:text-gray-400 text-base text-center lg:text-left mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Google Developer Student Clubs are community groups for college and
            university students interested in Google developer technologies
          </motion.p>

          <div className="flex justify-center flex-wrap gap-6">
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
                    delay: 0.4,
                  },
                },
              }}
              className="flex space-x-5"
            >
              <SocialIcon
                href="www.instagram.com"
                icon={<RiFacebookCircleLine size={50} />}
              />
              <SocialIcon
                href="www.instagram.com"
                icon={<RiInstagramLine size={50} />}
              />
              <SocialIcon
                href="www.instagram.com"
                icon={<RiLinkedinBoxLine size={50} />}
              />
              <SocialIcon
                href="www.instagram.com"
                icon={<RiMediumLine size={50} />}
              />
              <SocialIcon
                href="www.instagram.com"
                icon={<RiYoutubeLine size={50} />}
              />
            </motion.div>
          </div>
          <a href="https://discord.gg/F2QF5eG9">
            <div className="md:hidden mt-5 flex gap-2 items-center bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded transition duration-500 hover:scale-110">
              <FaDiscord />
              <h1>Join Community</h1>
            </div>
          </a>
        </div>
        {/* <!-- The Dome --> */}
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
                delay: 0.4,
              },
            },
          }}
          className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10 transition duration-500 hover:scale-105"
        >
          <Image
            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded-lg shadow-2xl "
            src="/dome-01.jpeg"
            width={1022}
            height={681}
          />
        </motion.div>
      </div>
      <GoogleRectangle />
    </section>
  );
}

export default Hero;
