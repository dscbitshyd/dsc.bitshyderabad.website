import Link from 'next/link'
import ExternalLinkNavItem from './ExternalLinkNavItem'
import Logo from './Logo'
import NavItem from './NavItem'
import { FaDiscord } from 'react-icons/fa';


function Header() {
    return (
        <nav className = "flex justify-between p-4">
          <div>
            <Logo/>
          </div>
          <div className="hidden md:block">
            <ul className= "flex space-x-3 gap-5">
                <NavItem text = "Overview" href = "/" />
                <NavItem text = "Events" href = "/events" />
                <NavItem text = "Team" href = "/team" />
                <NavItem text = "Faqs" href = "#faqs" />
                <ExternalLinkNavItem text = "Projects" href = "https://github.com/dscbitshyd"/>
                <a href = "https://discord.gg/F2QF5eG9">

                    <div className="flex gap-2 items-center bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded transition duration-500 hover:scale-110">
                        <FaDiscord />
                        <h1>Join the Community</h1>
                    </div>
                </a>
            </ul>
          </div>
          </nav>
    )
}

export default Header


function DiscordButton() {
  return (
  <a href="mailto:mw@wallisconsultancy.co.uk" className="flex items-center m-2">
    <FaDiscord />
    <p className="ml-2">
      Email: mw@wallisconsultancy.co.uk
    </p>
  </a>

  )
}
