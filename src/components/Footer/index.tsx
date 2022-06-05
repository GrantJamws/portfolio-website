import './styles.scss';
import linkedin from '../../svg/linkedin.svg';
import instagram from '../../svg/instagram.svg';
import github from '../../svg/github.svg';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {

  const handleLinkClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div
      className={`footer ${className}`}>
      <span className="text">Designed and Created by Grant Worsley</span>
      <div
        className="social-links">
        <img
          alt='Linkedin Logo'
          src={linkedin}
          onClick={() => handleLinkClick('https://www.linkedin.com/in/grant-worsley-57b653a7')}  />
        <img
          alt='GitHub Logo'
          src={github}
          onClick={() => handleLinkClick('https://github.com/GrantJamws')} />
      </div>
    </div>
  );
}

export default Footer;
