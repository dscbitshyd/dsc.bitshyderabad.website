function SocialIcon({ href, icon }) {
  return (
    <a href={href}>
      <div className="hover:rotate-12 transition duration-200">{icon}</div>
    </a>
  );
}

export default SocialIcon;
