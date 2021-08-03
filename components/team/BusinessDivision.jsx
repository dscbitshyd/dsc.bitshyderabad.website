import TeamItem from './TeamItem';

function BusinessDivision() {
  return (
    <div>
      <h1 className="text-2xl font-light p-8">Business Division</h1>
      <div className="grid-cols-1 md:flex gap-16 justify-center items-center">
        <TeamItem
          url="/Mani DSC.jpg"
          name="Mani Venkat"
          position="Business Lead"
          github="www.github.com/saiankit"
          linkedin="www.linkedin.com"
        />
        <TeamItem
          url="/Shreya DSC.jpg"
          name="Vibha Narendra"
          position="Business Lead"
          github="www.github.com/saiankit"
          linkedin="www.linkedin.com"
        />
      </div>
    </div>
  );
}

export default BusinessDivision;
