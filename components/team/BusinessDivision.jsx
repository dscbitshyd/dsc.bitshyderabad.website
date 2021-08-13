import TeamItem from './TeamItem';

function BusinessDivision() {
  return (
    <div>
      <h1 className="text-2xl font-light p-8">Business Division</h1>
      <div className="grid-cols-1 md:flex gap-16 justify-center items-center">
        <TeamItem
          url="/Mani Venkat DSC.jpeg"
          name="Mani Venkat"
          position="Business Lead"
          github="www.github.com/saiankit"
          linkedin="https://www.linkedin.com/in/mani-venkat-149965192/"
        />
        <TeamItem
          url="/Vibha DSC.jpeg"
          name="Vibha Narendra"
          position="Business Lead"
          github="www.github.com/saiankit"
          linkedin="https://www.linkedin.com/in/vibha-n-4a14201a9/"
        />
      </div>
    </div>
  );
}

export default BusinessDivision;
