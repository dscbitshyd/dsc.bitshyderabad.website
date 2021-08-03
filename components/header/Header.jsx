import { FaDiscord } from 'react-icons/fa';
import Logo from './Logo';
import NavItem from './NavItem';
import ThemeToggleButton from './ThemeToggleButton';
import ActiveLink from './ActiveLink';

function Header() {
  return (
    <nav className="flex justify-between p-4 items-center">
      <Logo />
      <ul className="flex gap-5 space-x-3 items-center">
        <div className="hidden md:flex gap-5 space-x-3 items-center">
          <NavItem text="Events" href="/events" />
          <NavItem text="Team" href="/team" />
          <NavItem text="Projects" href="https://github.com/dscbitshyd" />
          <a href="https://discord.gg/F2QF5eG9">
            <button className="flex gap-2 items-center bg-google-blue hover:bg-google-blue text-white dark:text-white font-bold p-2 rounded transition duration-500 hover:scale-110">
              <FaDiscord />
              <h1 className="text-red">Join Community</h1>
            </button>
          </a>
        </div>
        <ThemeToggleButton />
      </ul>
    </nav>
  );
}

export default Header;
