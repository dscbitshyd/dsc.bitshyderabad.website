import BusinessDivision from "./BusinessDivision";
import CreativeDivision from "./CreativeDivision";
import DevelopmentDivision from "./DevelopmentDivision";
import TeamItem from "./TeamItem";

function Team() {
    return (
        <div className = "mt-10 md:mt-12">
            <TeamItem url = "/Sai Ankit DSC.png" name = "Sai Ankit" position = "Lead" github = "www.github.com/saiankit" linkedin = "www.linkedin.com"/>
            <DevelopmentDivision/>
            <BusinessDivision/>
            <CreativeDivision/>
        </div>
    )
}

export default Team