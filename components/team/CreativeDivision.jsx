import TeamItem from './TeamItem';

function CreativeDivision() {
  return (
    <div>
      <h1 className="text-2xl font-light p-8">Creative Division</h1>
      <div className="grid-cols-1 md:flex gap-16 justify-center items-center">
        <TeamItem
          url="/Geetha Charan DSC.jpeg"
          name="Geetha Charan Nallana"
          position="UI/UX Lead"
          github="www.github.com/saiankit"
          linkedin="www.linkedin.com"
        />
        <TeamItem
          url="/Sambhav DSC.jpeg"
          name="Sambhav Jain"
          position="Design Lead"
          github="www.github.com/saiankit"
          linkedin="www.linkedin.com"
        />
        <TeamItem
          url="/Pratyush DSC.jpeg"
          name="Pratyush Choudhary"
          position="Media Lead"
          github="www.github.com/saiankit"
          linkedin="www.linkedin.com"
        />
      </div>
    </div>
  );
}

export default CreativeDivision;
