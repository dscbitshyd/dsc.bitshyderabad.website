import TeamItem from "./TeamItem";

function BusinessDivision() {
    return (
        <div>
        <h1 className="text-2xl font-light p-8">
            Business Division
        </h1>
        <div className="flex items-center">
            <TeamItem url = "/Mani DSC.jpg" name = "Mani Venkat" position = "Business Lead" github = "www.github.com/saiankit" linkedin = "www.linkedin.com"/>
            <TeamItem url = "/Shreya DSC.jpg" name = "Vibha Narendra" position = "Business Lead" github = "www.github.com/saiankit" linkedin = "www.linkedin.com"/>
        </div>
    </div>
    )
}

export default BusinessDivision
