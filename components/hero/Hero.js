import { motion } from "framer-motion"
import Image from "next/image";
import { RiFacebookCircleLine, RiLinkedinBoxLine, RiInstagramLine, RiMediumLine, RiYoutubeLine } from "react-icons/ri";
import GoogleRectangle from "./GoogleRectangle";
import SocialIcon from "./SocialIcon";
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
          ">
            <div className="flex flex-1 flex-col items-center lg:items-start">
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              layoutId="title"
              className="text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6"
            >
              Google Developer Student Club
              </motion.h2>
              <motion.p
                className="text-gray-600 dark:text-gray-300 text-lg text-center lg:text-left mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                >
              BITS Pilani Hyderabad Campus Chapter
              </motion.p>
              <motion.p
                className="text-gray-500 dark:text-gray-400 text-base text-center lg:text-left mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Google Developer Student Clubs are community groups for college and university students interested in Google developer technologies
              </motion.p>

              <div className="flex justify-center flex-wrap gap-6">
              <motion.div initial="hidden" animate="visible" variants={{
              hidden: {
                scale: .8,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4
                }
              },
            }} className = "flex space-x-5">
                    <SocialIcon href = "www.instagram.com" icon = {<RiFacebookCircleLine size = {30} />}/>
                    <SocialIcon href = "www.instagram.com" icon = {<RiInstagramLine size = {30} />}/>
                    <SocialIcon href = "www.instagram.com" icon = {<RiLinkedinBoxLine size = {30} />}/>
                    <SocialIcon href = "www.instagram.com" icon = {<RiMediumLine size = {30} />}/>
                    <SocialIcon href = "www.instagram.com" icon = {<RiYoutubeLine size = {30} />}/>
                  </motion.div>
              </div>
            </div>
            {/* <!-- The Dome --> */}
            <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10 transition duration-500 hover:scale-105">
              <Image className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded-lg shadow-2xl " src = "/dome-01.jpeg" width = {1022} height = {681}/>
            </div>
        </div>
          <GoogleRectangle/>
      </section>
    )
}

export default Hero
