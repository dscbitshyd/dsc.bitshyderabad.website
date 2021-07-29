import TeamItem from "./TeamItem";

function DevelopmentDivision() {
    return (
        <div>
            <h1 className="text-2xl font-light p-8">
                Development Division
            </h1>
            <div className="flex items-center">
            <TeamItem url = "/Shreya DSC.jpg" name = "Shreya Banerjee" position = "Dev Lead" github = "www.github.com/saiankit" linkedin = "www.linkedin.com"/>
            <TeamItem url = "/Vaishnavi DSC.jpg" name = "Vaishnavi Shrivastava" position = "Dev Lead" github = "www.github.com/saiankit" linkedin = "www.linkedin.com"/>
            </div>
        </div>
    )
}

export default DevelopmentDivision
