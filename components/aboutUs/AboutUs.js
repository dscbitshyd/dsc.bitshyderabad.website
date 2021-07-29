import { motion } from "framer-motion"
import AboutUsItem from "./AboutUsItem"
import { HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineSparkles } from "react-icons/hi";

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
            <h1 className="font-bold text-xl leading-tight dark:text-white mb-12">About Us</h1>
            <div className="flex space-x-10">
                <AboutUsItem title="Concept of DSC" icon = {<HiOutlineLightBulb className="w-20 h-20 object-cover rounded-full text-red-600"/>} content = "The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability."/>
                <AboutUsItem title="Why DSC ?" icon = {<HiOutlineSparkles className="w-20 h-20 object-cover rounded-full text-green-600"/>} content = "For students to learn development skills, solve problems through technology and inspire them to be world class developers and changemakers."/>
                <AboutUsItem title="Target audience" icon = {<HiOutlineUserGroup className="w-20 h-20 object-cover rounded-full text-blue-600"/>} content = "DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems." />
            </div>
        </motion.div>
    )
}

export default AboutUs
