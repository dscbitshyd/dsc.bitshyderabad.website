import BusinessDivision from './BusinessDivision';
import CreativeDivision from './CreativeDivision';
import DevelopmentDivision from './DevelopmentDivision';
import TeamItem from './TeamItem';

function Team() {
  return (
    <div className="mt-8 md:mt-10">
      <div className="grid-cols-1 md:flex gap-16 justify-center items-center">
        <TeamItem
          dev
          url="/Sai Ankit DSC.png"
          name="Sai Ankit"
          position="Lead"
          github="www.github.com/saiankit"
          linkedin="www.linkedin.com"
        />
      </div>
      <DevelopmentDivision />
      <BusinessDivision />
      <CreativeDivision />
    </div>
  );
}

export default Team;
