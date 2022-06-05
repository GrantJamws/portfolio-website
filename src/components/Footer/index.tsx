import './styles.scss';
import linkedin from '../../svg/linkedin.svg';
import instagram from '../../svg/instagram.svg';
import github from '../../svg/github.svg';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {

  const handleLinkClick = (elementId: string) => {
    const section = document.getElementById(elementId);
    section?.scrollIntoView({behavior: "smooth"});
  };

  return (
    <div
      className={`footer ${className}`}>
      <span className="text">Designed and Created by Grant Worsley</span>
      <div
        className="social-links">
        <img
          alt='Linkedin Logo'
          src={linkedin} />
        <img
          alt='Instagram Logo'
          src={instagram} />
        <img
          alt='GitHub Logo'
          src={github} />
      </div>
    </div>
  );
}

export default Footer;
