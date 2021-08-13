import TeamItem from './TeamItem';

function DevelopmentDivision() {
  return (
    <div>
      <h1 className="text-2xl font-light p-8">Development Division</h1>
      <div className="grid-cols-1 md:flex gap-16 justify-center items-center">
        <TeamItem
          dev
          url="/Shreya DSC.jpg"
          name="Shreya Banerjee"
          position="Dev Lead"
          github="https://github.com/Shreya1805-web"
          linkedin="https://www.linkedin.com/in/shreya-banerjee1805/"
        />
        <TeamItem
          dev
          url="/Vaishnavi DSC.jpg"
          name="Vaishnavi Shrivastava"
          position="Dev Lead"
          github="https://github.com/VaishnaviShri"
          linkedin="https://www.linkedin.com/in/vaishnavi-shrivastava-664747206/"
        />
      </div>
    </div>
  );
}

export default DevelopmentDivision;
