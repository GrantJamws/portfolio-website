import './styles.scss';
import TabGroup from '../../components/TabGroup';
import WebWeightsProject from './projects/WebWeights';
import BackgroundShape from '../../components/BackgroundShape';

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
      <BackgroundShape
        className='background-shape-1' />
      <BackgroundShape
        className='background-shape-2'
        color='light' />
    </div>
  );
}

export default Projects;
