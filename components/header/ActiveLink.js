import { useRouter } from "next/router";

function ActiveLink({router, href, children}) {

    // (function prefecthPages() {
    //     if(typeof window != undefined) {
    //         router.prefetch(router.pathName)
    //     }
    // })()

    const handleClick = event => {
        event.preventDefault();
        router.push(href)
    }

    const isCurrentPath = router.pathName === href || router.asPath === href;
    return (
        <a href ={href} className = "" onClick = {handleClick}>
            {children}
        </a>
    )
}

export default ActiveLink
