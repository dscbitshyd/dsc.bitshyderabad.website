import { FaDiscord } from 'react-icons/fa';

function DiscordJoinCommunity() {
  const style = { color: 'white', fontSize: '1em' };

  return (
    <a href="https://discord.gg/qMZDZ2NpMB">
      <div className="flex gap-2 items-center bg-google-blue hover:bg-google-blue font-bold p-2 rounded transition duration-500 hover:scale-110">
        <FaDiscord style={style} />
        <h1 style={style} className="text-red">
          Join Community
        </h1>
      </div>
    </a>
  );
}

export default DiscordJoinCommunity;
