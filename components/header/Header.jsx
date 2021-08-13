import DiscordJoinCommunity from './DiscordJoinCommunity';
import Logo from './Logo';
import NavItem from './NavItem';
import ThemeToggleButton from './ThemeToggleButton';

function Header() {
  return (
    <nav className="flex justify-between p-4 items-center">
      <Logo />
      <ul className="flex gap-5 space-x-3 items-center">
        <div className="hidden md:flex gap-5 space-x-3 items-center">
          <NavItem text="Events" href="/events" />
          <NavItem text="Team" href="/team" />
          <NavItem text="Projects" href="https://github.com/dscbitshyd" />
          <DiscordJoinCommunity />
        </div>
        <ThemeToggleButton />
      </ul>
    </nav>
  );
}

export default Header;
