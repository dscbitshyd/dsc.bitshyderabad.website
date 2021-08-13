function ExternalLinkNavItem({ href, text }) {
  return (
    <li className="pr-4 text-m font-light text-gray-800 dark:text-white p-2 dark:hover:bg-gray-800 hover:bg-gray-200 rounded transition duration-500 hover:scale-110">
      <a href={href}>{text}</a>
    </li>
  );
}

export default ExternalLinkNavItem;
