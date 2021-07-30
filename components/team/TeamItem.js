import Image from "next/image";
import { FiGithub, FiLinkedin } from "react-icons/fi";
function TeamItem(props) {
    let githubIcon
    if(props.dev) {
        githubIcon = <div className="flex gap-5">
        <FiGithub className = "hover:rotate-12 transition duration-200"/>
        <FiLinkedin className = "hover:-rotate-12 transition duration-200"/>
    </div>
    } else {
        githubIcon = <div className="flex gap-5">
        <FiLinkedin className = "hover:rotate-12 transition duration-200" />
    </div>
    }
    return (
        <div className=" transition duration-500 hover:scale-105 dark:bg-gray-900 flex flex-col rounded-md shadow-xl lg:mb-16">
            <div className="p-6 flex flex-col items-center">
                <Image className = "p-12 rounded-full mx-auto" src={props.url} alt="Profile image" height = {200} width = {200}/>
            <div className="mr-4 ml-4 flex flex-col items-center">
                <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">{props.name}</h3>
                <h3 className="mb-2 text-gray-600 text-s">{props.position}</h3>
                {githubIcon}
                </div>
            </div>
        </div>
    )
}

export default TeamItem