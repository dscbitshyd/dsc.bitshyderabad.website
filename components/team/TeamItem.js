import Image from "next/image";
function TeamItem(props) {
    return (
        <div className = "container mx-auto p-10">
        <div className="w-30 h-50 rounded-2xl flex-col justify-center mx-auto overflow-hidden shadow-lg transition duration-500 hover:scale-110 content-evenly items-center">
            <div className = "flex justify-center">
                <Image className = "p-12 rounded-full mx-auto" src={props.url} alt="Profile image" height = {200} width = {200}/>
            </div>
            <h1 className = "text-center mx-auto font-semibold tracking-tight text-l">
                {props.name}
            </h1>
            <h1 className = "text-center leading-normal text-s font-medium">
                {props.position}
            </h1>

        </div>
        </div>


    )
}

export default TeamItem
