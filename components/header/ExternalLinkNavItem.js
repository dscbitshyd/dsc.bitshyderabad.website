function ExternalLinkNavItem(props) {
    return (
        <li className="pr-4 text-m font-light text-gray-800 p-2 hover:bg-gray-200 rounded transition duration-500 hover:scale-110">
            <a href = {props.href}>
                {props.text}
            </a>
        </li>

    )
}

export default ExternalLinkNavItem




