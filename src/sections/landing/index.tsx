import Button from '../../components/Button';
import './styles.scss';

const Landing = () => {
  return (
    <div className="landing-section">
      <h1 className='greeting'>Hello!</h1>
      <h1 className='name'>I'm Grant</h1>
      <h3 className='introduction'>I'm a React Frontend Developer with a passion for UX design.</h3>
      <Button
        className='landing-button'>
        Let's Chat
      </Button>
      <span
        className='background-shape shape-1' />
      <span
        className='background-shape shape-2' />
      <span
        className='background-shape shape-3' />
    </div>
  );
}

export default Landing;
