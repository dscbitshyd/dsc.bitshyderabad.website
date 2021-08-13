import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  RiFacebookCircleLine,
  RiLinkedinBoxLine,
  RiInstagramLine,
  RiMediumLine,
  RiYoutubeLine,
  RiMailLine,
} from 'react-icons/ri';
import NavItem from '../header/NavItem';
import DiscordJoinCommunity from '../header/DiscordJoinCommunity';

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
        <div className="flex flex-1 flex-col items-center lg:items-start gap-2">
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
            Google Developer Student Clubs are community groups for college and university students
            interested in Google developer technologies
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
                href="https://www.facebook.com/DSC-BITS-Pilani-Hyderabad-Campus-100721895642962"
                icon={<RiFacebookCircleLine size={50} />}
              />
              <SocialIcon
                href="https://www.instagram.com/gdscbitshyderabad/"
                icon={<RiInstagramLine size={50} />}
              />
              <SocialIcon
                href="https://www.linkedin.com/company/75016791/"
                icon={<RiLinkedinBoxLine size={50} />}
              />
              <SocialIcon href="https://medium.com/@dscbitshyd" icon={<RiMediumLine size={50} />} />
              <SocialIcon
                href="https://www.youtube.com/channel/UCJq1Z26Ed4ZS-RZ5GSs5pKA"
                icon={<RiYoutubeLine size={50} />}
              />
              <SocialIcon href="mailto:dscbitshyd@gmail.com" icon={<RiMailLine size={50} />} />
            </motion.div>
          </div>
          <div className="flex gap-5 lg:hidden md:hidden mt-5">
            <div className="border rounded-md p-2">
              <NavItem text="Events" href="/events" />
            </div>
            <div className="border rounded-md p-2">
              <NavItem text="Team" href="/team" />
            </div>
            <div className="border rounded-md p-2">
              <NavItem text="Projects" href="https://github.com/dscbitshyd" />
            </div>
          </div>
          <div className="block lg:hidden md:hidden mt-5">
            <DiscordJoinCommunity />
          </div>
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
            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded-lg shadow-2xl sm:px-5"
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
