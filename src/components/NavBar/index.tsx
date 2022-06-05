import Button from '../Button';
import logo from '../../svg/logo.svg';
import linkedin from '../../svg/linkedin.svg';
import github from '../../svg/github.svg';
import './styles.scss';

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className = '' }) => {

  const handleLinkClick = (elementId: string) => {
    const section = document.getElementById(elementId);
    section?.scrollIntoView({behavior: "smooth"});
  };

  const handleSocialClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div
      className={`navbar ${className}`}>
      <div
        className='page-links'>
        <img
          alt='Grant Worsley Logo'
          src={logo} />
        <Button
          style='ghost'
          onClick={() => handleLinkClick('experience')}>
          Experience
        </Button>
        <Button
          style='ghost'
          onClick={() => handleLinkClick('projects')}>
          Projects
        </Button>
        <Button
          style='ghost'
          onClick={() => handleLinkClick('contact')}>
          About Me
        </Button>
      </div>
      <div
        className='social-links'>
        <img
          alt='Linkedin Logo'
          src={linkedin}
          onClick={() => handleSocialClick('https://www.linkedin.com/in/grant-worsley-57b653a7')}  />
        <img
          alt='GitHub Logo'
          src={github}
          onClick={() => handleSocialClick('https://github.com/GrantJamws')} />
      </div>
    </div>
  );
}

export default NavBar;
