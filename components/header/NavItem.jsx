import Link from 'next/link';

function NavItem({ href, text }) {
  return (
    <Link href={href}>
      <div className="text-lg font-light text-gray-800 dark:text-white rounded transition duration-500 hover:scale-110 cursor-pointer">
        {text}
      </div>
    </Link>
  );
}
export default NavItem;
