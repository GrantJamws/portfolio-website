import '../styles.scss';

const Naimuri = () => {
  return (    
    <div className="experience-tab-content">
      <h1 className="title">Naimuri</h1>
      <h2 className="subtitle">September 2020 - October 2021</h2>
      <p className="content">Throughout working for Naimuri I have been doing web development and taking control of certain aspects of projects. We have completed multiple projects from initial proof of concept to initial bids on new work. These have primarily been on creating search applications for clients based on their data needs. One version has been a Vuejs search system using an Elastic data store, my work primarily focused on creating the website. Also creating a separate version based on the original Search out of React using TypeScript, this was made as a reusable based for this type of project. Each project has had a keen focus on Agile development using tickets and branching, also working on creating the project to be accessible out of the box. When creating these applications we used AWS for hosting, using EC2 instances, applying Cognito for user sign on. Alongside these projects I have also been working on creating a set of reusable components in the company for future proof of concept projects, these components have to have accessibility built in to start and use pre existing libraries such as material whilst making them easier to use e.g. single line component calls.</p>
    </div>
  );
}

export default Naimuri;
