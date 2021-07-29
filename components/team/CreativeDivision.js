import TeamItem from "./TeamItem";

function CreativeDivision() {
    return (
        <div>
        <h1 className="text-2xl font-light p-8">
        Creative Division
        </h1>
        <div className="flex items-center">
            <TeamItem url = "/Vaishnavi DSC.jpg" name = "Geetha Charan Nallana" position = "Dev Lead" github = "www.github.com/saiankit" linkedin = "www.linkedin.com"/>
            <TeamItem url = "/Shreya DSC.jpg" name = "Sambhav Jain" position = "Dev Lead" github = "www.github.com/saiankit" linkedin = "www.linkedin.com"/>
            <TeamItem url = "/Shreya DSC.jpg" name = "Pratyush Choudhary" position = "Dev Lead" github = "www.github.com/saiankit" linkedin = "www.linkedin.com"/>
        </div>
    </div>
    )
}

export default CreativeDivision
