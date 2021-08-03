import Link from "next/link"

function NavItem(props) {
    return (
        <Link href = {props.href} >
            <div className="text-lg font-light text-gray-800 dark:text-white rounded transition duration-500 hover:scale-110 cursor-pointer">
                    {props.text}
            </div>
        </Link>
    )
}
export default NavItem
