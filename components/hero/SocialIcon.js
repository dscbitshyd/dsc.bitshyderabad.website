import Link from 'next/link';
function SocialIcon(props) {
    return (
        <a href = {props.href}>
        <div  className = "hover:rotate-12 transition duration-200">
            {props.icon}
        </div>
        </a>
    )
}

export default SocialIcon
