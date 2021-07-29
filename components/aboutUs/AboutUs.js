import { motion } from "framer-motion"

function AboutUs() {
    return (
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
          }} className ="text-center md:text-left max-w-4xl mx-auto md:mx-auto mt-12 md:mt-24 items-start">
            <h1 className="font-bold text-xl leading-tight dark:text-white">About Us</h1>
            <div className = "flex">

            </div>
            <div className = "mx-auto space-y-8">
                <p className="text-2xl font-medium  dark:text-white"> BITS Pilani Hyderabad Campus Chapter</p>
                <p className="text-xl font-light  dark:text-white"> Google Developer Student Clubs are community groups for college and university students interested in Google developer technologies</p>
            </div>
        </motion.div>
    )
}

export default AboutUs
