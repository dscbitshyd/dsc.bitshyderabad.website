/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'


function Logo() {
  return (
    <Link href="/">
      <div className="flex space-x-3 items-center cursor-pointer transition duration-500 hover:scale-110">

        <div><img src = '/googleDscLogo.svg' alt = "Logo" height = {40} width = {40} loading="lazy" /></div>
        <div>
        <h1 className="text-lg md:text-base lg:text-xl dark:text-white">
            Developer Student Clubs
        </h1>
        <h1 className="text-sm md:text-sm lg-text-base dark:text-white">
            BITS Pilani Hyderabad Campus
        </h1>
        </div>
      </div>
    </Link>
  )
}

export default Logo