/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'


function Logo() {
  return (
    <Link href="/">
      <div className="flex space-x-3 items-center cursor-pointer transition duration-500 hover:scale-110">

        <div><img src = '/googleDscLogo.svg' alt = "Logo" height = {40} width = {40} loading="lazy" /></div>
        <div>
        <h1 className="text-2xl">
            Developer Student Clubs
        </h1>
        <h1 className="text-l">
            BITS Pilani Hyderabad Campus
        </h1>
        </div>
      </div>
    </Link>
  )
}

export default Logo