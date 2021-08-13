import Image from 'next/image';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

function TeamItem({ dev, url, name, position }) {
  let githubIcon;
  if (dev) {
    githubIcon = (
      <div className="flex gap-5">
        <div className="border rounded-full p-2">
          <FiGithub size={25} className="hover:rotate-12 transition duration-200" />
        </div>
        <div className="border rounded-full p-2">
          <FiLinkedin size={25} className="hover:-rotate-12 transition duration-200" />
        </div>
      </div>
    );
  } else {
    githubIcon = (
      <div className="flex gap-5">
        <div className="border rounded-full p-2">
          <FiLinkedin size={25} className="hover:rotate-12 transition duration-200" />
        </div>
      </div>
    );
  }
  return (
    <div className=" transition duration-500 hover:scale-105 dark:bg-gray-100 border-2  flex flex-col rounded-2xl shadow-xl lg:mb-16">
      <div className="p-6 flex flex-col items-center">
        <Image
          className="p-12 rounded-full mx-auto"
          src={url}
          alt="Profile image"
          height={200}
          width={200}
        />
        <div className="mr-4 ml-4 flex flex-col items-center">
          <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">{name}</h3>
          <h3 className="mb-2 text-gray-600 text-s">{position}</h3>

          {githubIcon}
        </div>
      </div>
    </div>
  );
}

export default TeamItem;
