import Logo from './Logo'
import NavItem from './NavItem'
import { FaDiscord } from 'react-icons/fa';
import ThemeToggleButton from './ThemeToggleButton';

function Header() {
    return (
        <nav className = "flex justify-between p-4 items-center max-w-5xl">
            <Logo/>
            <ul className= "flex gap-5 space-x-3 items-center">
                <div className="hidden md:flex gap-5 space-x-3 items-center">
                    <NavItem text = "Overview" href = "/" />
                    <NavItem text = "Events" href = "/events" />
                    <NavItem text = "Team" href = "/team" />
                    <NavItem text = "Projects" href = "https://github.com/dscbitshyd"/>
                    <a href = "https://discord.gg/F2QF5eG9">
                        <div className="flex gap-2 items-center bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded transition duration-500 hover:scale-110">
                            <FaDiscord />
                            <h1>Join Community</h1>
                        </div>
                    </a>
                </div>
                <ThemeToggleButton/>
            </ul>
          </nav>
    )
}

export default Header