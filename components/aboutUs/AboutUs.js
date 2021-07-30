import { motion } from "framer-motion"
import AboutUsItem from "./AboutUsItem"
import { HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineSparkles } from "react-icons/hi";

function AboutUs() {
    return (
    <motion.section initial="hidden" animate="visible" variants={{
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
    }} className="py-20 mt-20">
      {/* <!-- Heading --> */}
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 className="text-3xl text-center text-bookmark-blue">About Us</h1>
      </div>
      {/* <!-- Cards --> */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
        {/* <!-- Card 1 --> */}
        <div className=" transition duration-500 hover:scale-105 dark:bg-gray-900 flex flex-col rounded-md shadow-xl lg:mb-16">
          <div className="p-10 flex flex-col items-center">
              <HiOutlineLightBulb className="w-12 h-12"/>
              <div className="mr-4 ml-4 flex flex-col items-center">
            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Concept of DSC</h3>
            <p className="mb-2 text-bookmark-grey font-light text-justify">The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.</p>
            </div>
          </div>
        </div>
        {/* <!-- Card 2 --> */}
        <div className=" transition duration-500 hover:scale-105 dark:bg-gray-900 flex flex-col rounded-md shadow-xl lg:my-8">
          <div className="p-10 flex flex-col items-center">
          <HiOutlineSparkles className="w-12 h-12"/>
            <h3 className="mr-4 ml-4 mt-5 mb-2 text-bookmark-blue text-lg">Why DSC ?</h3>
            <p className="mb-2 text-bookmark-grey font-light text-justify">For students to learn development skills, solve problems through technology and inspire them to be world class developers and changemakers.</p>
          </div>
        </div>
        {/* <!-- Card 3 --> */}
        <div className=" transition duration-500 hover:scale-105 dark:bg-gray-900 flex flex-col rounded-md shadow-xl lg:mt-16">
          <div className="p-10 flex flex-col items-center">
          <HiOutlineUserGroup className="w-12 h-12"/>
            <h3 className="mr-4 ml-4 mt-5 mb-2 text-bookmark-blue text-lg">Target audience</h3>
            <p className="mb-2 text-bookmark-grey font-light text-justify">DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems.</p>
          </div>
        </div>
      </div>
    </motion.section>
    )
}

export default AboutUs
