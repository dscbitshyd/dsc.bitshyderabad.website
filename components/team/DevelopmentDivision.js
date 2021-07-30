import TeamItem from "./TeamItem";

function DevelopmentDivision() {
    return (
        <div>
            <h1 className="text-2xl font-light p-8">
                Development Division
            </h1>
            <div className="grid-cols-1 md:flex gap-16 justify-center items-center">
                <TeamItem dev = {true} url = "/Shreya DSC.jpg" name = "Shreya Banerjee" position = "Dev Lead" github = "www.github.com/saiankit" linkedin = "www.linkedin.com" dev={true}/>
                <TeamItem dev = {true}  url = "/Vaishnavi DSC.jpg" name = "Vaishnavi Shrivastava" position = "Dev Lead" github = "www.github.com/saiankit" linkedin = "www.linkedin.com" dev={true}/>
            </div>
        </div>
    )
}

export default DevelopmentDivision
