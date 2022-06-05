import BackgroundShape from '../../components/BackgroundShape';
import Button from '../../components/Button';
import './styles.scss';

const Landing = () => {

  const handleLetChatClick = () => {
    window.open("mailto:worsleygrant@hotmail.com");
  };

  return (
    <div className="landing-section">
      <h1 className='greeting'>Hello!</h1>
      <h1 className='name'>I'm Grant</h1>
      <h3 className='introduction'>I'm a React Frontend Developer with a passion for UX design.</h3>
      <Button
        className='landing-button'
        onClick={handleLetChatClick}>
        Let's Chat
      </Button>
      <BackgroundShape
        className='background-shape-1'
        color='light' />
      <BackgroundShape
        className='background-shape-2' />
      <BackgroundShape
        className='background-shape-3'
        color='light' />
    </div>
  );
}

export default Landing;
