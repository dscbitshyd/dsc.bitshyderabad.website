import Link from "next/link"

function NavItem(props) {
    return (
        <li className="text-m font-light text-gray-800 p-2 hover:bg-gray-200 rounded transition duration-500 hover:scale-110">
            <Link href = {props.href}>
                {props.text}
            </Link>
        </li>
    )
}
export default NavItem
