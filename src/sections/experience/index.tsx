import BackgroundShape from '../../components/BackgroundShape';
import TabGroup from '../../components/TabGroup';
import CapgeminiExperience from './experiences/Capgemini';
import MissguidedExperience from './experiences/Missguided';
import NaimuriExperience from './experiences/Naimuri';
import './styles.scss';

const Experience = () => {
  const experienceTabs = {
    "Missguided": <MissguidedExperience />,
    "Naimuri": <NaimuriExperience />,
    "Capgemini": <CapgeminiExperience />,
  }

  return (
    <div
      id="experience"
      className="experience-section">
      <div
        className="header">
        <h1 className="title">Experience</h1>
        <hr className="start divider" />
      </div>

      <TabGroup 
        currentTab="Missguided"
        tabs={experienceTabs}/>

      <hr className="end divider" />
      <BackgroundShape
        className='background-shape-1'
        color='light' />
      <BackgroundShape
        className='background-shape-2'
        color='light' />
    </div>
  );
}

export default Experience;
