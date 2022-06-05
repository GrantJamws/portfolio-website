import './styles.scss';
import TabGroup from '../../components/TabGroup';
import WebWeightsProject from './projects/WebWeights';

const Projects = () => {
  const projectTabs = {
    "WebWeights": <WebWeightsProject />,
  }

  return (
    <div
      id='projects'
      className="projects-section">
      <div
        className="header">
        <h1 className="title">Projects</h1>
        <hr className="start divider" />
      </div>

      <TabGroup 
        currentTab="WebWeights"
        tabs={projectTabs}/>

      <hr className="end divider" />
    </div>
  );
}

export default Projects;
