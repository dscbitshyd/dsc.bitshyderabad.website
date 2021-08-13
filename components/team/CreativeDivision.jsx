import TeamItem from './TeamItem';

function CreativeDivision() {
  return (
    <div>
      <h1 className="text-2xl font-light p-8">Creative Division</h1>
      <div className="grid-cols-1 md:flex gap-16 justify-center items-center">
        <TeamItem
          url="/Geetha Charan DSC.jpeg"
          name="Geetha Charan"
          position="UI/UX Lead"
          github="www.github.com/saiankit"
          linkedin="https://www.linkedin.com/in/geethacharan-nallana-06691518b/"
        />
        <TeamItem
          url="/Sambhav DSC.jpeg"
          name="Sambhav Jain"
          position="Design Lead"
          github="www.github.com/saiankit"
          linkedin="https://www.linkedin.com/in/sambhav-jain-4864001aa/"
        />
        <TeamItem
          url="/Pratyush DSC.jpeg"
          name="Pratyush Choudhary"
          position="Video Production Lead"
          github="www.github.com/saiankit"
          linkedin="https://www.linkedin.com/in/pratyush-choudhary-a20978192/"
        />
      </div>
    </div>
  );
}

export default CreativeDivision;
